(function(window){var svgSprite='<svg><symbol id="icon-tuangou-copy" viewBox="0 0 1024 1024"><path d="M824.994 151.726c13.208 0 25.626 5.143 34.966 14.483 9.339 9.339 14.483 21.756 14.482 34.964l0 624.11c0 27.266-22.183 49.448-49.449 49.448L200.884 874.731c-27.266 0-49.448-22.182-49.448-49.448L151.436 201.172c0-27.265 22.182-49.446 49.448-49.446L824.994 151.726M824.994 89.726l-624.11 0c-61.552 0-111.448 49.896-111.448 111.446l0 624.111c0 61.552 49.896 111.448 111.448 111.448l624.109 0c61.552 0 111.449-49.896 111.449-111.448l0-624.11C936.443 139.622 886.545 89.726 824.994 89.726L824.994 89.726zM512.938 550.097c-68.507 0-132.914-26.678-181.356-75.12-48.441-48.442-75.12-112.849-75.12-181.355 0-17.121 13.879-31 31-31s31 13.879 31 31c0 107.234 87.241 194.476 194.476 194.476s194.477-87.241 194.477-194.476c0-17.121 13.879-31 31-31s31 13.879 31 31c0 68.508-26.678 132.915-75.12 181.356C645.853 523.419 581.445 550.097 512.938 550.097z"  ></path></symbol><symbol id="icon-yijiuhuanxin" viewBox="0 0 1041 1024"><path d="M531.072 1006.016c-250.048 0-453.376-203.456-453.376-453.44H13.376l96.192-128.448 85.184 128.448h-56.64a393.472 393.472 0 0 0 392.96 392.96c174.336 0 321.664-100.352 372.288-267.072 0 0 22.656-39.168 44.608-22.464 22.336 17.024 17.088 41.984 17.088 41.984-58.432 192.32-232.896 308.032-433.984 308.032z"  ></path><path d="M640.448 234.688H376l-48.192 80.448v433.472l75.584 67.072h210.432l76.8-67.072V305.408l-50.176-70.72z m-93.76 513.92H478.976v-19.968h67.712v19.968z m67.136-95.488H403.392V420.928h210.432v232.192z m0-327.744H403.392v-19.968h210.432v19.968z"  ></path><path d="M523.584 57.344a453.952 453.952 0 0 1 453.44 453.44h64.256l-96.256 128.512-85.12-128.512h56.768a393.472 393.472 0 0 0-393.088-392.96c-174.336 0-320.96 98.24-371.648 264.896 0 0-11.968 27.328-41.92 15.36s-13.632-39.936-13.632-39.936c58.496-192.256 226.048-300.8 427.2-300.8z"  ></path></symbol><symbol id="icon-huafeichongzhi" viewBox="0 0 1024 1024"><path d="M898.624 943.552H86.144L0 822.336v-592l100.288-109.888h814.656L1024 229.504v596.48l-125.376 117.568zM62.976 429.568v372.672l55.68 78.336h755.008l87.296-81.856V436.032m5.696-96.192l-5.632-84.224-72.128-72.128H128.128L62.976 254.784v86.272"  ></path><path d="M124.032 532.032h364.032v64H124.032zM644.032 660.032h60.032v64h-60.032zM124.032 660.032h364.032v64H124.032zM764.032 660.032h64v64h-64z"  ></path></symbol><symbol id="icon-shoujiqia" viewBox="0 0 1024 1024"><path d="M 293.075 973.715 l 457.025 1.7053e-013 c 39.682 1.06581e-014 71.599 -33.542 71.599 -75.028 l 1.7053e-013 -672.189 c 1.33227e-015 -4.147 -149.332 -153.127 -149.332 -153.127 l -379.294 -1.42109e-013 c -39.682 -1.06581e-014 -71.599 33.542 -71.599 75.028 l -2.27374e-013 750.286 c -1.06581e-014 41.483 32.101 75.028 71.599 75.028 Z M 510.587 873.796 l -114.709 -3.55271e-014 l 4.26326e-014 -141.401 l 114.709 3.55271e-014 l -4.26326e-014 141.401 Z M 635.571 873.796 l -104.251 -3.55271e-014 l 4.26326e-014 -141.401 l 104.251 3.55271e-014 l -4.26326e-014 141.401 Z M 771.021 822.393 c -8.88178e-015 28.314 -18.757 51.404 -41.663 51.404 l -72.868 -1.42109e-014 l 4.26326e-014 -141.401 l 114.709 3.55271e-014 l -2.13163e-014 90 Z M 656.494 423.623 l 72.868 1.42109e-014 c 23.087 1.06581e-014 41.663 22.907 41.663 51.404 l -2.13163e-014 90 l -114.709 -3.55271e-014 l 4.26326e-014 -141.401 Z M 531.328 423.623 l 104.251 3.55271e-014 l -4.26326e-014 141.401 l -104.251 -3.55271e-014 l 4.26326e-014 -141.401 Z M 395.875 423.623 l 114.709 3.55271e-014 l -4.26326e-014 141.401 l -114.709 -3.55271e-014 l 4.26326e-014 -141.401 Z M 270.709 475.026 c 8.88178e-015 -28.314 18.575 -51.404 41.663 -51.404 l 62.586 1.77636e-014 l -4.26326e-014 167.018 l 396.063 1.42109e-013 l -4.26326e-014 115.787 l -500.313 -1.42109e-013 l 8.52651e-014 -231.402 Z M 270.709 822.393 l 2.13163e-014 -90 l 104.251 3.55271e-014 l -4.26326e-014 141.401 l -62.586 -1.77636e-014 c -22.907 -3.55271e-015 -41.663 -23.087 -41.663 -51.404 Z" fill="#707070" ></path></symbol><symbol id="icon-tubiao-" viewBox="0 0 1024 1024"><path d="M730.763636 733.090909H290.909091V179.2h439.854545v553.890909zM512 898.327273c-30.254545 0-55.854545-25.6-55.854545-55.854546 0-30.254545 25.6-55.854545 55.854545-55.854545s55.854545 25.6 55.854545 55.854545c-2.327273 32.581818-25.6 55.854545-55.854545 55.854546zM702.836364 69.818182H318.836364c-46.545455 0-81.454545 37.236364-81.454546 83.781818v719.127273c0 46.545455 37.236364 83.781818 81.454546 83.781818h384c46.545455 0 81.454545-37.236364 81.454545-83.781818V153.6c2.327273-46.545455-34.909091-83.781818-81.454545-83.781818z"  ></path></symbol><symbol id="icon-Fma" viewBox="0 0 1024 1024"><path d="M507.0315905 90.76355565c-231.64242622 0-419.3973503 187.75492176-419.39735029 419.31375279 0 231.64242622 187.75492176 419.48094545 419.39735029 419.48094546s419.3973503-187.83851695 419.39735028-419.48094546c0-231.55883101-187.75492176-419.31375508-419.39735028-419.31375279z m0 762.72302448c-189.67761333 0-343.40927168-153.73165837-343.40927173-343.40927169 0-189.59401812 153.73165837-343.32567653 343.40927173-343.32567418 189.67761333 0 343.40927168 153.73165837 343.40927167 343.32567418 0 189.67761333-153.73165837 343.40927168-343.40927167 343.40927169z"  ></path><path d="M725.6336797 505.7510888v64.01092386H403.97165625v205.82412739h-64.01092391v-464.34075427h64.01092391v0.76090196h314.34784689v64.01092388h-314.34784689v129.73387718z"  ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M347.136 783.36q19.456 0 36.864 7.168t30.72 19.968 20.48 30.208 7.168 36.864-7.168 36.864-20.48 30.208-30.72 20.48-36.864 7.68q-20.48 0-37.376-7.68t-30.208-20.48-20.48-30.208-7.168-36.864 7.168-36.864 20.48-30.208 30.208-19.968 37.376-7.168zM773.12 785.408q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM945.152 203.776q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-12.8 37.888-22.016 62.976-24.064 68.096-17.92 53.248q-13.312 40.96-33.792 56.832t-50.176 15.872l-34.816 0-66.56 0-87.04 0-95.232 0-253.952 0 15.36 92.16 516.096 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-95.232 0-117.76 0-119.808 0-98.304 0-56.32 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l22.528 0 20.48 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0z" fill="#ff6700" ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M938.465292 850.00724l-153.938924-146.556327c54.376257-65.578145 87.075735-148.256065 87.075736-238.352419 0-212.805152-181.191049-385.323441-404.711717-385.323441-223.561626 0-404.778273 172.518289-404.778274 385.323441 0 212.800032 181.216647 385.323441 404.778274 385.323441 71.112533 0 137.852849-17.586145 195.925524-48.232626 0.583645 0.583645 0.99322 1.228726 1.587105 1.761174l161.265204 153.529348c31.112373 29.648141 81.628382 29.648141 112.802192 0 31.219887-29.709577 31.219887-77.819331-0.00512-107.472591z m-471.585145-114.614564c-156.841789 0-283.943283-120.952743-283.943283-270.283943 0-149.285123 127.101494-270.319781 283.943283-270.31978s283.9996 121.039778 283.9996 270.31978c0.00512 149.3312-127.157811 270.283943-283.9996 270.283943z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)