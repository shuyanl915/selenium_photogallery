#pytest runtest.py --verbose --capture=no
import pytest
from selenium import webdriver
import sys, os
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.edge.service import Service as EdgeService
from webdriver_manager.microsoft import EdgeChromiumDriverManager
from time import sleep
import string
import random
import lorem
import urllib.request
from image_comparison import structural_similarity
from image_comparison import corrupt_image
import glob
import random

folder_path = os.getcwd() + "/images"
# Get a list of all file paths in the folder
file_paths = [os.path.join(folder_path, file_name) for file_name in os.listdir(folder_path)]

valid_search_keyword = []
invalid_search_keyword = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg', 'hhh', 'iii', 'jjj']
image_files = [file_path for file_path in file_paths if file_path.endswith((".jpg", ".jpeg", ".png"))]

for image_file in image_files:
    title = str(image_file).split('/')[-1].split('.')[0]
    title = title.capitalize()
    valid_search_keyword.append(title)

print(valid_search_keyword)
