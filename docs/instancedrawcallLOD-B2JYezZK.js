const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["index-BRJD7s1r.js","KelvinUtil-B7f8IR3-.js","Sample_InstancedrawCallLOD-lb4mA0uh.js"])))=>i.map(i=>d[i]);
true&&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

const INDIRECT_TOGGLE_KEY = 'orillusion.sample.useIndirect';
        const GPU_CULLING_TOGGLE_KEY = 'orillusion.sample.useGPUCulling';
        const LOD_TOGGLE_KEY = 'orillusion.sample.useGPULOD';

        const getIndirectMode = () => sessionStorage.getItem(INDIRECT_TOGGLE_KEY) === '1';
        const setIndirectMode = (enable) => {
            sessionStorage.setItem(INDIRECT_TOGGLE_KEY, enable ? '1' : '0');
        };

        const getGPUCullingMode = () => {
            const merged = sessionStorage.getItem(GPU_CULLING_TOGGLE_KEY);
            if (merged != null) {
                return merged === '1';
            }
            const legacyFrustum = sessionStorage.getItem('orillusion.sample.useGPUFrustumCulling') === '1';
            const legacyOcclusion = sessionStorage.getItem('orillusion.sample.useGPUOcclusionCulling') === '1';
            return legacyFrustum || legacyOcclusion;
        };
        const setGPUCullingMode = (enable) => {
            const value = enable ? '1' : '0';
            sessionStorage.setItem(GPU_CULLING_TOGGLE_KEY, value);
            sessionStorage.setItem('orillusion.sample.useGPUFrustumCulling', value);
            sessionStorage.setItem('orillusion.sample.useGPUOcclusionCulling', value);
        };

        const getGpuLodMode = () => sessionStorage.getItem(LOD_TOGGLE_KEY) !== '0';
        const setGpuLodMode = (enable) => {
            sessionStorage.setItem(LOD_TOGGLE_KEY, enable ? '1' : '0');
        };

        const logRenderSetting = (coreModule, context) => {
            console.debug(`[render-mode][${context}] Engine3D.setting.render`, {
                useGPUDrawIndirect: coreModule.Engine3D.setting.render.useGPUDrawIndirect,
                useGPUFrustumCulling: coreModule.Engine3D.setting.render.useGPUFrustumCulling,
                useGPUOcclusionCulling: coreModule.Engine3D.setting.render.useGPUOcclusionCulling,
                useGPULOD: coreModule.Engine3D.setting.render.useGPULOD,
            });
        };

        const applyRenderModeToCore = (coreModule) => {
            coreModule.Engine3D.setting.render.useGPUDrawIndirect = getIndirectMode();
            coreModule.Engine3D.setting.render.useGPUFrustumCulling = getGPUCullingMode();
            coreModule.Engine3D.setting.render.useGPUOcclusionCulling = getGPUCullingMode();
            coreModule.Engine3D.setting.render.useGPULOD = getGpuLodMode();
        };

        const applyRenderMode = async () => {
            const coreModule = await __vitePreload(() => import('./index-BRJD7s1r.js'),true?__vite__mapDeps([0,1]):void 0);
            const prevEngine3D = globalThis.__orillusionEngine3DRef;
            console.debug('[render-mode] Engine3D identity check', {
                sameReference: prevEngine3D === coreModule.Engine3D,
                previousExists: !!prevEngine3D,
            });
            globalThis.__orillusionEngine3DRef = coreModule.Engine3D;
            applyRenderModeToCore(coreModule);
            logRenderSetting(coreModule, 'applyRenderMode');
            return coreModule;
        };

        setIndirectMode(getIndirectMode());
        setGPUCullingMode(getGPUCullingMode());
        setGpuLodMode(getGpuLodMode());

        const modeToggle = document.createElement('button');
        modeToggle.className = 'indirect-toggle';
        modeToggle.style.bottom = '12px';
        document.body.appendChild(modeToggle);

        const gpuCullingToggle = document.createElement('button');
        gpuCullingToggle.className = 'indirect-toggle';
        gpuCullingToggle.style.bottom = '50px';
        document.body.appendChild(gpuCullingToggle);

        const lodToggle = document.createElement('button');
        lodToggle.className = 'indirect-toggle';
        lodToggle.style.bottom = '88px';
        document.body.appendChild(lodToggle);

        const refreshModeLabel = () => {
            modeToggle.textContent = `Render: ${getIndirectMode() ? 'Indirect(GPU)' : 'Direct(CPU)'} [I]`;
            gpuCullingToggle.textContent = `GPU Culling: ${getGPUCullingMode() ? 'On' : 'Off'} [C]`;
            lodToggle.textContent = `GPU LOD: ${getGpuLodMode() ? 'On' : 'Off'} [L]`;
        };

        const toggleIndirectMode = () => {
            setIndirectMode(!getIndirectMode());
            applyRenderMode().then((coreModule) => {
                logRenderSetting(coreModule, 'toggleIndirectMode');
            });
            refreshModeLabel();
        };

        const toggleGPUCullingMode = () => {
            setGPUCullingMode(!getGPUCullingMode());
            applyRenderMode().then((coreModule) => {
                logRenderSetting(coreModule, 'toggleGPUCullingMode');
            });
            refreshModeLabel();
        };

        const toggleGpuLodMode = () => {
            setGpuLodMode(!getGpuLodMode());
            applyRenderMode().then((coreModule) => {
                logRenderSetting(coreModule, 'toggleGpuLodMode');
            });
            refreshModeLabel();
        };

        modeToggle.addEventListener('click', toggleIndirectMode);
        gpuCullingToggle.addEventListener('click', toggleGPUCullingMode);
        lodToggle.addEventListener('click', toggleGpuLodMode);

        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyI') {
                toggleIndirectMode();
            } else if (e.code === 'KeyC' || e.code === 'KeyF' || e.code === 'KeyO') {
                toggleGPUCullingMode();
            } else if (e.code === 'KeyL') {
                toggleGpuLodMode();
            }
        });

        refreshModeLabel();

        (async () => {
            const core = await applyRenderMode();
            await __vitePreload(() => import('./Sample_InstancedrawCallLOD-lb4mA0uh.js'),true?__vite__mapDeps([2,1]):void 0);
            applyRenderModeToCore(core);
        })();

export { __vitePreload as _ };
