/* ************************************************************************

   Copyright:
     2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("bamboo.demo.theme.Font",
{
  extend: bamboo.theme.Font,

  fonts:
  {
    "title":
    {
      size: 36,
      family: ["serif"],
      sources: 
      [
        {
          family: "JosefinSlab",
          source: ["bamboo/demo/fonts/JosefinSlab-Regular.ttf"]
        }
      ]
    },
    
    "qooxdoo":
    {
      size: 19,
      family: ["serif"],
      sources: 
      [
        {
          family: "JosefinSlabBold",
          source: ["bamboo/demo/fonts/JosefinSlab-Bold.ttf"]
        }
      ]
    }
  }
});
