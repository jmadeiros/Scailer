1:HL["/_next/static/css/6157f0d9ae5fd892.css",{"as":"style"}]
2:HL["/_next/static/css/0dcbb2e2341acf5b.css",{"as":"style"}]
0:["4tMtJd-6FtbR1jSDzlLqx",[[["",{"children":["newsletter",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],"$L3",[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/6157f0d9ae5fd892.css","precedence":"next"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/0dcbb2e2341acf5b.css","precedence":"next"}]],"$L4"]]]]
5:I{"id":3015,"chunks":["424:static/chunks/424-2046043a0ce6d658.js","185:static/chunks/app/layout-ca1d050e092682b8.js"],"name":"","async":false}
7:I{"id":1424,"chunks":["424:static/chunks/424-2046043a0ce6d658.js","185:static/chunks/app/layout-ca1d050e092682b8.js"],"name":"Toaster","async":false}
8:I{"id":7767,"chunks":["272:static/chunks/webpack-1f2bda0a26ecba2e.js","971:static/chunks/fd9d1056-ef4f33b6252956fd.js","596:static/chunks/596-2c1e71b668623423.js"],"name":"default","async":false}
9:I{"id":7920,"chunks":["272:static/chunks/webpack-1f2bda0a26ecba2e.js","971:static/chunks/fd9d1056-ef4f33b6252956fd.js","596:static/chunks/596-2c1e71b668623423.js"],"name":"default","async":false}
a:I{"id":3335,"chunks":["160:static/chunks/app/not-found-556d996a816d2eb7.js"],"name":"","async":false}
c:I{"id":4839,"chunks":["272:static/chunks/webpack-1f2bda0a26ecba2e.js","971:static/chunks/fd9d1056-ef4f33b6252956fd.js","596:static/chunks/596-2c1e71b668623423.js"],"name":"default","async":false}
d:I{"id":32,"chunks":["107:static/chunks/107-460e17645a7df82f.js","424:static/chunks/424-2046043a0ce6d658.js","120:static/chunks/120-fd2a9cc94893d2be.js","585:static/chunks/585-6b7dec6eb53c5340.js","962:static/chunks/app/newsletter/page-db5fb0ea6d1779d0.js"],"name":"","async":false}
6:T98c,
            (function() {
              function adjustLanyardForMac() {
                try {
                  // Detect macOS
                  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0 || 
                               (navigator.userAgent.indexOf('Mac') > -1);
                  
                  if (isMac) {
                    // Add a special CSS class to the document for Mac-specific styling
                    document.documentElement.classList.add('mac-device');
                    
                    // Find and adjust lanyard elements
                    setTimeout(() => {
                      // Add custom CSS for lanyards
                      const style = document.createElement('style');
                      style.textContent = `
                        /* Mac-only lanyard styles */
                        .mac-device .lanyard-container canvas {
                          transform: scale(0.85);
                          transform-origin: center center;
                        }
                      `;
                      document.head.appendChild(style);
                      
                      // Apply the lanyard-container class to the lanyards
                      document.querySelectorAll('[id="operations-service"] canvas').forEach(el => {
                        const parentDiv = el.closest('div');
                        if (parentDiv) {
                          parentDiv.classList.add('lanyard-container');
                        }
                      });
                      
                      console.log("Mac detected, lanyards adjusted to 85% size");
                    }, 1000); // Give time for components to render
                  }
                } catch (e) {
                  console.error("Error in Mac lanyard adjustment script:", e);
                }
              }

              // Apply when DOM is ready
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                adjustLanyardForMac();
              } else {
                document.addEventListener('DOMContentLoaded', adjustLanyardForMac);
              }
              
              // Also try after window load to ensure Three.js canvas elements are rendered
              window.addEventListener('load', () => {
                setTimeout(adjustLanyardForMac, 2000);
              });
            })();
          3:[null,["$","html",null,{"lang":"en","className":"antialiased __variable_d04102","children":[["$","head",null,{"children":[["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1.0"}],["$","$L5",null,{"id":"mac-lanyard-adjustment","children":"$6"}]]}],["$","body",null,{"className":"__className_d04102 min-h-screen bg-[#2a2a2a] text-white flex flex-col antialiased selection:bg-scailer-green selection:text-white","children":[["$","$L7",null,{"position":"top-right","toastOptions":{"style":{"background":"#3a3a3a","color":"#ffffff","border":"1px solid rgba(37, 211, 102, 0.1)"},"className":"toast-custom"}}],["$","$L8",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","notFound":["$","$La",null,{}],"notFoundStyles":[],"childProp":{"current":["$","$L8",null,{"parallelRouterKey":"children","segmentPath":["children","newsletter","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$L9",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$Lb",["$","$Lc",null,{"propsForComponent":{"params":{}},"Component":"$d"}],null],"segment":"__PAGE__"},"styles":[]}],"segment":"newsletter"},"styles":[]}]]}]]}],null]
4:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"Your New Tech Partner 🚀"}],["$","meta","2",{"name":"description","content":"Automate and scale your business operations with AI-powered solutions."}],["$","meta","3",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","link","4",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}]]
b:null
