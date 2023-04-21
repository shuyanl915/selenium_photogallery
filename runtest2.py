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
from time import sleep
import string
import random
import lorem
import urllib.request
from image_comparison import structural_similarity
from image_comparison import corrupt_image
import glob

public_ip  = "http://3.17.175.41:5000"
                             
def test_app():  
    #create a crhome webdriver and install the driver                            
    chrome_driver = webdriver.Chrome(service=Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()))
    # chrome_driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))
    chrome_driver.maximize_window()
    
    #go to photo gallery
    chrome_driver.get(public_ip)
    sleep(3)

    folder_path = os.getcwd() + "/images"
    # Get a list of all file paths in the folder
    file_paths = [os.path.join(folder_path, file_name) for file_name in os.listdir(folder_path)]

    # Filter the list to include only image files
    image_files = [file_path for file_path in file_paths if file_path.endswith((".jpg", ".jpeg", ".png"))]

    for image_file in image_files:
        title = str(image_file).split('/')[-1].split('.')[0]
        title = title.capitalize()

        # get random description,and tag names 
        description=lorem.sentence()
        s=lorem.sentence()
        tag1= s.split(' ')[1]
        tag2 = s.split(' ')[2]
        tags=tag1+","+tag2

        print("Expected title", title)
        print("Expected Description", description)
        print("Expected tag1", tag1)
        print("Expected tag2", tag2)

        sleep(1)

        #go to adds
        chrome_driver.get(public_ip + "/add")
        
        sleep(1)
        #get the current url of the driver
        current_url = chrome_driver.current_url

        #send the image to the element iamgefile 
        e=chrome_driver.find_element(By.ID, "imagefile")
        e.send_keys(image_file)
        sleep(1)
        
        #fill in title,description,tags 
        chrome_driver.find_element(By.ID, "title").send_keys(title)
        chrome_driver.find_element(By.ID, "description").send_keys(description)
        chrome_driver.find_element(By.ID, "tags").send_keys(tags)
        
        #submit by clicking the button
        chrome_driver.find_element(By.XPATH, "//*[@type='submit']").click() 

        #wait until url changes
        WebDriverWait(chrome_driver, 15).until(EC.url_changes(current_url))
            
        chrome_driver.get(public_ip)
        #wait until the cbp-item-wrapper shows up (this is new image item UI)
        WebDriverWait(chrome_driver, 15).until(EC.presence_of_element_located((By.XPATH , "//*[@class='cbp-item-wrapper']")))              

        
        sleep(1)
        #find the latests uploaded image and click on it, may need to go to the actual
        #page to see the UI and what each element are called 
        elements=[my_elem for my_elem in chrome_driver.find_elements(By.XPATH, "//*[@class='theme-portfolio-title']/a")]
        elements[-1].click()

        #get the elements by selenim find_element and check if it matches with what we put when adding image
        title_returned = chrome_driver.find_element(By.CLASS_NAME, "blog-grid-title-link").text
        elements=chrome_driver.find_elements(By.XPATH, "//*[@class='blog-grid-content']/p")
        uploaded = elements[0].text
        description_returned = elements[1].text

        ll=chrome_driver.find_elements(By.XPATH, "//*[@class='list-inline blog-sidebar-tags']/li")
        tag1_returned=ll[0].text
        tag2_returned=ll[1].text


        print("Returned Title", title_returned)
        print("Returned Description", description_returned)
        print("Returned tag1", tag1_returned)
        print("Returned tag2", tag2_returned)


        #check if the image is the same as the one we uploaded
        img_element = chrome_driver.find_element("tag name", "img")
        src_attribute = img_element.get_attribute("src")
        print("Retrieved S3 URL", src_attribute)
        # check if S3 URL is non-empty
        assert src_attribute != ""

        print()

        # Download the image and compare it with the original image
        local_file_path = 'downloaded_image.jpg'
        urllib.request.urlretrieve(src_attribute, local_file_path)
        # Check if the image is corrupt
        similarity_score = structural_similarity(image_file, local_file_path)

        assert title == title_returned
        assert description == description_returned
        assert tag1 == tag1_returned
        assert tag2 == tag2_returned
        # pytest will fail if the similarity score is less than 0.98
        assert similarity_score > 0.98
    
        sleep(1)
    chrome_driver.close()

if __name__ == "__main__":
    test_app()