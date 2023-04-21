import cv2
import numpy as np
from random import randint

def corrupt_image(imagefile):
    image = cv2.imread(imagefile, cv2.IMREAD_COLOR)
    rows, cols = image.shape[:2]

    num_tears = randint(0,8) # Number of screen tears to simulate
    for _ in range(num_tears):
        y = np.random.randint(0, image.shape[0])
        tear_height = np.random.randint(0, 30)
        image[y:y + tear_height, :, :] = np.roll(image[y:y + tear_height, :, :], 50, axis=1)

    # Add random horizontal lines to the corrupted image
    num_lines = randint(0,8)  # Number of lines to add
    for _ in range(num_lines):
        y = np.random.randint(0, rows)
        thickness = np.random.randint(1, 5)
        color = (0, 255, 0)
        cv2.line(image, (0, y), (cols, y), color, thickness)
    
    # Convert certain areas to grayscale
    num_black_rectangles = randint(0,5)  # Number of rectangles to convert to grayscale
    rect_height = randint(0,30)  # Height of the grayscale rectangles
    for _ in range(num_black_rectangles):
        y = np.random.randint(0, rows - rect_height)
        x = np.random.randint(0, cols)
        width = np.random.randint(50, 150)
        cv2.rectangle(image, (x, y), (x + width, y + rect_height), (0,0,0), -1)
    
    # Add random noise to the corrupted image
    num_noise = randint(0,5)  # Number of noise to add
    for _ in range(num_noise):
        y = np.random.randint(0, rows)
        x = np.random.randint(0, cols)
        width = np.random.randint(50, 150)
        cv2.rectangle(image, (x, y), (x + width, y + rect_height), (0,0,0), -1)
    
    return image

from skimage import io
from skimage import metrics

def structural_similarity(image1_file, image2_file):
    # Load two images
    image1 = cv2.imread(image1_file)
    image2 = cv2.imread(image2_file)
    image2 = cv2.resize(image2, image1.shape[:2][::-1])

    image1 = cv2.cvtColor(image1, cv2.COLOR_BGR2GRAY)
    image2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)

    # Compute SSIM score
    ssim_score = metrics.structural_similarity(image1, image2)

    return ssim_score


if __name__ == '__main__':
    image = corrupt_image('bus1.png')
    cv2.imwrite('corrupted.png', image)
    print(structural_similarity('bus1.png', 'corrupted.png'))