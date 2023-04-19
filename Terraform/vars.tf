variable "AWS_ACCESS_KEY" {
}

variable "AWS_SECRET_KEY" {
}

variable "BUCKET_NAME" {

}

variable "DB_NAME" {

}

variable "DB_USERNAME" {

}

variable "DB_PASSWORD" {

}

variable "DB_PORT" {
  type = number
}

variable "DB_TABLE" {

}

variable "AWS_REGION" {
  default = "us-east-2"
}

variable "INSTANCE_USERNAME" {
  default = "ubuntu"
}

variable "AMIS" {
  type = map(string)
  default = {
    us-east-2 = "ami-0a695f0d95cefc163"
  }
}

