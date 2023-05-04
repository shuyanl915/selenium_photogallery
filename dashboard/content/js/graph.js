/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 5995.0, "series": [{"data": [[0.0, 61.0], [0.1, 62.0], [0.2, 64.0], [0.3, 64.0], [0.4, 65.0], [0.5, 65.0], [0.6, 65.0], [0.7, 66.0], [0.8, 67.0], [0.9, 67.0], [1.0, 68.0], [1.1, 68.0], [1.2, 69.0], [1.3, 69.0], [1.4, 69.0], [1.5, 70.0], [1.6, 70.0], [1.7, 72.0], [1.8, 72.0], [1.9, 74.0], [2.0, 75.0], [2.1, 76.0], [2.2, 77.0], [2.3, 78.0], [2.4, 78.0], [2.5, 78.0], [2.6, 79.0], [2.7, 80.0], [2.8, 80.0], [2.9, 81.0], [3.0, 82.0], [3.1, 83.0], [3.2, 84.0], [3.3, 85.0], [3.4, 85.0], [3.5, 86.0], [3.6, 87.0], [3.7, 88.0], [3.8, 89.0], [3.9, 89.0], [4.0, 91.0], [4.1, 91.0], [4.2, 93.0], [4.3, 93.0], [4.4, 94.0], [4.5, 95.0], [4.6, 95.0], [4.7, 95.0], [4.8, 96.0], [4.9, 96.0], [5.0, 97.0], [5.1, 98.0], [5.2, 100.0], [5.3, 100.0], [5.4, 101.0], [5.5, 101.0], [5.6, 102.0], [5.7, 102.0], [5.8, 102.0], [5.9, 103.0], [6.0, 103.0], [6.1, 105.0], [6.2, 105.0], [6.3, 105.0], [6.4, 106.0], [6.5, 107.0], [6.6, 107.0], [6.7, 107.0], [6.8, 108.0], [6.9, 109.0], [7.0, 110.0], [7.1, 111.0], [7.2, 111.0], [7.3, 112.0], [7.4, 114.0], [7.5, 116.0], [7.6, 116.0], [7.7, 117.0], [7.8, 118.0], [7.9, 118.0], [8.0, 119.0], [8.1, 120.0], [8.2, 120.0], [8.3, 122.0], [8.4, 124.0], [8.5, 124.0], [8.6, 125.0], [8.7, 126.0], [8.8, 126.0], [8.9, 127.0], [9.0, 128.0], [9.1, 129.0], [9.2, 130.0], [9.3, 130.0], [9.4, 133.0], [9.5, 133.0], [9.6, 134.0], [9.7, 134.0], [9.8, 135.0], [9.9, 136.0], [10.0, 136.0], [10.1, 136.0], [10.2, 137.0], [10.3, 137.0], [10.4, 138.0], [10.5, 138.0], [10.6, 139.0], [10.7, 139.0], [10.8, 139.0], [10.9, 139.0], [11.0, 140.0], [11.1, 140.0], [11.2, 140.0], [11.3, 140.0], [11.4, 140.0], [11.5, 140.0], [11.6, 141.0], [11.7, 142.0], [11.8, 142.0], [11.9, 143.0], [12.0, 143.0], [12.1, 143.0], [12.2, 144.0], [12.3, 145.0], [12.4, 146.0], [12.5, 146.0], [12.6, 147.0], [12.7, 148.0], [12.8, 148.0], [12.9, 148.0], [13.0, 148.0], [13.1, 149.0], [13.2, 151.0], [13.3, 151.0], [13.4, 152.0], [13.5, 152.0], [13.6, 153.0], [13.7, 154.0], [13.8, 154.0], [13.9, 156.0], [14.0, 156.0], [14.1, 157.0], [14.2, 158.0], [14.3, 159.0], [14.4, 159.0], [14.5, 160.0], [14.6, 160.0], [14.7, 161.0], [14.8, 162.0], [14.9, 163.0], [15.0, 163.0], [15.1, 163.0], [15.2, 165.0], [15.3, 165.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 167.0], [16.0, 167.0], [16.1, 168.0], [16.2, 169.0], [16.3, 170.0], [16.4, 170.0], [16.5, 171.0], [16.6, 171.0], [16.7, 172.0], [16.8, 172.0], [16.9, 172.0], [17.0, 173.0], [17.1, 173.0], [17.2, 173.0], [17.3, 173.0], [17.4, 174.0], [17.5, 174.0], [17.6, 175.0], [17.7, 175.0], [17.8, 176.0], [17.9, 177.0], [18.0, 177.0], [18.1, 177.0], [18.2, 178.0], [18.3, 178.0], [18.4, 179.0], [18.5, 179.0], [18.6, 179.0], [18.7, 180.0], [18.8, 180.0], [18.9, 180.0], [19.0, 180.0], [19.1, 180.0], [19.2, 181.0], [19.3, 181.0], [19.4, 181.0], [19.5, 182.0], [19.6, 182.0], [19.7, 183.0], [19.8, 183.0], [19.9, 184.0], [20.0, 185.0], [20.1, 185.0], [20.2, 186.0], [20.3, 186.0], [20.4, 187.0], [20.5, 187.0], [20.6, 188.0], [20.7, 189.0], [20.8, 189.0], [20.9, 190.0], [21.0, 190.0], [21.1, 190.0], [21.2, 192.0], [21.3, 192.0], [21.4, 192.0], [21.5, 193.0], [21.6, 193.0], [21.7, 194.0], [21.8, 196.0], [21.9, 196.0], [22.0, 196.0], [22.1, 196.0], [22.2, 197.0], [22.3, 197.0], [22.4, 197.0], [22.5, 197.0], [22.6, 197.0], [22.7, 197.0], [22.8, 198.0], [22.9, 198.0], [23.0, 200.0], [23.1, 200.0], [23.2, 200.0], [23.3, 201.0], [23.4, 202.0], [23.5, 202.0], [23.6, 203.0], [23.7, 204.0], [23.8, 204.0], [23.9, 204.0], [24.0, 204.0], [24.1, 205.0], [24.2, 206.0], [24.3, 206.0], [24.4, 207.0], [24.5, 207.0], [24.6, 208.0], [24.7, 208.0], [24.8, 209.0], [24.9, 209.0], [25.0, 210.0], [25.1, 211.0], [25.2, 211.0], [25.3, 211.0], [25.4, 212.0], [25.5, 212.0], [25.6, 212.0], [25.7, 213.0], [25.8, 213.0], [25.9, 214.0], [26.0, 214.0], [26.1, 214.0], [26.2, 215.0], [26.3, 215.0], [26.4, 216.0], [26.5, 216.0], [26.6, 216.0], [26.7, 216.0], [26.8, 217.0], [26.9, 217.0], [27.0, 217.0], [27.1, 217.0], [27.2, 217.0], [27.3, 218.0], [27.4, 218.0], [27.5, 219.0], [27.6, 219.0], [27.7, 219.0], [27.8, 220.0], [27.9, 220.0], [28.0, 220.0], [28.1, 220.0], [28.2, 220.0], [28.3, 220.0], [28.4, 221.0], [28.5, 221.0], [28.6, 221.0], [28.7, 221.0], [28.8, 222.0], [28.9, 222.0], [29.0, 222.0], [29.1, 222.0], [29.2, 222.0], [29.3, 223.0], [29.4, 223.0], [29.5, 223.0], [29.6, 223.0], [29.7, 223.0], [29.8, 224.0], [29.9, 224.0], [30.0, 224.0], [30.1, 225.0], [30.2, 225.0], [30.3, 226.0], [30.4, 226.0], [30.5, 228.0], [30.6, 228.0], [30.7, 228.0], [30.8, 229.0], [30.9, 229.0], [31.0, 230.0], [31.1, 231.0], [31.2, 231.0], [31.3, 232.0], [31.4, 233.0], [31.5, 233.0], [31.6, 234.0], [31.7, 234.0], [31.8, 234.0], [31.9, 234.0], [32.0, 235.0], [32.1, 235.0], [32.2, 236.0], [32.3, 236.0], [32.4, 236.0], [32.5, 236.0], [32.6, 237.0], [32.7, 237.0], [32.8, 237.0], [32.9, 237.0], [33.0, 238.0], [33.1, 238.0], [33.2, 239.0], [33.3, 239.0], [33.4, 239.0], [33.5, 239.0], [33.6, 240.0], [33.7, 240.0], [33.8, 240.0], [33.9, 241.0], [34.0, 241.0], [34.1, 241.0], [34.2, 241.0], [34.3, 241.0], [34.4, 242.0], [34.5, 242.0], [34.6, 243.0], [34.7, 243.0], [34.8, 244.0], [34.9, 244.0], [35.0, 244.0], [35.1, 244.0], [35.2, 245.0], [35.3, 245.0], [35.4, 245.0], [35.5, 245.0], [35.6, 245.0], [35.7, 245.0], [35.8, 246.0], [35.9, 246.0], [36.0, 246.0], [36.1, 247.0], [36.2, 247.0], [36.3, 247.0], [36.4, 247.0], [36.5, 248.0], [36.6, 248.0], [36.7, 248.0], [36.8, 249.0], [36.9, 249.0], [37.0, 249.0], [37.1, 249.0], [37.2, 250.0], [37.3, 250.0], [37.4, 250.0], [37.5, 250.0], [37.6, 251.0], [37.7, 251.0], [37.8, 251.0], [37.9, 251.0], [38.0, 252.0], [38.1, 252.0], [38.2, 252.0], [38.3, 252.0], [38.4, 252.0], [38.5, 253.0], [38.6, 253.0], [38.7, 253.0], [38.8, 253.0], [38.9, 254.0], [39.0, 254.0], [39.1, 254.0], [39.2, 255.0], [39.3, 255.0], [39.4, 255.0], [39.5, 256.0], [39.6, 256.0], [39.7, 257.0], [39.8, 258.0], [39.9, 258.0], [40.0, 258.0], [40.1, 258.0], [40.2, 258.0], [40.3, 259.0], [40.4, 259.0], [40.5, 259.0], [40.6, 260.0], [40.7, 260.0], [40.8, 261.0], [40.9, 261.0], [41.0, 261.0], [41.1, 262.0], [41.2, 263.0], [41.3, 263.0], [41.4, 264.0], [41.5, 265.0], [41.6, 265.0], [41.7, 265.0], [41.8, 266.0], [41.9, 266.0], [42.0, 266.0], [42.1, 267.0], [42.2, 268.0], [42.3, 268.0], [42.4, 269.0], [42.5, 269.0], [42.6, 270.0], [42.7, 270.0], [42.8, 271.0], [42.9, 271.0], [43.0, 271.0], [43.1, 272.0], [43.2, 272.0], [43.3, 273.0], [43.4, 274.0], [43.5, 274.0], [43.6, 275.0], [43.7, 275.0], [43.8, 276.0], [43.9, 277.0], [44.0, 278.0], [44.1, 279.0], [44.2, 283.0], [44.3, 284.0], [44.4, 285.0], [44.5, 287.0], [44.6, 290.0], [44.7, 290.0], [44.8, 291.0], [44.9, 291.0], [45.0, 292.0], [45.1, 292.0], [45.2, 293.0], [45.3, 296.0], [45.4, 299.0], [45.5, 301.0], [45.6, 302.0], [45.7, 304.0], [45.8, 305.0], [45.9, 305.0], [46.0, 306.0], [46.1, 307.0], [46.2, 309.0], [46.3, 310.0], [46.4, 314.0], [46.5, 316.0], [46.6, 319.0], [46.7, 320.0], [46.8, 321.0], [46.9, 321.0], [47.0, 324.0], [47.1, 327.0], [47.2, 328.0], [47.3, 331.0], [47.4, 331.0], [47.5, 331.0], [47.6, 334.0], [47.7, 346.0], [47.8, 347.0], [47.9, 350.0], [48.0, 352.0], [48.1, 355.0], [48.2, 356.0], [48.3, 356.0], [48.4, 356.0], [48.5, 358.0], [48.6, 358.0], [48.7, 358.0], [48.8, 358.0], [48.9, 359.0], [49.0, 359.0], [49.1, 360.0], [49.2, 361.0], [49.3, 369.0], [49.4, 370.0], [49.5, 376.0], [49.6, 378.0], [49.7, 379.0], [49.8, 380.0], [49.9, 383.0], [50.0, 384.0], [50.1, 385.0], [50.2, 387.0], [50.3, 389.0], [50.4, 390.0], [50.5, 392.0], [50.6, 393.0], [50.7, 397.0], [50.8, 397.0], [50.9, 399.0], [51.0, 400.0], [51.1, 405.0], [51.2, 405.0], [51.3, 409.0], [51.4, 409.0], [51.5, 410.0], [51.6, 410.0], [51.7, 411.0], [51.8, 411.0], [51.9, 414.0], [52.0, 416.0], [52.1, 419.0], [52.2, 420.0], [52.3, 422.0], [52.4, 422.0], [52.5, 424.0], [52.6, 424.0], [52.7, 431.0], [52.8, 434.0], [52.9, 436.0], [53.0, 438.0], [53.1, 440.0], [53.2, 442.0], [53.3, 447.0], [53.4, 450.0], [53.5, 455.0], [53.6, 456.0], [53.7, 461.0], [53.8, 463.0], [53.9, 467.0], [54.0, 467.0], [54.1, 470.0], [54.2, 470.0], [54.3, 471.0], [54.4, 472.0], [54.5, 472.0], [54.6, 479.0], [54.7, 482.0], [54.8, 486.0], [54.9, 493.0], [55.0, 495.0], [55.1, 497.0], [55.2, 497.0], [55.3, 502.0], [55.4, 504.0], [55.5, 505.0], [55.6, 506.0], [55.7, 509.0], [55.8, 514.0], [55.9, 515.0], [56.0, 516.0], [56.1, 518.0], [56.2, 518.0], [56.3, 519.0], [56.4, 520.0], [56.5, 522.0], [56.6, 522.0], [56.7, 523.0], [56.8, 524.0], [56.9, 526.0], [57.0, 526.0], [57.1, 527.0], [57.2, 527.0], [57.3, 528.0], [57.4, 528.0], [57.5, 529.0], [57.6, 530.0], [57.7, 530.0], [57.8, 531.0], [57.9, 535.0], [58.0, 537.0], [58.1, 538.0], [58.2, 538.0], [58.3, 540.0], [58.4, 542.0], [58.5, 542.0], [58.6, 544.0], [58.7, 544.0], [58.8, 545.0], [58.9, 547.0], [59.0, 547.0], [59.1, 549.0], [59.2, 552.0], [59.3, 553.0], [59.4, 553.0], [59.5, 555.0], [59.6, 555.0], [59.7, 556.0], [59.8, 556.0], [59.9, 557.0], [60.0, 558.0], [60.1, 558.0], [60.2, 562.0], [60.3, 563.0], [60.4, 564.0], [60.5, 565.0], [60.6, 566.0], [60.7, 567.0], [60.8, 568.0], [60.9, 569.0], [61.0, 570.0], [61.1, 570.0], [61.2, 570.0], [61.3, 571.0], [61.4, 571.0], [61.5, 572.0], [61.6, 572.0], [61.7, 574.0], [61.8, 574.0], [61.9, 576.0], [62.0, 577.0], [62.1, 577.0], [62.2, 578.0], [62.3, 578.0], [62.4, 578.0], [62.5, 578.0], [62.6, 582.0], [62.7, 583.0], [62.8, 583.0], [62.9, 583.0], [63.0, 585.0], [63.1, 586.0], [63.2, 586.0], [63.3, 590.0], [63.4, 591.0], [63.5, 593.0], [63.6, 593.0], [63.7, 594.0], [63.8, 594.0], [63.9, 596.0], [64.0, 597.0], [64.1, 600.0], [64.2, 603.0], [64.3, 606.0], [64.4, 607.0], [64.5, 610.0], [64.6, 612.0], [64.7, 614.0], [64.8, 615.0], [64.9, 617.0], [65.0, 618.0], [65.1, 620.0], [65.2, 622.0], [65.3, 623.0], [65.4, 625.0], [65.5, 627.0], [65.6, 628.0], [65.7, 629.0], [65.8, 629.0], [65.9, 634.0], [66.0, 635.0], [66.1, 638.0], [66.2, 640.0], [66.3, 645.0], [66.4, 646.0], [66.5, 652.0], [66.6, 652.0], [66.7, 656.0], [66.8, 657.0], [66.9, 658.0], [67.0, 658.0], [67.1, 660.0], [67.2, 665.0], [67.3, 668.0], [67.4, 670.0], [67.5, 672.0], [67.6, 673.0], [67.7, 680.0], [67.8, 683.0], [67.9, 691.0], [68.0, 701.0], [68.1, 703.0], [68.2, 705.0], [68.3, 707.0], [68.4, 708.0], [68.5, 708.0], [68.6, 708.0], [68.7, 718.0], [68.8, 723.0], [68.9, 724.0], [69.0, 727.0], [69.1, 733.0], [69.2, 734.0], [69.3, 747.0], [69.4, 747.0], [69.5, 753.0], [69.6, 754.0], [69.7, 760.0], [69.8, 762.0], [69.9, 765.0], [70.0, 768.0], [70.1, 778.0], [70.2, 780.0], [70.3, 785.0], [70.4, 785.0], [70.5, 786.0], [70.6, 786.0], [70.7, 791.0], [70.8, 793.0], [70.9, 797.0], [71.0, 798.0], [71.1, 810.0], [71.2, 810.0], [71.3, 812.0], [71.4, 812.0], [71.5, 817.0], [71.6, 818.0], [71.7, 823.0], [71.8, 825.0], [71.9, 826.0], [72.0, 828.0], [72.1, 838.0], [72.2, 839.0], [72.3, 841.0], [72.4, 842.0], [72.5, 847.0], [72.6, 848.0], [72.7, 857.0], [72.8, 858.0], [72.9, 861.0], [73.0, 864.0], [73.1, 867.0], [73.2, 868.0], [73.3, 883.0], [73.4, 884.0], [73.5, 897.0], [73.6, 898.0], [73.7, 900.0], [73.8, 901.0], [73.9, 907.0], [74.0, 907.0], [74.1, 910.0], [74.2, 912.0], [74.3, 918.0], [74.4, 921.0], [74.5, 923.0], [74.6, 924.0], [74.7, 925.0], [74.8, 925.0], [74.9, 926.0], [75.0, 927.0], [75.1, 928.0], [75.2, 929.0], [75.3, 929.0], [75.4, 929.0], [75.5, 930.0], [75.6, 933.0], [75.7, 935.0], [75.8, 936.0], [75.9, 943.0], [76.0, 945.0], [76.1, 950.0], [76.2, 950.0], [76.3, 952.0], [76.4, 953.0], [76.5, 961.0], [76.6, 961.0], [76.7, 963.0], [76.8, 965.0], [76.9, 971.0], [77.0, 978.0], [77.1, 983.0], [77.2, 984.0], [77.3, 992.0], [77.4, 995.0], [77.5, 996.0], [77.6, 999.0], [77.7, 1005.0], [77.8, 1007.0], [77.9, 1009.0], [78.0, 1010.0], [78.1, 1013.0], [78.2, 1013.0], [78.3, 1014.0], [78.4, 1015.0], [78.5, 1021.0], [78.6, 1024.0], [78.7, 1025.0], [78.8, 1026.0], [78.9, 1030.0], [79.0, 1035.0], [79.1, 1040.0], [79.2, 1043.0], [79.3, 1044.0], [79.4, 1047.0], [79.5, 1049.0], [79.6, 1051.0], [79.7, 1054.0], [79.8, 1056.0], [79.9, 1059.0], [80.0, 1061.0], [80.1, 1065.0], [80.2, 1073.0], [80.3, 1077.0], [80.4, 1079.0], [80.5, 1080.0], [80.6, 1085.0], [80.7, 1088.0], [80.8, 1100.0], [80.9, 1104.0], [81.0, 1113.0], [81.1, 1114.0], [81.2, 1118.0], [81.3, 1119.0], [81.4, 1126.0], [81.5, 1126.0], [81.6, 1130.0], [81.7, 1131.0], [81.8, 1133.0], [81.9, 1135.0], [82.0, 1142.0], [82.1, 1143.0], [82.2, 1149.0], [82.3, 1151.0], [82.4, 1155.0], [82.5, 1156.0], [82.6, 1165.0], [82.7, 1174.0], [82.8, 1179.0], [82.9, 1180.0], [83.0, 1183.0], [83.1, 1185.0], [83.2, 1202.0], [83.3, 1207.0], [83.4, 1217.0], [83.5, 1223.0], [83.6, 1229.0], [83.7, 1231.0], [83.8, 1236.0], [83.9, 1239.0], [84.0, 1245.0], [84.1, 1247.0], [84.2, 1253.0], [84.3, 1254.0], [84.4, 1257.0], [84.5, 1257.0], [84.6, 1260.0], [84.7, 1261.0], [84.8, 1265.0], [84.9, 1268.0], [85.0, 1271.0], [85.1, 1274.0], [85.2, 1280.0], [85.3, 1287.0], [85.4, 1297.0], [85.5, 1298.0], [85.6, 1315.0], [85.7, 1319.0], [85.8, 1321.0], [85.9, 1323.0], [86.0, 1328.0], [86.1, 1329.0], [86.2, 1342.0], [86.3, 1342.0], [86.4, 1348.0], [86.5, 1348.0], [86.6, 1352.0], [86.7, 1366.0], [86.8, 1380.0], [86.9, 1384.0], [87.0, 1387.0], [87.1, 1391.0], [87.2, 1395.0], [87.3, 1401.0], [87.4, 1404.0], [87.5, 1408.0], [87.6, 1411.0], [87.7, 1415.0], [87.8, 1422.0], [87.9, 1422.0], [88.0, 1429.0], [88.1, 1432.0], [88.2, 1434.0], [88.3, 1434.0], [88.4, 1438.0], [88.5, 1439.0], [88.6, 1443.0], [88.7, 1446.0], [88.8, 1448.0], [88.9, 1453.0], [89.0, 1461.0], [89.1, 1471.0], [89.2, 1474.0], [89.3, 1479.0], [89.4, 1482.0], [89.5, 1483.0], [89.6, 1496.0], [89.7, 1496.0], [89.8, 1499.0], [89.9, 1500.0], [90.0, 1509.0], [90.1, 1515.0], [90.2, 1524.0], [90.3, 1529.0], [90.4, 1533.0], [90.5, 1538.0], [90.6, 1543.0], [90.7, 1544.0], [90.8, 1550.0], [90.9, 1551.0], [91.0, 1566.0], [91.1, 1567.0], [91.2, 1570.0], [91.3, 1570.0], [91.4, 1572.0], [91.5, 1572.0], [91.6, 1579.0], [91.7, 1584.0], [91.8, 1595.0], [91.9, 1595.0], [92.0, 1604.0], [92.1, 1604.0], [92.2, 1613.0], [92.3, 1614.0], [92.4, 1625.0], [92.5, 1627.0], [92.6, 1630.0], [92.7, 1632.0], [92.8, 1638.0], [92.9, 1643.0], [93.0, 1669.0], [93.1, 1674.0], [93.2, 1682.0], [93.3, 1686.0], [93.4, 1687.0], [93.5, 1691.0], [93.6, 1705.0], [93.7, 1710.0], [93.8, 1731.0], [93.9, 1733.0], [94.0, 1742.0], [94.1, 1745.0], [94.2, 1770.0], [94.3, 1771.0], [94.4, 1778.0], [94.5, 1782.0], [94.6, 1792.0], [94.7, 1797.0], [94.8, 1809.0], [94.9, 1830.0], [95.0, 1855.0], [95.1, 1872.0], [95.2, 1919.0], [95.3, 1956.0], [95.4, 1980.0], [95.5, 1987.0], [95.6, 2012.0], [95.7, 2019.0], [95.8, 2054.0], [95.9, 2057.0], [96.0, 2073.0], [96.1, 2075.0], [96.2, 2096.0], [96.3, 2097.0], [96.4, 2099.0], [96.5, 2100.0], [96.6, 2117.0], [96.7, 2155.0], [96.8, 2167.0], [96.9, 2197.0], [97.0, 2199.0], [97.1, 2210.0], [97.2, 2232.0], [97.3, 2249.0], [97.4, 2274.0], [97.5, 2279.0], [97.6, 2299.0], [97.7, 2338.0], [97.8, 2363.0], [97.9, 2375.0], [98.0, 2450.0], [98.1, 2452.0], [98.2, 2523.0], [98.3, 2568.0], [98.4, 2603.0], [98.5, 2612.0], [98.6, 2709.0], [98.7, 2826.0], [98.8, 2860.0], [98.9, 2904.0], [99.0, 3063.0], [99.1, 3111.0], [99.2, 3164.0], [99.3, 3166.0], [99.4, 3413.0], [99.5, 3471.0], [99.6, 3644.0], [99.7, 4035.0], [99.8, 4195.0], [99.9, 4925.0]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 673.0, "series": [{"data": [[0.0, 155.0], [600.0, 118.0], [700.0, 92.0], [800.0, 80.0], [900.0, 118.0], [1000.0, 96.0], [1100.0, 72.0], [1200.0, 70.0], [1300.0, 52.0], [1400.0, 78.0], [1500.0, 64.0], [100.0, 534.0], [1600.0, 46.0], [1700.0, 36.0], [1800.0, 14.0], [1900.0, 10.0], [2000.0, 28.0], [2100.0, 18.0], [2200.0, 18.0], [2300.0, 8.0], [2400.0, 6.0], [2500.0, 6.0], [2600.0, 8.0], [2800.0, 6.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 8.0], [200.0, 673.0], [3300.0, 2.0], [3400.0, 4.0], [3600.0, 4.0], [4000.0, 2.0], [4100.0, 4.0], [300.0, 166.0], [4900.0, 2.0], [5900.0, 2.0], [400.0, 128.0], [500.0, 264.0]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 302.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1658.0, "series": [{"data": [[0.0, 1658.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1040.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 302.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 69.6180000000001, "minX": 1.68192474E12, "maxY": 84.89000000000004, "series": [{"data": [[1.68192474E12, 69.6180000000001], [1.68230436E12, 84.89000000000004]], "isOverall": false, "label": "PhotoGallery Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68230436E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 61.0, "minX": 1.0, "maxY": 1290.15, "series": [{"data": [[2.0, 217.66666666666666], [3.0, 89.0], [4.0, 125.53846153846155], [5.0, 246.71428571428572], [6.0, 61.0], [7.0, 538.3333333333333], [8.0, 64.0], [9.0, 150.57142857142856], [10.0, 355.625], [11.0, 773.7777777777778], [12.0, 424.0], [13.0, 596.25], [14.0, 311.44444444444446], [15.0, 424.0], [16.0, 715.0], [17.0, 85.33333333333333], [18.0, 108.55555555555556], [19.0, 110.0], [20.0, 560.8], [21.0, 275.6666666666667], [22.0, 171.16666666666669], [23.0, 245.83333333333334], [24.0, 600.25], [25.0, 379.25], [26.0, 86.25], [27.0, 1155.1818181818182], [28.0, 669.6], [29.0, 664.4], [30.0, 491.90909090909093], [31.0, 1161.2222222222222], [32.0, 407.57142857142856], [33.0, 313.5454545454545], [34.0, 364.70588235294116], [35.0, 224.0], [36.0, 1290.15], [37.0, 953.8125], [38.0, 404.87500000000006], [39.0, 426.31249999999994], [40.0, 421.66666666666674], [41.0, 194.22222222222223], [42.0, 398.75], [43.0, 111.4], [44.0, 167.33333333333334], [45.0, 640.2105263157895], [46.0, 159.74999999999997], [47.0, 583.7499999999999], [48.0, 339.5555555555556], [49.0, 271.85714285714283], [50.0, 130.99999999999997], [51.0, 166.23809523809524], [52.0, 115.66666666666666], [53.0, 112.89999999999999], [54.0, 116.375], [55.0, 230.71428571428572], [56.0, 445.90909090909093], [57.0, 747.7142857142858], [58.0, 418.59999999999997], [59.0, 421.7307692307692], [60.0, 488.3636363636364], [61.0, 268.8], [62.0, 295.6363636363636], [63.0, 139.0], [64.0, 138.0], [65.0, 140.33333333333334], [66.0, 385.09302325581393], [67.0, 192.96], [68.0, 693.9999999999999], [69.0, 637.2608695652175], [70.0, 499.47058823529414], [71.0, 355.95000000000005], [72.0, 309.49999999999994], [73.0, 751.6808510638301], [74.0, 763.9473684210526], [75.0, 387.72727272727275], [76.0, 211.0], [77.0, 484.44444444444446], [78.0, 291.5806451612903], [79.0, 380.22727272727275], [80.0, 518.4905660377359], [81.0, 211.68421052631578], [82.0, 634.3333333333334], [83.0, 359.0], [84.0, 364.33333333333337], [85.0, 366.0], [87.0, 530.5945945945946], [86.0, 266.64285714285717], [88.0, 688.3333333333331], [89.0, 244.03571428571428], [90.0, 656.4821428571428], [91.0, 271.48148148148147], [92.0, 263.0], [93.0, 926.9264705882352], [94.0, 403.17142857142863], [95.0, 417.4761904761905], [96.0, 653.72], [97.0, 293.01886792452837], [98.0, 728.2739726027398], [99.0, 856.7499999999998], [100.0, 871.4300429184557], [1.0, 1220.4285714285713]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}, {"data": [[79.79866666666673, 643.8079999999999]], "isOverall": false, "label": "HTTP Request - Home-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1900.0, "minX": 1.68192474E12, "maxY": 1275000.0, "series": [{"data": [[1.68192474E12, 94483.33333333333], [1.68230436E12, 1275000.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68192474E12, 1900.0], [1.68230436E12, 3800.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68230436E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 188.51200000000003, "minX": 1.68192474E12, "maxY": 871.4560000000008, "series": [{"data": [[1.68192474E12, 188.51200000000003], [1.68230436E12, 871.4560000000008]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68230436E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 185.8319999999998, "minX": 1.68192474E12, "maxY": 379.0029999999997, "series": [{"data": [[1.68192474E12, 185.8319999999998], [1.68230436E12, 379.0029999999997]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68230436E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 33.26299999999998, "minX": 1.68192474E12, "maxY": 229.31499999999997, "series": [{"data": [[1.68192474E12, 33.26299999999998], [1.68230436E12, 229.31499999999997]], "isOverall": false, "label": "HTTP Request - Home", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68230436E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 61.0, "minX": 1.68192474E12, "maxY": 5995.0, "series": [{"data": [[1.68192474E12, 314.0], [1.68230436E12, 5995.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68192474E12, 61.0], [1.68230436E12, 95.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68192474E12, 263.0], [1.68230436E12, 1686.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68192474E12, 291.0], [1.68230436E12, 3384.790000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68192474E12, 204.0], [1.68230436E12, 656.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68192474E12, 272.0], [1.68230436E12, 2153.099999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68230436E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 70.0, "minX": 2.0, "maxY": 1319.0, "series": [{"data": [[2.0, 107.0], [190.0, 714.0], [184.0, 498.0], [199.0, 140.0], [12.0, 99.0], [204.0, 804.5], [212.0, 798.5], [210.0, 607.0], [240.0, 587.0], [242.0, 708.0], [254.0, 605.0], [62.0, 1319.0], [70.0, 70.0], [86.0, 899.0], [363.0, 241.0], [368.0, 181.5], [102.0, 291.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 368.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 65.0, "minX": 2.0, "maxY": 402.0, "series": [{"data": [[2.0, 74.0], [190.0, 224.0], [184.0, 175.0], [199.0, 138.0], [12.0, 65.0], [204.0, 320.0], [212.0, 198.0], [210.0, 191.0], [240.0, 199.5], [242.0, 236.0], [254.0, 236.0], [62.0, 205.0], [70.0, 68.5], [86.0, 402.0], [363.0, 238.0], [368.0, 178.0], [102.0, 229.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 368.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68192474E12, "maxY": 33.333333333333336, "series": [{"data": [[1.68192474E12, 16.666666666666668], [1.68230436E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68230436E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68192474E12, "maxY": 33.333333333333336, "series": [{"data": [[1.68192474E12, 16.666666666666668], [1.68230436E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68230436E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68192474E12, "maxY": 33.333333333333336, "series": [{"data": [[1.68192474E12, 16.666666666666668], [1.68230436E12, 33.333333333333336]], "isOverall": false, "label": "HTTP Request - Home-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68230436E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68192474E12, "maxY": 33.333333333333336, "series": [{"data": [[1.68192474E12, 16.666666666666668], [1.68230436E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68230436E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

