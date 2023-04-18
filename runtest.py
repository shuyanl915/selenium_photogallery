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
                             
def test_app():  
    #create a crhome webdriver and install the driver                            
    chrome_driver = webdriver.Chrome(service=Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()))
    # chrome_driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))
    chrome_driver.maximize_window()
       
    #get random title.description,and tag names 
    title=lorem.sentence()[0:20].strip()
    description=lorem.sentence()
    s=lorem.sentence()
    tag1= s.split(' ')[1]
    tag2 = s.split(' ')[2]
    tags=tag1+","+tag2

    print(title)
    print(description)
    print(tag1)
    print(tag2)
    
    #go to localhost:5002  
    chrome_driver.get('http://localhost:5002')
       
    sleep(1)
    #go to adds
    chrome_driver.get('http://localhost:5002/add')

    sleep(1)
    #get the current url of the driver
    current_url = chrome_driver.current_url

    #send the image to the element iamgefile 
    e=chrome_driver.find_element(By.ID, "imagefile")
    e.send_keys(os.getcwd()+"/image.jpg")
    
    #fill in title,description,tags 
    chrome_driver.find_element(By.ID, "title").send_keys(title)
    chrome_driver.find_element(By.ID, "description").send_keys(description)
    chrome_driver.find_element(By.ID, "tags").send_keys(tags)
    
    #submit by clicking the button
    chrome_driver.find_element(By.XPATH, "//*[@type='submit']").click() 

    #wait until url changes
    WebDriverWait(chrome_driver, 15).until(EC.url_changes(current_url))
        
    chrome_driver.get('http://localhost:5002')
    #wait until the cbp-item-wrapper shows up (this is new image item UI)
    WebDriverWait(chrome_driver, 15).until(EC.presence_of_element_located((By.XPATH, "//*[@class='cbp-item-wrapper']")))              

    
    sleep(5)
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


    print(title_returned)
    print(description_returned)
    print(tag1_returned)
    print(tag2_returned)

    assert title == title_returned
    assert description == description_returned
    assert tag1 == tag1_returned
    assert tag2 == tag2_returned
    
    sleep(2)
    chrome_driver.close()
    
    

