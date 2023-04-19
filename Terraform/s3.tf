resource "aws_s3_bucket" "photobucket" {
  bucket = var.BUCKET_NAME
  force_destroy = true

  tags = {
    Name = var.BUCKET_NAME
  }
}

resource "aws_s3_bucket_acl" "photobucket_acl" {
  bucket = aws_s3_bucket.photobucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "photobucket" {
  bucket = aws_s3_bucket.photobucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_acl" "photobucket" {
  bucket = aws_s3_bucket.photobucket.id

  acl = "public-read"
}

resource "aws_s3_bucket_policy" "photobucket" {
  bucket = aws_s3_bucket.photobucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.photobucket.arn,
          "${aws_s3_bucket.photobucket.arn}/*",
        ]
      },
    ]
  })
}
