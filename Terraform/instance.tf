resource "aws_db_instance" "photogallery" {
  allocated_storage    = 10
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t3.micro"
  db_name              = var.DB_NAME
  username             = var.DB_USERNAME
  password             = var.DB_PASSWORD
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  vpc_security_group_ids  = [aws_security_group.allow-mysql.id]
  
  tags = {
    Name = "photogallery"
  }
}

output "db-address" {
  value = aws_db_instance.photogallery.address
}


data "template_file" "user_data" {
  template = file("./userdata.tpl")
  vars = {
    db_RDS = aws_db_instance.photogallery.address
  }
}

resource "tls_private_key" "rsa" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "local_file" "my_key" {
  content  = tls_private_key.rsa.private_key_pem
  filename = "mykeypair.pem"
}

resource "aws_key_pair" "mykeypair" {
  key_name = "mykeypair"
  public_key = tls_private_key.rsa.public_key_openssh
}

# Create EC2 ( only after RDS is provisioned)
resource "aws_instance" "photogallery" {
  ami           = var.AMIS[var.AWS_REGION]
  instance_type = "t2.nano"
  vpc_security_group_ids  = [aws_security_group.photogallery.id]
  
  # the public SSH key
  key_name = aws_key_pair.mykeypair.key_name

  # role:
  iam_instance_profile = aws_iam_instance_profile.s3-mybucket-role-instanceprofile.name
  
  user_data = data.template_file.user_data.rendered

  provisioner "local-exec" {
    command = <<EOT
      tar --xz -cf photogallery.tar.xz photogallery 
      echo AWS_ACCESS_KEY=${var.AWS_ACCESS_KEY} >> .env 
      echo AWS_SECRET_ACCESS_KEY=${var.AWS_SECRET_KEY} >> .env
      echo BUCKET_NAME=${var.BUCKET_NAME} >> .env 
      echo DB_HOSTNAME=${aws_db_instance.photogallery.address} >> .env 
      echo DB_NAME=${var.DB_NAME} >> .env 
      echo DB_USERNAME=${var.DB_USERNAME} >> .env 
      echo DB_PASSWORD=${var.DB_PASSWORD} >> .env 
      echo DB_PORT=${var.DB_PORT} >> .env 
      echo DB_TABLE=${var.DB_TABLE} >> .env 
      echo PUBLIC_IP=${aws_instance.photogallery.public_ip} >> .env 
    EOT

  }

  provisioner "file" {
    source      = "photogallery.tar.xz"
    destination = "/home/ubuntu/photogallery.tar.xz"
  }
  
  provisioner "file" {
    source      = "photogallery.conf"
    destination = "/home/ubuntu/photogallery.conf"
  }
  
  provisioner "file" {
    source      = "script.sh"
    destination = "/home/ubuntu/script.sh"
  }

  provisioner "file" {
    source      = ".env"
    destination = "/home/ubuntu/.env"
  }

  provisioner "remote-exec" {
    inline = [
      "cloud-init status --wait",
      "chmod +x /home/ubuntu/script.sh",
      "sed -i -e 's/\r$//' /home/ubuntu/script.sh",  # Remove the spurious CR characters.
      "sudo sh /home/ubuntu/script.sh",
    ]
  }
  
  connection {
    type        = "ssh"
    user        = var.INSTANCE_USERNAME
    private_key = tls_private_key.rsa.private_key_pem
    host        = aws_instance.photogallery.public_ip
  }
  
  tags = {
    Name = "photogallery"
  }
  
}

output "ip" {
  value = aws_instance.photogallery.public_ip
}

