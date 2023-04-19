#!/bin/bash

# varaible will be populated by terraform template
db_RDS=${db_RDS}

echo export DB_HOSTNAME=$db_RDS | sudo tee -a /etc/profile







