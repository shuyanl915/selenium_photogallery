#!/bin/bash

apt update  -y
apt -y install python3-pip supervisor

cp /home/ubuntu/photogallery.conf /etc/supervisor/conf.d/

tar -Jxvf /home/ubuntu/photogallery.tar.xz

pip3 install -r /home/ubuntu/photogallery/requirements.txt

mv /home/ubuntu/.env /home/ubuntu/photogallery/.env

python3 /home/ubuntu/photogallery/utils/photo-table.py

# ****NO RECOMMENDED FOR PRODUCTION APPLICATIONS***
chmod 777 /home/ubuntu/photogallery/static/media/

supervisorctl reread
supervisorctl update



