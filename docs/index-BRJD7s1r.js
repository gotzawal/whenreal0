import { C as ColorUtil, V as Vector3, M as Matrix4, R as Ray, B as BoundingBox, a as ComponentBase, E as Engine3D, b as ComponentCollect, A as AnimationCurve, r as repeat, c as clamp, d as CEvent, T as Time, Q as Quaternion, S as SkinnedMeshRenderer2, e as MeshRenderer, f as RendererMaskUtil, g as RendererMask, h as Camera3D, P as PointerEvent3D, K as KeyEvent, l as lerp, i as Vector3Ex, j as Color, G as GUISpace, k as fonts, m as GUIQuad, U as UIComponentBase, n as UIInteractiveStyle, o as UIImage, I as ImageType, p as UIRenderAble, q as Vector2, O as Object3D, s as Material, t as ShaderLib, u as RenderShaderPass, v as PassType, w as Shader, x as Vector4, y as GlobalBindGroup, z as SphereGeometry, D as EntityCollect, F as VertexAttributeName, H as BoundingSphere, J as GeometryBase, L as KDTreeUUID, N as VirtualTexture, W as GPUTextureFormat, X as ComputeShader, Y as GPUContext, Z as MemoryDO, _ as webGPUContext, $ as GPUBufferBase, a0 as GPUBufferType, a1 as Preprocessor, a2 as CEventDispatcher, a3 as GIRenderCompleteEvent, a4 as GIRenderStartEvent, a5 as ComputeGPUBuffer, a6 as RTResourceMap, a7 as RTResourceConfig, a8 as PostBase, a9 as UniformGPUBuffer, aa as RTDescriptor, ab as RTFrame, ac as WebGPUDescriptorCreator, ad as GBufferFrame, ae as StorageGPUBuffer, af as SkyRenderer, ag as GodRay_cs, ah as outlinePostData, ai as mergeFunctions, aj as dot, ak as Orientation3D, al as UnLitShader, am as UnLitTexArrayShader, an as MathUtil, ao as FrameCache, ap as PlaneClassification, aq as Navi3DMaskType, ar as Navi3DPoint, as as Navi3DFunnel, at as Navi3DEdge, au as UUID, av as Texture, aw as toHalfFloat, ax as TextureMipmapGenerator, ay as LDRTextureCube, az as BlendMode, aA as PlaneGeometry, aB as LitMaterial, aC as PointLight, aD as Struct, aE as GPUCompareFunction, aF as TorusGeometry } from './KelvinUtil-B7f8IR3-.js';
export { aG as APatch, aH as AccelerateDecelerateInterpolator, aI as AccelerateInterpolator, aJ as AnimationCurveT, aK as AnimatorComponent, aL as AnticipateInterpolator, aM as AnticipateOvershootInterpolator, aN as ArrayHas, aO as ArrayItemIndex, aP as AtlasParser, aQ as AtmosphericComponent, aR as AtmosphericScatteringSky, aS as AtmosphericScatteringSkySetting, aT as AtmosphericScatteringSky_shader, aU as B3DMLoader, aV as B3DMLoaderBase, aW as B3DMParseUtil, aX as B3DMParser, aY as BRDFLUT, aZ as BRDFLUTGenerate, a_ as BRDF_frag, a$ as BatchTable, b0 as BillboardComponent, b1 as BillboardType, b2 as BitUtil, b3 as BitmapTexture2D, b4 as BitmapTexture2DArray, b5 as BitmapTextureCube, b6 as Blend, b7 as BlendFactor, b8 as BlendShapeData, b9 as BlendShapePropertyData, ba as BlurEffectCreatorBlur_cs, bb as BlurEffectCreatorSample_cs, bc as BlurTexture2DBufferCreator, bd as BounceInterpolator, be as BoundUtil, bf as BoundsMode, bg as BrdfLut_frag, bh as BsDF_frag, bi as BxDF_frag, bj as BxdfDebug_frag, bk as BytesArray, bl as CEventListener, bm as CResizeEvent, bn as CSM, bo as CameraType, bp as CameraUtil, bq as CastPointShadowMaterialPass, br as CastShadowMaterialPass, bs as Clearcoat_frag, bt as ClusterBoundsSource_cs, bu as ClusterConfig, bv as ClusterDebug_frag, bw as ClusterLight, bx as ClusterLightingBuffer, by as ClusterLightingRender, bz as ClusterLighting_cs, bA as CollectInfo, bB as ColorPassRenderer, bC as ComData, bD as Common_frag, bE as Common_vert, bF as Context3D, bG as CubeCamera, bH as CubeMapFaceEnum, bI as CubeSky_Shader, bJ as CycleInterpolator, bK as DDGIIrradianceComputePass, bL as DDGIIrradianceVolume, bM as DDGIIrradiance_shader, bN as DDGILightingPass, bO as DDGILighting_shader, bP as DDGIMultiBouncePass, bQ as DDGIProbeRenderer, bR as DEGREES_TO_RADIANS, bS as DecelerateInterpolator, bT as Depth2DTextureArray, bU as DepthCubeArrayTexture, bV as DepthMaterialPass, bW as DirectLight, bX as EditorInspector, bY as Entity, bZ as EntityBatchCollect, b_ as EnvMap_frag, b$ as ErpImage2CubeMap, c0 as ErpImage2CubeMapCreateCube_cs, c1 as ErpImage2CubeMapRgbe2rgba_cs, c2 as FXAAPost, c3 as FXAAShader, c4 as FastMathShader, c5 as FeatureTable, c6 as FileLoader, c7 as FontChar, c8 as FontInfo, c9 as FontPage, ca as FontParser, cb as ForwardRenderJob, cc as FragmentOutput, cd as FragmentVarying, ce as Frustum, cf as FrustumCSM, cg as FullQuad_vert_wgsl, ch as GBufferPass, ci as GBufferStand, cj as GBuffer_pass, ck as GILighting, cl as GLBChunk, cm as GLBHeader, cn as GLBParser, co as GLSLLexer, cp as GLSLLexerToken, cq as GLSLPreprocessor, cr as GLSLSyntax, cs as GLTFBinaryExtension, ct as GLTFParser, cu as GLTFSubParser, cv as GLTFSubParserCamera, cw as GLTFSubParserConverter, cx as GLTFSubParserMaterial, cy as GLTFSubParserMesh, cz as GLTFSubParserSkeleton, cA as GLTFSubParserSkin, cB as GLTFType, cC as GLTF_Accessors, cD as GLTF_Info, cE as GLTF_Light, cF as GLTF_Mesh, cG as GLTF_Node, cH as GLTF_Primitives, cI as GLTF_Scene, cJ as GPUAddressMode, cK as GPUBlendFactor, cL as GPUCullMode, cM as GPUFilterMode, cN as GPUPrimitiveTopology, cO as GPUVertexFormat, cP as GPUVertexStepMode, cQ as GUIAtlasTexture, cR as GUICanvas, cS as GUIConfig, cT as GUIGeometry, cU as GUIGeometryRebuild, cV as GUIMaterial, cW as GUIPassRenderer, cX as GUIPick, cY as GUIQuadAttrEnum, cZ as GUIRenderer, c_ as GUIShader, c$ as GUISprite, d0 as GUITexture, d1 as GenerayRandomDir, d2 as GeoJsonParser, d3 as GeoType, d4 as GeometryIndicesBuffer, d5 as GeometryVertexBuffer, d6 as GeometryVertexType, d7 as GetComponentClass, d8 as GetCountInstanceID, d9 as GetRepeat, da as GetShader, db as GlobalBindGroupLayout, dc as GlobalUniform, dd as GlobalUniformGroup, de as HDRTexture, df as HDRTextureCube, dg as Hair_frag, dh as Hair_shader_op, di as Hair_shader_tr, dj as HaltonSeq, dk as HoverCameraController, dl as I3DMLoader, dm as I3DMLoaderBase, dn as I3DMParser, dp as IBLEnvMapCreator, dq as IBLEnvMapCreator_cs, dr as IESProfiles, ds as IESProfiles_frag, dt as IndicesGPUBuffer, du as Inline_vert, dv as InputSystem, dw as InstanceDrawComponent, dx as InstanceUniform, dy as InstancedMesh, dz as Interpolator, dA as InterpolatorEnum, dB as IrradianceVolumeData_frag, dC as Irradiance_frag, dD as IsEditorInspector, dE as IsNonSerialize, dF as JumperInterpolator, dG as KDTreeNode, dH as KDTreeRange, dI as KDTreeSpace, dJ as KHR_draco_mesh_compression, dK as KHR_materials_clearcoat, dL as KHR_materials_emissive_strength, dM as KHR_materials_unlit, dN as KV, dO as KelvinUtil, dP as Keyframe, dQ as KeyframeT, dR as LambertMaterial, dS as Lambert_shader, dT as Light, dU as LightBase, dV as LightData, dW as LightEntries, dX as LightType, dY as LightingFunction_frag, dZ as LinearInterpolator, d_ as LitHairShader, d$ as LitSSSShader, e0 as LitShader, e1 as Lit_shader, e2 as LoaderBase, e3 as MAX_VALUE, e4 as MIN_VALUE, e5 as MaterialDataUniformGPUBuffer, e6 as MaterialUtilities, e7 as MathShader, e8 as Matrix3, e9 as MatrixBindGroup, ea as MatrixGPUBuffer, eb as MatrixShader, ec as MemoryInfo, ed as MeshFilter, ee as MorphTargetData, ef as MorphTarget_shader, eg as MultiBouncePass_cs, eh as Navi3DConst, ei as Navi3DPointFat, ej as Navi3DRouter, ek as NonSerialize, el as NormalMap_frag, em as OBJParser, en as OcclusionSystem, eo as Octree, ep as OctreeEntity, eq as OutlinePostData, er as OutlinePostSlot, es as OvershootInterpolator, et as PBRLItShader, eu as PBRLitSSSShader, ev as ParserBase, ew as ParserFormat, ex as PassGenerate, ey as PhysicMaterialUniform_frag, ez as PickCompute, eA as PickFire, eB as PickGUIEvent3D, eC as Picker_cs, eD as PingPong, eE as PipelinePool, eF as PointLightShadowRenderer, eG as PointShadowCubeCamera, eH as PoolNode, eI as PostProcessingComponent, eJ as PostRenderer, eK as PreDepthPassRenderer, eL as PreFilteredEnvironment_cs, eM as PreIntegratedLut, eN as PreIntegratedLutCompute, eO as PrefabAvatarData, eP as PrefabAvatarParser, eQ as PrefabBoneData, eR as PrefabMaterialParser, eS as PrefabMeshData, eT as PrefabMeshParser, eU as PrefabNode, eV as PrefabParser, eW as PrefabTextureData, eX as PrefabTextureParser, eY as ProbeGBufferFrame, eZ as ProfilerUtil, e_ as PropertyAnimationClip, e$ as PropertyAnimationClipState, f0 as QuadGlsl_fs, f1 as QuadGlsl_vs, f2 as QuadShader, f3 as Quad_depth2dArray_frag_wgsl, f4 as Quad_depth2d_frag_wgsl, f5 as Quad_depthCube_frag_wgsl, f6 as Quad_frag_wgsl, f7 as Quad_vert_wgsl, f8 as RADIANS_TO_DEGREES, f9 as RGBEErrorCode, fa as RGBEHeader, fb as RGBEParser, fc as Rand, fd as RandomSeed, fe as Reader, ff as Rect, fg as Reference, fh as Reflection, fi as ReflectionCG, fj as ReflectionEntries, fk as ReflectionMaterial, fl as ReflectionRenderer, fm as ReflectionShader, fn as ReflectionShader_shader, fo as RegisterComponent, fp as RegisterShader, fq as RenderContext, fr as RenderLayer, fs as RenderLayerUtil, ft as RenderNode, fu as RenderShaderCollect, fv as RenderShaderCompute, fw as RenderTexture, fx as RendererBase, fy as RendererJob, fz as RendererMap, fA as RendererPassState, fB as RepeatSE, fC as Res, fD as SHCommon_frag, fE as SN_ArrayConstant, fF as SN_BinaryOperation, fG as SN_Break, fH as SN_CodeBlock, fI as SN_Constant, fJ as SN_Continue, fK as SN_Declaration, fL as SN_Discard, fM as SN_DoWhileLoop, fN as SN_Expression, fO as SN_ForLoop, fP as SN_Function, fQ as SN_FunctionArgs, fR as SN_FunctionCall, fS as SN_IFBranch, fT as SN_Identifier, fU as SN_IndexOperation, fV as SN_Layout, fW as SN_ParenExpression, fX as SN_Precision, fY as SN_Return, fZ as SN_SelectOperation, f_ as SN_Struct, f$ as SN_TernaryOperation, g0 as SN_UnaryOperation, g1 as SN_WhileLoop, g2 as Scene3D, g3 as ShaderAttributeInfo, g4 as ShaderConverter, g5 as ShaderConverterResult, g6 as ShaderPassBase, g7 as ShaderReflection, g8 as ShaderStage, g9 as ShaderState, ga as ShaderUniformInfo, gb as ShaderUtil, gc as ShadingInput, gd as ShadowLightsCollect, ge as ShadowMapPassRenderer, gf as ShadowMapping_frag, gg as SkeletonAnimation_shader, gh as SkyGBufferPass, gi as SkyGBuffer_pass, gj as SkyMaterial, gk as SkyShader, gl as SphereReflection, gm as SpotLight, gn as StandShader, go as StatementNode, gp as StringUtil, gq as SubGeometry, gr as TextureCube, gs as TextureCubeFaceData, gt as TextureCubeStdCreator, gu as TextureCubeUtils, gv as TokenType, gw as TouchData, gx as Transform, gy as TranslatorContext, gz as UIPanel, gA as UITransform, gB as UV, gC as Uint8ArrayTexture, gD as UnLit, gE as UnLitMaterialUniform_frag, gF as UnLitTextureArray, gG as UnLit_frag, gH as UniformNode, gI as UniformType, gJ as ValueEnumType, gK as ValueParser, gL as VertexAttributeIndexShader, gM as VertexAttributeSize, gN as VertexAttributes_vert, gO as VertexFormat, gP as VertexGPUBuffer, gQ as VideoUniform_frag, gR as View3D, gS as ViewPanel, gT as ViewQuad, gU as WGSLTranslator, gV as WorldMatrixUniform, gW as WorldPanel, gX as WrapTimeMode, gY as ZPassShader_fs, gZ as ZPassShader_vs, g_ as ZSorterUtil, g$ as append, h0 as arrayToString, h1 as blendComponent, h2 as castPointShadowMap_vert, h3 as clampRepeat, h4 as cos, h5 as crossProduct, h6 as deg2Rad, h7 as directionShadowCastMap_frag, h8 as fastInvSqrt, h9 as floorfToIntPos, ha as generateRandom, hb as generateRandom3, hc as getFloatFromInt, hd as getGLTypeFromTypedArray, he as getGLTypeFromTypedArrayType, hf as getGlobalRandomSeed, hg as getTypedArray, hh as getTypedArrayTypeFromGLType, hi as lerpByte, hj as lerpColor, hk as lerpVector3, hl as magnitude, hm as makeAloneSprite, hn as makeGUISprite, ho as makeMatrix44, hp as matrixMultiply, hq as matrixRotate, hr as matrixRotateY, hs as multiplyMatrices4x4REF, ht as normalizeFast, hu as normalizeSafe, hv as normalizedToByte, hw as normalizedToWord, hx as rad2Deg, hy as random01, hz as randomBarycentricCoord, hA as randomPointBetweenEllipsoid, hB as randomPointBetweenSphere, hC as randomPointInsideCube, hD as randomPointInsideEllipsoid, hE as randomPointInsideUnitCircle, hF as randomPointInsideUnitSphere, hG as randomQuaternion, hH as randomQuaternionUniformDistribution, hI as randomSeed, hJ as randomUnitVector, hK as randomUnitVector2, hL as rangedRandomFloat, hM as rangedRandomInt, hN as readMagicBytes, hO as rotMatrix, hP as rotateVectorByQuat, hQ as roundfToIntPos, hR as scale, hS as shadowCastMap_frag, hT as shadowCastMap_vert, hU as sin, hV as sqrMagnitude, hW as sqrtImpl, hX as stencilStateFace, hY as swap, hZ as zSorterUtil } from './KelvinUtil-B7f8IR3-.js';
import './instancedrawcallLOD-B2JYezZK.js';

let BLUR_CsShader = (
  /* wgsl */
  `
#include "GlobalUniform"

struct UniformData {
  radius: f32 ,
  bias: f32,
  aoPower: f32 ,
  blurSize: f32 ,
};

// @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
@group(0) @binding(0) var<uniform> uniformData: UniformData;
@group(0) @binding(1) var colorMap : texture_2d<f32>;
// @group(0) @binding(2) var ssaoMapSampler : sampler;
@group(0) @binding(2) var ssaoMap : texture_2d<f32>;
@group(0) @binding(3) var outTex : texture_storage_2d<rgba16float, write>;

@compute @workgroup_size( 8 , 8 )
fn CsMain( @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  var fragCoord = vec2<i32>( globalInvocation_id.xy );

  var texSize = vec2<f32>(textureDimensions(ssaoMap).xy);
  var texCoord = vec2<f32>(fragCoord) / texSize ;

  let blurSize = i32(uniformData.blurSize);

  var result = vec4<f32>(0.0) ;
  var ii = 0.0 ;
  for (var i = -2; i < 2 ; i+=1) {
     for (var j = -2; j < 2 ; j+=1) {
        var offset = vec2<i32>( i , j ) ;
        result += textureLoad(ssaoMap, fragCoord + offset, 0 );
        // result += textureSampleLevel(ssaoMap,ssaoMapSampler, vec2<f32>( fragCoord + offset) / texSize , 0.0 );
        ii += 1.0 ;
     }
  }
  var fResult = result.r / ii ;
  var color = textureLoad(colorMap, fragCoord , 0 );
  textureStore(outTex, fragCoord , vec4(color.rgb * fResult,1.0) );
}
`
);

let BloomCfg = (
  /*wgsl*/
  `
struct BloomCfg{
  downSampleStep: f32,
  downSampleBlurSize: f32,
  downSampleBlurSigma: f32,
  upSampleBlurSize: f32,
  upSampleBlurSigma: f32,
  luminanceThreshole: f32,
  bloomIntensity: f32,
  slot: f32,
}
@group(0) @binding(0) var<uniform> bloomCfg: BloomCfg;
`
);
let CalcUV_01$1 = (
  /*wgsl*/
  `
  fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
  {
    let u = (f32(coord.x) + 0.5) / f32(texSize.x);
    let v = (f32(coord.y) + 0.5) / f32(texSize.y);
    return vec2<f32>(u, v);
  }

`
);
let GaussWeight2D$1 = (
  /*wgsl*/
  `
fn GaussWeight2D(x:f32, y:f32, sigma:f32) -> f32
  {
      let PI = 3.14159265358;
      let E  = 2.71828182846;
      let sigma_2 = pow(sigma, 2);
  
      let a = -(x*x + y*y) / (2.0 * sigma_2);
      return pow(E, a) / (2.0 * PI * sigma_2);
  }
`
);
let GaussBlur$1 = function(GaussNxN, inTex, inTexSampler) {
  var code = (
    /*wgsl*/
    `

  fn ${GaussNxN}(uv:vec2<f32>, n:i32, stride:vec2<f32>, sigma:f32) -> vec3<f32>
  {
      var color = vec3<f32>(0.0);
      let r:i32 = n / 2;
      var weight:f32 = 0.0;
  
      for(var i:i32=-r; i<=r; i+=1)
      {
          for(var j=-r; j<=r; j+=1)
          {
              let w = GaussWeight2D(f32(i), f32(j), sigma);
              var coord:vec2<f32> = uv + vec2<f32>(f32(i), f32(j)) * stride ;
              color += textureSampleLevel(${inTex}, ${inTexSampler}, coord, 0.0).xyz * w;
              weight += w;
          }
      }
  
      color /= weight;
      return color;
  }`
  );
  return code;
};
let threshold = (
  /*wgsl*/
  `
${ColorUtil}
${BloomCfg}

@group(0) @binding(1) var inTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba16float, write>;

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(inTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  var color = textureLoad(inTex, fragCoord, 0);
  var linerColor = gammaToLiner(color.rgb);
  var lum = dot(vec3<f32>(0.2126, 0.7152, 0.0722), linerColor.rgb) ;

  var ret = linerColor.xyz;
  var contribution = max(0, lum - bloomCfg.luminanceThreshole) ;
  // if(contribution > 0.0){
    // ret = linerColor * contribution;
  ret = ACESToneMapping(linerColor,contribution);
  // }else{
  //   ret = vec3f(0.0,0.0,0.0);
  // }
  textureStore(outTex, fragCoord, vec4<f32>(vec3f(ret), color.w));
}
`
);
let downSample = (
  /*wgsl*/
  `
${BloomCfg}

@group(0) @binding(1) var inTex : texture_2d<f32>;
@group(0) @binding(2) var inTexSampler: sampler;
@group(0) @binding(3) var outTex : texture_storage_2d<rgba16float, write>;

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;

${GaussWeight2D$1}
${GaussBlur$1("GaussNxN", "inTex", "inTexSampler")}
${CalcUV_01$1}

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(outTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);
  var uv = CalcUV_01(fragCoord, texSize);
  let stride = vec2<f32>(1.0) / vec2<f32>(f32(texSize.x), f32(texSize.y));   //  texel size of last level
  let rgb = GaussNxN(uv, i32(bloomCfg.downSampleBlurSize), stride, bloomCfg.downSampleBlurSigma);
  color = vec4<f32>(rgb, color.w);
  textureStore(outTex, fragCoord, color);
}
`
);
let upSample$1 = (
  /*wgsl*/
  `
${BloomCfg}

@group(0) @binding(1) var _MainTex : texture_2d<f32>;
@group(0) @binding(2) var _MainTexSampler: sampler;
@group(0) @binding(3) var _PrevMip : texture_2d<f32>;
@group(0) @binding(4) var _PrevMipSampler: sampler;
@group(0) @binding(5) var outTex : texture_storage_2d<rgba16float, write>;

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;

${GaussWeight2D$1}
${GaussBlur$1("GaussNxN_0", "_MainTex", "_MainTexSampler")}
${GaussBlur$1("GaussNxN_1", "_PrevMip", "_PrevMipSampler")}
${CalcUV_01$1}

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(outTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);
  var uv = CalcUV_01(fragCoord, texSize);
  
  // half stride
  let prev_stride = vec2<f32>(0.5) / vec2<f32>(f32(texSize.x), f32(texSize.y));
  let curr_stride = vec2<f32>(1.0) / vec2<f32>(f32(texSize.x), f32(texSize.y));

  let rgb1 = GaussNxN_0(uv, i32(bloomCfg.upSampleBlurSize), prev_stride, bloomCfg.upSampleBlurSigma);
  let rgb2 = GaussNxN_1(uv, i32(bloomCfg.upSampleBlurSize), curr_stride, bloomCfg.upSampleBlurSigma);
  color = vec4<f32>(rgb1+rgb2, color.w);
  textureStore(outTex, fragCoord, color);
}
`
);
let post = (
  /*wgsl*/
  `
${ColorUtil}
${BloomCfg}
${CalcUV_01$1}

@group(0) @binding(1) var _MainTex : texture_2d<f32>;
@group(0) @binding(2) var _BloomTex : texture_2d<f32>;
@group(0) @binding(3) var _BloomTexSampler :  sampler;
@group(0) @binding(4) var outTex : texture_storage_2d<rgba16float, write>;

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(outTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  var color = textureLoad(_MainTex, fragCoord, 0);
  let uv = vec2<f32>(f32(fragCoord.x), f32(fragCoord.y)) / vec2<f32>(f32(texSize.x - 1), f32(texSize.y - 1));

  // var bloom = textureLoad(_BloomTex, fragCoord, 0).xyz;
  var bloom = textureSampleLevel(_BloomTex, _BloomTexSampler, uv, 0.0).xyz * bloomCfg.bloomIntensity;
  
  // tone map
  bloom = ACESToneMapping(bloom, 1.0);
  let g = 1.0 / 2.2;
  bloom = saturate(pow(bloom, vec3<f32>(g)));
 
  color = vec4<f32>(color.xyz + bloom.xyz, color.w);
  textureStore(outTex, fragCoord, color);
}
`
);

let DepthOfView_cs = (
  /*wgsl*/
  `
#include "GlobalUniform"
#include "GBufferStand"

  struct BlurSetting{
    near: f32,
    far: f32,
    pixelOffset: f32,
  }
 
  @group(0) @binding(2) var<uniform> blurSetting: BlurSetting;
  @group(0) @binding(3) var inTexSampler : sampler;
  @group(0) @binding(4) var inTex : texture_2d<f32>;
  @group(0) @binding(5) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> cameraPosition: vec3<f32>;
  var<private> texSize: vec2<u32>;
  var<private> fragCoord: vec2<i32>;
  var<private> fragUV: vec2<f32>;
  var<private> texelSize: vec2<f32>;

  const PI = 3.1415926 ;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    
    fragCoord = vec2<i32>( globalInvocation_id.xy );
    texSize = textureDimensions(inTex).xy;
    
    if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
    }
    fragUV = vec2<f32>(fragCoord) / vec2<f32>(texSize);
    texelSize = 1.0 / vec2<f32>(texSize - 1);
    var gBuffer = getGBuffer( fragCoord ) ;
    useNormalMatrixInv();

    cameraPosition = globalUniform.CameraPos.xyz ;
    var wPosition = getWorldPositionFromGBuffer(gBuffer,fragUV); 
    var distance = length(wPosition - cameraPosition);
    var oc:vec4<f32> = textureLoad(inTex, fragCoord, 0);
    if(distance > blurSetting.near){
        var normal = getWorldNormalFromGBuffer(gBuffer); 
        var pixelScale = 0.5;
        if(gBuffer.x > 9999.0){
            distance = min(distance, blurSetting.far);
            pixelScale = (distance - blurSetting.near) / (blurSetting.far - blurSetting.near);
        }
        oc = mixBlurColor(oc, fragCoord, blurSetting.pixelOffset, pixelScale);
    }
    textureStore(outTex, fragCoord, oc);
  }

  fn mixBlurColor(orginColor:vec4<f32>, coord:vec2<i32>, pixelOffset:f32, scale:f32) -> vec4<f32> {

    let uv = vec2<f32>(coord);
    var uv0 = (uv + scale * vec2<f32>( pixelOffset,  pixelOffset)) * texelSize;
    var uv1 = (uv + scale * vec2<f32>(-pixelOffset,  pixelOffset)) * texelSize;
    var uv2 = (uv + scale * vec2<f32>(-pixelOffset, -pixelOffset)) * texelSize;
    var uv3 = (uv + scale * vec2<f32>( pixelOffset, -pixelOffset)) * texelSize;

    uv0.x = processUVEdge(uv0.x);
    uv0.y = processUVEdge(uv0.y);
    uv1.x = processUVEdge(uv1.x);
    uv1.y = processUVEdge(uv1.y);
    uv2.x = processUVEdge(uv2.x);
    uv2.y = processUVEdge(uv2.y);
    uv3.x = processUVEdge(uv3.x);
    uv3.y = processUVEdge(uv3.y);

    var ob = vec4<f32>(0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv0, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv1, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv2, 0.0);
    ob += textureSampleLevel(inTex, inTexSampler, uv3, 0.0);
    return mix(orginColor, ob * 0.25, scale);
  }

  fn processUVEdge(v: f32) -> f32{
      var value = v;
      if(value < 0.0){
        value = - value;
      }else if(value > 1.0){
        value = 2.0 - value;
      }
      return value;
  }
`
);

let GTAO_cs = (
  /*wgsl*/
  `
    #include "GlobalUniform"
    #include "GBufferStand"
    
    struct GTAO{
      maxDistance: f32,
      maxPixel: f32,
      darkFactor: f32,
      rayMarchSegment: f32,
      cameraNear: f32,
      cameraFar: f32,
      multiBounce: f32,
      blendColor: f32,
    }

    @group(0) @binding(2) var<uniform> gtaoData: GTAO;
    @group(0) @binding(3) var<storage, read_write> directions : array<vec2<f32>>;
    @group(0) @binding(4) var<storage, read_write> aoBuffer : array<f32>;
 
    @group(0) @binding(5) var inTex : texture_2d<f32>;
    @group(0) @binding(6) var outTex : texture_storage_2d<rgba16float, write>;
    
    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> fragUV: vec2<f32>;
    var<private> wPosition: vec3<f32>;
    var<private> wNormal: vec4<f32>;
    var<private> maxPixelScaled: f32;

    var<private> gBuffer: GBuffer;

    const PI = 3.1415926 ;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(inTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
        return;
      }
      
      fragUV = vec2<f32>(fragCoord) / vec2<f32>(texSize - 1);
      useNormalMatrixInv();

      gBuffer = getGBuffer( fragCoord ) ;
      wNormal = vec4f(getWorldNormalFromGBuffer(gBuffer),1.0); 
      var visible = getRoughnessFromGBuffer(gBuffer);

      var oc = textureLoad(inTex, fragCoord, 0);
      let index = fragCoord.x + fragCoord.y * i32(texSize.x);
      let lastFactor = aoBuffer[index];
      var newFactor = 0.0;
      if(visible > 0.0){//sky
          wPosition = getWorldPositionFromGBuffer(gBuffer,fragUV);
          let ndc = globalUniform.projMat * globalUniform.viewMat * vec4<f32>(wPosition, 1.0);
          let ndcZ = ndc.z / ndc.w;
          maxPixelScaled = calcPixelByNDC(ndcZ);
          newFactor = rayMarch();
      }
      
      var factor:f32 = mix(lastFactor, newFactor, 0.6);
      aoBuffer[index] = factor;
      factor = blurFactor(factor);
      factor = saturate(1.0 - factor * gtaoData.darkFactor);
      var gtao = vec3<f32>(factor);
      if(gtaoData.multiBounce > 0.5){
          gtao = MultiBounce(factor, oc.xyz);
      }
      
      var outColor = gtao;
      if(gtaoData.blendColor > 0.5){
          outColor = oc.xyz * gtao;
      }
      // textureStore(outTex, fragCoord , vec4<f32>(vec3f(newFactor), oc.w));
      textureStore(outTex, fragCoord , vec4<f32>(outColor, oc.w));
    }
    
    fn MultiBounce(AO:f32, Albedo:vec3<f32>) -> vec3<f32>
    {
        var A = 2 * Albedo - 0.33;
        var B = -4.8 * Albedo + 0.64;
        var C = 2.75 * Albedo + 0.69;
        return max(vec3<f32>(AO), ((AO * A + B) * AO + C) * AO);
    }
    
    fn calcPixelByNDC(ndcZ:f32) -> f32{
      let nearAspect = gtaoData.cameraNear / (gtaoData.cameraFar - gtaoData.cameraNear);
      let aspect = (1.0 + nearAspect) / (ndcZ + nearAspect);
      var viewPortMax = min(f32(texSize.x), f32(texSize.y));
      var maxPixel = min(viewPortMax, gtaoData.maxPixel * aspect);
      maxPixel = max(0.1, maxPixel);
      return maxPixel;
    }
    
    fn blurFactor(centerFactor:f32) -> f32{
      var coord0 = clamp(fragCoord + vec2<i32>(1, 0) , vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord1 = clamp(fragCoord + vec2<i32>(-1, 0), vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord2 = clamp(fragCoord + vec2<i32>(0, 1) , vec2<i32>(0), vec2<i32>(texSize - 1));
      var coord3 = clamp(fragCoord + vec2<i32>(0, -1), vec2<i32>(0), vec2<i32>(texSize - 1));
      var index0 = coord0.x + coord0.y * i32(texSize.x);
      var index1 = coord1.x + coord1.y * i32(texSize.x);
      var index2 = coord2.x + coord2.y * i32(texSize.x);
      var index3 = coord3.x + coord3.y * i32(texSize.x);
      let factor0:f32 = aoBuffer[index0];
      let factor1:f32 = aoBuffer[index1];
      let factor2:f32 = aoBuffer[index2];
      let factor3:f32 = aoBuffer[index3];
      var factor = 0.25 * (factor0 + factor1 + factor2 + factor3);
      factor = mix(factor, centerFactor, 0.8);
      return factor;
    }
    
    fn rayMarch() -> f32{
      let originNormal = normalize(vec3<f32>(wNormal.xyz));
      let stepPixel = maxPixelScaled / gtaoData.rayMarchSegment;
      var weight:f32 = 0.0;
      var totalWeight:f32 = 0.00001;
      for(var i:i32 = 0; i < 8; i += 1){
          let dirVec2 = directions[i];
          for(var j:f32 = 1.1; j < maxPixelScaled; j += stepPixel){
              var sampleCoord = vec2<i32>(dirVec2 * j) + fragCoord;
              if(sampleCoord.x >= 0 && sampleCoord.y >= 0 
                && sampleCoord.x < i32(texSize.x) 
                && sampleCoord.y < i32(texSize.y) )
              {
                totalWeight += 1.0;

                let subGBuffer = getGBuffer( sampleCoord ) ;
                let samplePosition = getWorldPositionFromGBuffer(subGBuffer,vec2f(sampleCoord)/vec2f(texSize));
                var visible = getRoughnessFromGBuffer(subGBuffer);
                if(visible>0.0){
                  let distanceVec2 = samplePosition.xyz - wPosition;
                  let distance = length(distanceVec2);
                  if(distance < gtaoData.maxDistance ){
                    let sampleDir = normalize(distanceVec2);
                    var factor = saturate( dot(sampleDir, originNormal));
                    factor *= 1.0 - distance / gtaoData.maxDistance;
                    weight += factor;
                  }
                }
              }
          }
      }
      weight /= totalWeight;
      return weight;
    }
  `
);

let MergeRGBA_cs = (
  /*wgsl*/
  `
    @group(0) @binding(0) var textureR : texture_2d<f32>;
    @group(0) @binding(1) var textureG : texture_2d<f32>;
    @group(0) @binding(2) var textureB : texture_2d<f32>;
    @group(0) @binding(3) var textureA : texture_2d<f32>;
    @group(0) @binding(4) var outTex : texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let size = textureDimensions(outTex);
        let fragCoord : vec2<i32> = vec2<i32>(GlobalInvocationID.xy); 
        var uv:vec2<f32>;
        uv.x = f32(fragCoord.x)/f32(size.x);
        uv.y = f32(fragCoord.y)/f32(size.y);
        var oc:vec4<f32> = textureSampleLevel(atlasTexture, atlasTextureSampler, targetUV, 0.0);

        let sizeR = textureDimensions(textureR);
        let sizeG = textureDimensions(textureG);
        let sizeB = textureDimensions(textureB);
        let sizeA = textureDimensions(textureA);
        
        var tr = textureLoad(textureR, vec2<i32>(uv * sizeR) , 0 ) ;
        var tg = textureLoad(textureG, vec2<i32>(uv * sizeG) , 0 ) ;
        var tb = textureLoad(textureB, vec2<i32>(uv * sizeB) , 0 ) ;
        var ta = textureLoad(textureA, vec2<i32>(uv * sizeA) , 0 ) ;

        let color = vec4<f32>(tr,tg,tb,ta);
        textureStore(outTex, fragCoord , vec4(color));
    }

`
);

let OutLineBlendColor_cs = (
  /*wgsl*/
  `
   struct OutlineSettingData{
      strength: f32,
      useAddMode: f32,
      outlinePixel: f32,
      fadeOutlinePixel: f32,
      lowTexWidth: f32,
      lowTexHeight: f32,
      slot0: f32,
      slot1: f32,
   }

   @group(0) @binding(0) var<uniform> outlineSetting: OutlineSettingData;
   @group(0) @binding(1) var inTex : texture_2d<f32>;
   @group(0) @binding(2) var lowTexSampler : sampler;
   @group(0) @binding(3) var lowTex : texture_2d<f32>;
   @group(0) @binding(4) var outlineTex : texture_storage_2d<rgba16float, write>;
   
   var<private> texSize: vec2<u32>;
   var<private> fragCoord: vec2<i32>;


   fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
   {
      let u = (f32(coord.x) + 0.5) / f32(texSize.x);
      let v = (f32(coord.y) + 0.5) / f32(texSize.y);
      return vec2<f32>(u, v);
   }

   @compute @workgroup_size( 8 , 8 , 1 )
   fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
   {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(outlineTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
         return;
      }

      let uv01 = CalcUV_01(fragCoord, texSize);
      var outLineColor = textureSampleLevel(lowTex, lowTexSampler, uv01, 0.0);

      outLineColor.x *= outlineSetting.strength;
      outLineColor.y *= outlineSetting.strength;
      outLineColor.z *= outlineSetting.strength;

      var inColor = textureLoad(inTex, fragCoord, 0);
      var blendColor:vec3<f32> = vec3<f32>(0.0);
      if(outlineSetting.useAddMode > 0.5){
         blendColor = inColor.xyz + outLineColor.xyz * outLineColor.w;
      }else{
         blendColor = mix(inColor.xyz, outLineColor.xyz, outLineColor.w);
      }
      textureStore(outlineTex, fragCoord, vec4<f32>(blendColor, inColor.w));
   }

`
);

let OutlineCalcOutline_cs = (
  /*wgsl*/
  `
#include "GlobalUniform"
#include "GBufferStand"

  struct OutlineSettingData{
    strength: f32,
    useAddMode: f32,
    outlinePixel: f32,
    fadeOutlinePixel: f32,
    lowTexWidth: f32,
    lowTexHeight: f32,
    slot0: f32,
    slot1: f32,
  }

  struct OutlineSlotData{
    color: vec3<f32>,
    count: f32,
  }

  struct OutlineWeightData{
    slotIndex:f32,
    outerSlotIndex:f32,
    entityIndex:f32,
    weight:f32
  }

  struct OutlineEntities{
    list: array<f32, 16u>,
  }

  @group(0) @binding(2) var<uniform> outlineSetting: OutlineSettingData;
  @group(0) @binding(3) var<storage, read_write> slotsBuffer : array<OutlineSlotData>;
  @group(0) @binding(4) var<storage, read_write> weightBuffer : array<OutlineWeightData>;
  @group(0) @binding(5) var<storage, read_write> entitiesBuffer : array<OutlineEntities>;

  var<private> texSize: vec2<u32>;
  var<private> lowSize: vec2<i32>;
  var<private> fragCoord: vec2<i32>;
  var<private> fragUV: vec2<f32>;
  var<private> fragCoordLow: vec2<i32>;
  var<private> coordIndex: i32;

  var<private> fragOutline: OutlineWeightData;
  const PI = 3.1415926 ;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    useNormalMatrixInv();
    fragCoordLow = vec2<i32>( globalInvocation_id.xy );
    texSize = textureDimensions(gBufferTexture).xy;
    fragUV = vec2<f32>(fragCoordLow) / vec2<f32>(texSize);

    lowSize = vec2<i32>(i32(outlineSetting.lowTexWidth), i32(outlineSetting.lowTexHeight));
    let scaleValue = f32(texSize.x) / f32(lowSize.x);
    fragCoord.x = i32(f32(fragCoordLow.x) * scaleValue);
    fragCoord.y = i32(f32(fragCoordLow.y) * scaleValue);

    if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
        return;
    }
    if(fragCoordLow.x >= lowSize.x || fragCoordLow.y >= lowSize.y){
        return;
    }
    
    coordIndex = fragCoordLow.x + fragCoordLow.y * lowSize.x;
    fragOutline = weightBuffer[coordIndex];

    var gBuffer = getGBuffer( fragCoord ) ;
    fragOutline.entityIndex = f32(getIDFromGBuffer_i32(gBuffer));
    fragOutline.slotIndex = -1.0;
    fragOutline.outerSlotIndex = -1.0;
    fragOutline.weight = 0.0;
    
    if(fragOutline.entityIndex >= 0.0){
      fragOutline.slotIndex = f32(matchOutlineSlot());
    }
    weightBuffer[coordIndex] = fragOutline;
  }

  fn matchOutlineSlot() -> i32
  {
    for(var i:i32 = 0; i < 8; i ++){
        var slotData:OutlineSlotData = slotsBuffer[i];
        var entities:array<f32, 16u> = entitiesBuffer[i].list;
        let count:i32 = i32(slotData.count);
        for(var j:i32 = 0; j < count; j ++){
            var outlineIndex = entities[j];
            if(abs(fragOutline.entityIndex - outlineIndex) < 0.1){ 
                return i;
            }
        }
    }
    return -1;
  }
`
);

let Outline_cs = (
  /*wgsl*/
  `
    struct OutlineSettingData{
        strength: f32,
        useAddMode: f32,
        outlinePixel: f32,
        fadeOutlinePixel: f32,
        lowTexWidth: f32,
        lowTexHeight: f32,
        slot0: f32,
        slot1: f32,
    }
    
    struct OutlineSlotData{
        color: vec3<f32>,
        count: f32,
    }
    
    struct OutlineWeightData{
        slotIndex:f32,
        outerSlotIndex:f32,
        entityIndex:f32,
        weight:f32
    }

    @group(0) @binding(0) var<uniform> outlineSetting: OutlineSettingData;
    @group(0) @binding(1) var<storage, read_write> slotsBuffer : array<OutlineSlotData>;
    @group(0) @binding(2) var<storage, read_write> weightBuffer : array<OutlineWeightData>;
    @group(0) @binding(3) var<storage, read_write> oldOutlineColor : array<vec4<f32>>;
    @group(0) @binding(4) var lowTex : texture_storage_2d<rgba16float, write>;
    
    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> coordIndex: i32;
    var<private> fragOutline: OutlineWeightData;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = vec2<i32>( globalInvocation_id.xy );
        texSize = textureDimensions(lowTex).xy;
        if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
            return;
        }
        
        coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
        fragOutline = weightBuffer[coordIndex];
        
        var newOC = vec4<f32>(0.0);
        
        calcOutline();
        let outerSlotIndex:i32 = i32(round(fragOutline.outerSlotIndex));
        if(outerSlotIndex >= 0){
            let outLineColor = slotsBuffer[outerSlotIndex].color;
            newOC = vec4<f32>(outLineColor, fragOutline.weight);
        }
        
        let coordIndex0 = fragCoord.x + 1 + (fragCoord.y + 1) * i32(texSize.x);
        let coordIndex1 = fragCoord.x - 1 + (fragCoord.y + 1) * i32(texSize.x);
        let coordIndex2 = fragCoord.x + (fragCoord.y - 1) * i32(texSize.x);

        let oldOC = oldOutlineColor[coordIndex];
        let oldOC0 = oldOutlineColor[coordIndex0];
        let oldOC1 = oldOutlineColor[coordIndex1];
        let oldOC2 = oldOutlineColor[coordIndex2];
        
        newOC = mix((oldOC + oldOC0 + oldOC1 + oldOC2) * 0.25, newOC, 0.5);
        oldOutlineColor[coordIndex] = newOC;
        textureStore(lowTex, fragCoord, newOC);
    }
    
    fn calcOutline()
    {
        let outlinePixel = outlineSetting.outlinePixel;
        let pixelRadius = outlinePixel + outlineSetting.fadeOutlinePixel;
        let minX = max(0.0, f32(fragCoord.x) - pixelRadius);
        let maxX = min(f32(texSize.x), f32(fragCoord.x) + pixelRadius);
        let minY = max(0.0, f32(fragCoord.y) - pixelRadius);
        let maxY = min(f32(texSize.y), f32(fragCoord.y) + pixelRadius);
        var coordTemp_f32 = vec2<f32>(0.0);
        var coordCurrent_f32 = vec2<f32>(fragCoord);
        var tempCoordIndex = 0;
        var tempWeightData: OutlineWeightData;
        for(var x:f32 = minX; x < maxX; x += 1.0){
            for(var y:f32 = minY; y < maxY; y += 1.0){
                coordTemp_f32.x = x;
                coordTemp_f32.y = y;
                let distanceToOuter = length(coordTemp_f32 - coordCurrent_f32);
                if(distanceToOuter < pixelRadius){
                    var coord_i32 = vec2<i32>(coordTemp_f32);
                    tempCoordIndex = coord_i32.x + coord_i32.y * i32(texSize.x);
                    tempWeightData = weightBuffer[tempCoordIndex];
                    let outlineGap = abs(tempWeightData.slotIndex - fragOutline.slotIndex);
                    if(outlineGap > 0.1){
                        if(tempWeightData.slotIndex > fragOutline.slotIndex){
                            if(abs(tempWeightData.slotIndex - fragOutline.outerSlotIndex) < 0.1){
                                fragOutline.weight = max(fragOutline.weight, calcWeight(pixelRadius, distanceToOuter, outlinePixel));
                                fragOutline.outerSlotIndex = tempWeightData.slotIndex;
                                weightBuffer[tempCoordIndex] = tempWeightData;
                            }else if(tempWeightData.slotIndex > fragOutline.outerSlotIndex){
                                fragOutline.weight = calcWeight(pixelRadius, distanceToOuter, outlinePixel);
                                fragOutline.outerSlotIndex = tempWeightData.slotIndex;
                                weightBuffer[tempCoordIndex] = tempWeightData;
                            }
                        }
                    }
                }
            }
        }
    }
    
    fn calcWeight(totalRadius:f32, distance:f32, innerRadius:f32) -> f32{
        if(distance < innerRadius){
            return 1.0;
        }
        var ret = 1.0 - (distance - innerRadius)  / (totalRadius - innerRadius);

        return ret;
    }
`
);

let SSAO_cs = (
  /*wgsl*/
  `
#include "GlobalUniform"
  struct UniformData {
    radius: f32 ,
    bias: f32,
    aoPower: f32 ,
    blurSize: f32 ,
  };

  @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
  @group(0) @binding(1) var<uniform> uniformData: UniformData;
  @group(0) @binding(2) var<storage,read> sampleData: array<vec4<f32>>;

  // @group(0) @binding(3) var colorMap : texture_2d<f32>;
  @group(0) @binding(3) var positionMap : texture_2d<f32>;
  @group(0) @binding(4) var normalMap : texture_2d<f32>;

  @group(0) @binding(5) var noiseMapSampler: sampler;
  @group(0) @binding(6) var noiseMap : texture_2d<f32>;

  @group(0) @binding(7) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> kernelSize: i32 = 32 ;

  @compute @workgroup_size( 8 , 8 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    var fragCoord = vec2<i32>( globalInvocation_id.xy );

    var texSize = textureDimensions(positionMap).xy;
    var texCoord = vec2<f32>(fragCoord) / vec2<f32>(texSize);

    var fragColor = vec4<f32>(1.0);

    var viewMat = standUniform.viewMat  ;
    // var color = textureLoad(colorMap, fragCoord , 0 ) ;
    var wPos = textureLoad(positionMap, fragCoord , 0 ) ;

    var fragPosition = viewMat * vec4<f32>(wPos.xyz,1.0);
    fragPosition = vec4(fragPosition.xyz / fragPosition.w,1.0) ;

    var texNormal = textureLoad(normalMap, fragCoord , 0 ) ;
    var sampleNormal = texNormal.xyz ;
    sampleNormal = sampleNormal * 2.0 - 1.0;
    var fragNormal = viewMat * vec4<f32>((sampleNormal.xyz),0.0);

    var pes = vec2<f32>(texSize.xy) / 4.0 ;
    var noiseTex:vec4<f32> = textureSampleLevel(noiseMap, noiseMapSampler, texCoord * pes , 0.0);
    var randomVec  = (viewMat * vec4<f32>(normalize(noiseTex.xyz),0.0)).xyz;

    var tangent = normalize(randomVec - fragNormal.xyz * dot(randomVec , fragNormal.xyz));
    var bTangent = cross(fragNormal.xyz, tangent) + 0.0001 ;
    var tbn = mat3x3<f32>(tangent, bTangent, fragNormal.xyz);

    var offset:vec4<f32>;
    var samplePos :vec3<f32>;
    var offsetPosition:f32;
    var sample_depth_v:vec4<f32>;
    var occlusion:f32 = 0.0;
    var rangeCheck:f32 = 0.0 ;
    var radius:f32 = uniformData.radius * 32.0 * fragPosition.z ;

    for(var i:i32 = 0; i < 32 ; i = i + 1 ){
      samplePos  = (tbn * sampleData[i].xyz ) ;
      samplePos  = fragPosition.xyz + samplePos * radius ;

      offset = vec4(samplePos, 1.0);
      offset = standUniform.projMat * offset;

      var off = offset.xyz / offset.w;
      off = (off.xyz * 0.5 ) + 0.5 ;
      off.y = 1.0 - off.y ;
      var offsetUV = vec2<i32>(off.xy * vec2<f32>(texSize.xy));

      sample_depth_v = textureLoad(positionMap, offsetUV.xy , 0 ) ;
      sample_depth_v = vec4<f32>((viewMat * vec4<f32>(sample_depth_v.xyz,1.0)).xyz,1.0);
      offsetPosition = sample_depth_v.z / sample_depth_v.w ;

      rangeCheck = smoothstep(0.0, 1.0, radius / abs(offsetPosition - fragPosition.z ));
      // rangeCheck = smoothstep(0.0, 1.0, radius / uniformData.bias);

      var a = 1.0 ;
      if(offsetPosition >= (samplePos.z + uniformData.bias)){
        a = 0.0 ;
      }
      a = a * rangeCheck ;
      occlusion = occlusion + a ;
    }

    occlusion = 1.0 - ( occlusion / f32(kernelSize) * texNormal.w );
    occlusion = pow(occlusion, uniformData.aoPower) ;

    // color = color * occlusion ;

    textureStore(outTex, fragCoord , vec4(occlusion));
  }
`
);

let SSGI2_cs = (
  /*wgsl*/
  `
    #include "GlobalUniform"
    #include "MathShader"
    #include "FastMathShader"
    #include "BitUtil"
    #include "ColorUtil_frag"
    #include "GBufferStand"

    struct FrameBuffer{
      frameCount : f32 ,
      indirectIns : f32 ,
      delay : f32 ,
      frameCount4 : f32 ,
      d1 : f32 ,
      d2 : f32 ,
      d3 : f32 ,
      d4 : f32 ,
  }
    
    @group(0) @binding(3) var combineTexture : texture_2d<f32>;
    @group(0) @binding(5) var newTexture : texture_storage_2d<rgba16float, write>;

    @group(0) @binding(6) var<storage,read> updateBuffer: FrameBuffer ;

    var<private> i32InputSize: vec2<i32> ;
    var<private> i32GbufferSize: vec2<i32> ;

    var<private> f32InputSize: vec2<f32> ;
    var<private> f32GBufferSize: vec2<f32> ;

    var<private> i32InputFragCoord: vec2<i32> ;
    var<private> i32GbufferFragCoord: vec2<i32> ;

    var<private> f32InputFragCoord: vec2<f32> ;
    var<private> f32GbufferFragCoord: vec2<f32> ;

    var<private> f32InputUV: vec2<f32> ;
    var<private> f32GbufferUV: vec2<f32> ;

    var<private> inputToGBuffer: vec2<f32> ;

    var<private> gBuffer: GBuffer ;
    var<private> wColor: vec3<f32>;

    var<private> halfPi: f32 ;

    const PI: f32 = 3.141592653;
    const I64: f32 = 1.0/64.0;
    // const halfPi = 20.371832715762602978417121711682 ;
    const offsetCount = 20u ;
    
    @compute @workgroup_size( 16 , 16 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      i32InputFragCoord = vec2<i32>( globalInvocation_id.xy ) ;
      f32InputFragCoord = vec2<f32>( globalInvocation_id.xy ) ;

      i32InputSize = vec2i(textureDimensions(newTexture).xy);
      i32GbufferSize = vec2i(textureDimensions(gBufferTexture).xy);

      f32InputSize = vec2f(i32InputSize);
      f32GBufferSize = vec2f(i32GbufferSize);

      inputToGBuffer = 1.0/(f32InputSize / f32GBufferSize) ;

      f32InputUV = f32InputFragCoord / f32InputSize ;

      f32GbufferUV = f32InputUV  ;

      f32GbufferFragCoord = f32GbufferUV * f32GBufferSize;
      i32GbufferFragCoord = vec2i(f32GbufferFragCoord) ; 

      gBuffer = getGBuffer(i32GbufferFragCoord) ;
      wColor = getRGBMColorFromGBuffer(gBuffer);
      var n = getViewNormalFromGBuffer(gBuffer);
      var p = getWorldPositionFromGBuffer(gBuffer,f32GbufferUV);

      let f = -globalUniform.far;
      if(gBuffer.x <= f ){
        textureStore(newTexture, i32InputFragCoord , vec4f(0.0) );
        return ;
      }

      halfPi = 1.0 / (PI*0.5) * f32(offsetCount);

      var trackColor:vec4f = vec4f(0.0);

      trackColor = ray(i32InputFragCoord,f32InputFragCoord);
      // trackColor = vec4f(n.xyz,1.0);

      textureStore(newTexture, i32InputFragCoord , trackColor );
    }

    fn ray(i32InputFragCoord:vec2<i32>,f32InputFragCoord:vec2<f32>) -> vec4f {
      var Output = vec4f(0.0);
      let i64pi = I64*PI ;
      let iFrame = updateBuffer.frameCount;
      var lastColor2 = textureLoad(combineTexture, i32InputFragCoord , 0) ;
      if (iFrame > 1.0 ) {
          var CurrentFrame = f32(iFrame);
          var SSOffset = vec2f(0.0);
          
          gBuffer = getGBuffer(i32GbufferFragCoord) ;
          var VColor = getRGBMColorFromGBuffer(gBuffer);
          var VNormal = getViewNormalFromGBuffer(gBuffer) ;
          var VPPos = getViewPositionFromGBuffer(gBuffer,f32GbufferUV) ;
          var ModFC = f32InputFragCoord % 4.;
          var RandPhiOffset = ARand21(vec2f(1.234)+ (CurrentFrame*3.26346) % 7.2634 );
          var RandPhi2 = (((floor(ModFC.x)+floor(ModFC.y)*4.0+CurrentFrame*5.0) % 16.0)+RandPhiOffset)*2.0*PI*I64 ;
       
          var stepScale = ceil( 128.0 / f32(offsetCount) ) ;
          var skyColor = vec4f(0.0,0.0,0.0,1.0);
          var ii = 0.0;
          var i=0u;
          for (; i < 4u; i+=1u) {
            let RandPhi = f32(i+1u) * (RandPhi2 + PI * 0.5);
            let SSDir = (vec2f(cos(RandPhi),sin(RandPhi)));

            var StepDist = stepScale ;
            let StepCoeff = 0.15+0.15*ARand21(f32InputUV*(1.4+f32(iFrame)*3.26346%6.2634));

            var BitMask = 0u;
            var s = 1u ;
            for (; s<= offsetCount ; s+=1u)
            {
                let SUV : vec2f = f32InputFragCoord + SSDir * StepDist;

                //round 2d offset
                let CurrentStep = max( 1.0 , (StepDist * StepCoeff) );
                StepDist += CurrentStep;

                //fullsize 
                let offsetUV = (SUV / f32InputSize) ;
                let i32InputUV = vec2i( offsetUV * f32GBufferSize );
                let stepGBuffer = getGBuffer(vec2i(i32InputUV));
                var SSVC = getRGBMColorFromGBuffer(stepGBuffer);
                
                var uuv = (SUV * inputToGBuffer);
                uuv = uuv / f32GBufferSize ;
                var SVPPos = getViewPositionFromGBuffer(stepGBuffer,uuv) ;
                var SWPos = getWorldPositionFromGBuffer(stepGBuffer,uuv) ;
                var SNormal = getViewNormalFromGBuffer(stepGBuffer) ;

                let f = (globalUniform.far - globalUniform.near) - 1000.0;
                if(stepGBuffer.x <= f ){
                  let svvd = SVPPos.xyz-VPPos ;
                  var NorDot = dot(VNormal,(svvd))-0.001;
  
                  if(stepGBuffer.x < -1.1 || NorDot < 1.570796 )
                  {
                     continue ;
                  }
  
                  var TanDist = (length(svvd-NorDot*VNormal));

                  if(TanDist <= 0.00001 )
                  {
                      continue ;
                  }
  
                  var Angle1f = atan2(NorDot,TanDist);
                  var Angle2f = atan2((NorDot-0.03*max(1.0,StepDist*0.07)),TanDist);
  
                  var Angle1 = max(0.0,ceil(Angle1f*halfPi));
                  var Angle2 = max(0.0,floor(Angle2f*halfPi));
  
                  var SBitMask = (u32(pow(2.0,Angle1-Angle2))-1u) << u32(Angle2);
                  
                  let b1 = f32(countOneBits(SBitMask & (~BitMask)))/max(1.0,Angle1-Angle2) ;
                  let b2 = pow(cos(Angle2*i64pi),2.0)-pow(cos(Angle1*i64pi),2.0);
                  let b3 = sqrt(max(0.0,dot(SNormal,-svvd))) ;
                  let fb = b1 * b2 * b3 ;
                  
                  var lastColor2 = textureLoad(combineTexture, vec2i(SUV) , 0) ;
                  Output = vec4f(Output.xyz + vec3f(fb * (SSVC.xyz + lastColor2.xyz * 0.15)  ) , 1.0);
                  BitMask = BitMask | SBitMask;
                }
              }
          }
      }else{
        Output = vec4f( wColor.xyz , 1.0 );
      }

      return Output ;
    }
  `
);

let SSR_BlendColor_cs = (
  /*wgsl*/
  `
  #include 'GlobalUniform'

  @group(0) @binding(2) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(3) var colorMap : texture_2d<f32>;
  @group(0) @binding(4) var ssrMapSampler : sampler;
  @group(0) @binding(5) var ssrMap : texture_2d<f32>;
  @group(0) @binding(6) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> colorTexSize: vec2<u32>;
  var<private> ssrTexSize: vec2<u32>;
  var<private> fragCoord: vec2<i32>;
  var<private> ssrCoord: vec2<i32>;

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }

  fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
  {
    let u = (f32(coord.x) + 0.5) / f32(texSize.x);
    let v = (f32(coord.y) + 0.5) / f32(texSize.y);
    return vec2<f32>(u, v);
  }

  const PI = 3.1415926;
  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    fragCoord = vec2<i32>( globalInvocation_id.xy );
    colorTexSize = textureDimensions(colorMap).xy;
    ssrTexSize = textureDimensions(ssrMap).xy;
    if(fragCoord.x >= i32(colorTexSize.x) || fragCoord.y >= i32(colorTexSize.y)){
        return;
    }
    let scale:f32 = f32(ssrTexSize.x) / f32(colorTexSize.x);
    ssrCoord = vec2<i32>(vec2<f32>(fragCoord.xy) * scale);
    let index = ssrCoord.x + ssrCoord.y * i32(ssrTexSize.x);
    let hitData = rayTraceBuffer[index];
    var lastColor = textureLoad(colorMap, fragCoord , 0);
    let time = globalUniform.time;

    var uv01 = CalcUV_01(fragCoord, colorTexSize);
    
    var ssrColor = textureSampleLevel(ssrMap, ssrMapSampler, uv01, 0.0);
    var outColor = mix(lastColor, ssrColor, hitData.fresnel) ;
    textureStore(outTex, fragCoord , outColor );
  }

`
);

let SSR_IS_cs = (
  /*wgsl*/
  `
#include 'BitUtil'

  struct SSRUniformData {
    ssrBufferSizeX: f32,
    ssrBufferSizeY: f32,
    colorMapSizeX: f32,
    colorMapSizeY: f32,

    fadeEdgeRatio: f32,
    rayMarchRatio: f32,
    fadeDistanceMin: f32,
    fadeDistanceMax: f32,
    
    mixThreshold: f32,
    roughnessThreshold: f32,
    reflectionRatio: f32,
    powDotRN: f32,

    randomSeedX: f32,
    randomSeedY: f32,
    slot1: f32,
    slot2: f32,
  };

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }

  @group(0) @binding(0) var<uniform> ssrUniform: SSRUniformData;
  @group(0) @binding(1) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(2) var<storage, read_write> ssrColorData : array<vec4<f32>>;
  @group(0) @binding(3) var<storage, read_write> historyPosition : array<vec4<f32>>;

  @group(0) @binding(4) var colorMap: texture_2d<f32>;
  @group(0) @binding(5) var outTex : texture_storage_2d<rgba16float, write>;

  var<private> ssrBufferCoord: vec2<i32>;
  var<private> colorTexSize: vec2<i32>;
  var<private> bufferData: RayTraceRetData;
  var<private> ssrBufferSize: vec2<i32>;
  var<private> coordIndex: i32;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    ssrBufferCoord = vec2<i32>( globalInvocation_id.xy );
    ssrBufferSize = vec2<i32>(i32(ssrUniform.ssrBufferSizeX), i32(ssrUniform.ssrBufferSizeY));
    colorTexSize = vec2<i32>(i32(ssrUniform.colorMapSizeX), i32(ssrUniform.colorMapSizeY));

    if(ssrBufferCoord.x >= ssrBufferSize.x || ssrBufferCoord.y >= ssrBufferSize.y){
        return;
    }

    coordIndex = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;
    bufferData = rayTraceBuffer[coordIndex];
    var oc = vec4<f32>(0.0, 0.0, 0.0, -1.0);
    
    var mixFactor = historyPosition[coordIndex].w;
    
    if(bufferData.alpha >= 0.0 && bufferData.roughness < ssrUniform.roughnessThreshold){
      let prefilterColor = bufferData.skyColor;
      var ssrColor = textureLoad(colorMap, vec2<i32>(bufferData.hitCoord), 0);
      ssrColor.w = bufferData.alpha;
      oc = ssrColor;
    }
    let skyColor = vec4<f32>(bufferData.skyColor, 1.0);
    oc = mix(oc, skyColor, 1.0 - bufferData.alpha);
    
    let lastColor = ssrColorData[coordIndex];
    var newColor = mix(oc, lastColor, mixFactor);
    newColor.w = oc.w;
    
    ssrColorData[coordIndex] = newColor;
    
    textureStore(outTex, ssrBufferCoord , newColor);
  }
`
);

let SSR_RayTrace_cs = (
  /*wgsl*/
  `
  #include "GlobalUniform"
  #include "MathShader"
  #include "BitUtil"
  #include "GBufferStand"

  struct SSRUniformData {
    ssrBufferSizeX: f32,
    ssrBufferSizeY: f32,
    colorMapSizeX: f32,
    colorMapSizeY: f32,

    fadeEdgeRatio: f32,
    rayMarchRatio: f32,
    fadeDistanceMin: f32,
    fadeDistanceMax: f32,
    
    mixThreshold: f32,
    roughnessThreshold: f32,
    reflectionRatio: f32,
    powDotRN: f32,

    randomSeedX: f32,
    randomSeedY: f32,
    slot1: f32,
    slot2: f32,
  };

  struct HitData{
    hitPos:vec3<f32>,
    hitNormal:vec3<f32>,
    fadeAlpha:vec4<f32>,
    hitCoord:vec2<i32>,
    hitResult:i32,
    hitSky:i32,
  };

  struct RayTraceRetData{
    skyColor:vec3<f32>,
    roughness:f32,

    hitCoord:vec2<f32>,
    alpha:f32,
    fresnel:f32,
  }

  @group(0) @binding(2) var<uniform> ssrUniform: SSRUniformData;
  @group(0) @binding(3) var<storage, read_write> rayTraceBuffer : array<RayTraceRetData>;
  @group(0) @binding(4) var<storage, read_write> historyPosition : array<vec4<f32>>;

  @group(0) @binding(5) var prefilterMap: texture_cube<f32>;
  @group(0) @binding(6) var prefilterMapSampler: sampler;

  var<private> rayOrigin: vec3<f32>;
  var<private> rayDirection: vec3<f32>;
  var<private> cameraPosition: vec3<f32>;
  var<private> reflectionDir: vec3<f32>;
  var<private> colorTexSize: vec2<i32>;
  var<private> fragCoordColor: vec2<i32>;
  var<private> ssrBufferCoord: vec2<i32>;
  var<private> ssrBufferSize: vec2<i32>;
  var<private> hitData: HitData;
  var<private> rayTraceRet: RayTraceRetData;
  var<private> worldPosition: vec3<f32>;
  var<private> worldNormal: vec3<f32>;
  var<private> roughness: f32;
  var<private> fresnel: f32;

  var<private> historyPos: vec3<f32>;
  var<private> coordIndex: i32;

  var<private> sampleUV: vec2<f32>;
  var <private> PI: f32 = 3.14159;

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    ssrBufferCoord = vec2<i32>( globalInvocation_id.xy);
    ssrBufferSize = vec2<i32>(i32(ssrUniform.ssrBufferSizeX), i32(ssrUniform.ssrBufferSizeY));
    if(ssrBufferCoord.x >= ssrBufferSize.x || ssrBufferCoord.y >= ssrBufferSize.y){
      return;
    }
    useNormalMatrixInv();
    coordIndex = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;

    colorTexSize = vec2<i32>(i32(ssrUniform.colorMapSizeX), i32(ssrUniform.colorMapSizeY));
    fragCoordColor = convertColorCoordFromSSRCoord(ssrBufferCoord);

    hitData.fadeAlpha = vec4<f32>(0.0);
    hitData.hitCoord = vec2<i32>(0);
    hitData.hitResult = 0;
    hitData.hitNormal = vec3<f32>(0.0, 1.0, 0.0);
    hitData.hitSky = 1;

    sampleUV =  vec2f(fragCoordColor) / vec2f(colorTexSize) ;
    //gBufferTexture
    let gBuffer : GBuffer = getGBuffer( vec2i(fragCoordColor) );
    worldPosition = getWorldPositionFromGBuffer(gBuffer,sampleUV) ;
    historyPos = historyPosition[coordIndex].xyz;
    
    var mixFactor = 0.2;
    if(length(historyPos - worldPosition) < ssrUniform.mixThreshold){
        mixFactor = 0.9;
    }
    historyPosition[coordIndex] = vec4<f32>(worldPosition, mixFactor);
    
    worldNormal = getWorldNormalFromGBuffer(gBuffer) ;

    let roughness = getRoughnessFromGBuffer(gBuffer);
    fresnel = (1.0 - roughness) * ssrUniform.reflectionRatio;
    fresnel *= fresnel;
    cameraPosition = vec3<f32>(globalUniform.cameraWorldMatrix[3].xyz);
    rayOrigin = vec3<f32>(worldPosition.xyz);

    rayDirection = normalize(vec3<f32>(worldPosition.xyz - cameraPosition));
    
    var randomSeed = fract(ssrUniform.randomSeedX + worldPosition.x);
    rand_seed.x = randomSeed;
    rand_seed.y = fract(ssrUniform.randomSeedY + worldPosition.y + worldPosition.z);
    randomSeed = rand();
    
    let normalRandom = makeRandomDirection(worldNormal, u32(randomSeed * 256.0), 256, roughness);
    
    reflectionDir = normalize(reflect(rayDirection, normalRandom));

    if(roughness > 0.0 && roughness < ssrUniform.roughnessThreshold){
      let uvOrigin = vec2<f32>(f32(fragCoordColor.x), f32(fragCoordColor.y));
      let rayMarchPosition = rayOrigin + reflectionDir * 100.0;
      var uvRayMarch = globalUniform.projMat * (globalUniform.viewMat * vec4<f32>(rayMarchPosition, 1.0));
      var uvOffset = (vec2<f32>(uvRayMarch.xy / uvRayMarch.w) + 1.0) * 0.5;
      uvOffset.y = 1.0 - uvOffset.y;
      uvOffset = uvOffset * vec2<f32>(colorTexSize) - uvOrigin;
      uvOffset = normalize(uvOffset);

      rayTrace(uvOffset);
      if(hitData.hitResult == 1){
          hidingArtifact();
          rayTraceRet.alpha = hitData.fadeAlpha.x * hitData.fadeAlpha.y * hitData.fadeAlpha.z * hitData.fadeAlpha.w;
          if(hitData.hitSky == 1){
            rayTraceRet.alpha = 0.0;
          }
      }else{
        rayTraceRet.alpha = 0.0;
      }
      rayTraceRet.skyColor = getSkyColor();
    }else{
      rayTraceRet.alpha = -1.0;
      rayTraceRet.skyColor = vec3<f32>(0.0);
    }

    rayTraceRet.roughness = roughness;
    rayTraceRet.fresnel = fresnel;
    rayTraceRet.hitCoord = vec2<f32>(hitData.hitCoord);

    let index:i32 = ssrBufferCoord.x + ssrBufferCoord.y * ssrBufferSize.x;
    rayTraceBuffer[index] = rayTraceRet;
  }

  fn makeRandomDirection(srcDirection:vec3<f32>, i:u32, SAMPLE_COUNT:u32, roughness:f32) -> vec3<f32>
  {
    var N: vec3<f32> = normalize(srcDirection);
    var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
    return ImportanceSampleGGX(Xi, N, roughness);
  }

  fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
  {
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) /f32(N), rdi);
  }

  fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
  {
    var a = roughness*roughness;

    var phi = 2.0 * PI * Xi.x;
    var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
    var sinTheta = sqrt(1.0 - cosTheta*cosTheta);

    // from spherical coordinates to cartesian coordinates
    var H:vec3<f32>;
    H.x = cos(phi) * sinTheta;
    H.y = sin(phi) * sinTheta;
    H.z = cosTheta;

    // from tangent-space vector to world-space sample vector
  var up:vec3<f32>;
    if(abs(N.z) < 0.999)
    {
        up = vec3<f32>(0.0, 0.0, 1.0);
    }
    else
    {
        up = vec3<f32>(1.0, 0.0, 0.0);
    }
  var tangent:vec3<f32>  = normalize(cross(up, N));
  var bitangent:vec3<f32> = cross(N, tangent);
  var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
  return normalize(sampleVec);
  }

  var<private> rand_seed :vec2<f32> = vec2<f32>(0.0);
  fn rand() -> f32 {
    rand_seed.x = fract(cos(dot(rand_seed, vec2<f32>(23.14077926, 232.61690225))) * 136.8168);
    rand_seed.y = fract(cos(dot(rand_seed, vec2<f32>(54.47856553, 345.84153136))) * 534.7645);
    return rand_seed.y;
  }

  fn getSkyColor() -> vec3<f32>{
    let calcRoughness = clamp(roughness, 0.0, 1.0);
    let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
    var prefilterColor = textureSampleLevel(prefilterMap, prefilterMapSampler, reflectionDir, calcRoughness * MAX_REFLECTION_LOD);
    return LinearToGammaSpace(vec3<f32>(prefilterColor.xyz)) * globalUniform.skyExposure;
  }

  fn convertColorCoordFromSSRCoord(coord:vec2<i32>) -> vec2<i32>{
    let color_ssr_ratio = ssrUniform.colorMapSizeX / ssrUniform.ssrBufferSizeX;
    let targetCoord = vec2<f32>(coord) * color_ssr_ratio;
    return vec2<i32>(targetCoord);
  }

  fn hidingArtifact(){
    let texSizeF32 = vec2<f32>(f32(colorTexSize.x), f32(colorTexSize.y));
    let halfTexSizeF32 = texSizeF32 * 0.5;

    //near screen edge
    var distance2Center = abs(vec2<f32>(f32(hitData.hitCoord.x), f32(hitData.hitCoord.y)) - halfTexSizeF32);
    let halfEdgeSize:f32 = min(texSizeF32.x, texSizeF32.y) * clamp(0.01, ssrUniform.fadeEdgeRatio, 1.0) * 0.5;
    var distance2Edge = min(vec2<f32>(halfEdgeSize), halfTexSizeF32 - distance2Center);
    var ratioXY = distance2Edge / halfEdgeSize;
    hitData.fadeAlpha.x = sqrt(ratioXY.x * ratioXY.y);

    //back face hit
    var backFaceBias = max(0.0, dot(hitData.hitNormal, -reflectionDir));
    hitData.fadeAlpha.y = pow(backFaceBias, max(0.0001, ssrUniform.powDotRN));

    //screen distance ratio
    let maxLength = max(f32(colorTexSize.x), f32(colorTexSize.y)) * ssrUniform.rayMarchRatio;
    let screenPointer = hitData.hitCoord - fragCoordColor;
    var screenDistance = length(vec2<f32>(f32(screenPointer.x), f32(screenPointer.y)));
    screenDistance = clamp(screenDistance / maxLength, 0.0, 1.0);
    hitData.fadeAlpha.z = 1.0 - screenDistance;

    //position distance ratio
    var fadeDistance = length(vec3<f32>(hitData.hitPos - cameraPosition));
    var dFar = ssrUniform.fadeDistanceMax;
    var dNear = ssrUniform.fadeDistanceMin;
    dFar = max(1.0, dFar);
    dNear = clamp(dNear, 0.001, dFar - 0.001);
    fadeDistance = clamp(fadeDistance, dNear, dFar);
    fadeDistance = (fadeDistance - dNear) / (dFar - dNear);
    hitData.fadeAlpha.w = 1.0 - fadeDistance;
  }

  fn rayTrace(rayMarchDir:vec2<f32>){
    let stepLength = 4.0;
    let maxLength = max(f32(colorTexSize.x), f32(colorTexSize.y)) * ssrUniform.rayMarchRatio;
    for(var i:f32 = 1.0; i < maxLength; i = i + stepLength){
        let offsetFloat32 = i * rayMarchDir;
        var uv = fragCoordColor + vec2<i32>(i32(offsetFloat32.x), i32(offsetFloat32.y));
        let hitRet = rayInterestScene(uv);
        if(hitRet > 0){
          hitData.hitResult = hitRet;
          break;
        }
    }
    if(hitData.hitResult == 1){
        let fromUV = hitData.hitCoord;
        for(var i:f32 = -stepLength; i <= 0.0; i = i + 1.0){
          let offsetFloat32 = i * rayMarchDir;
          var uv = fromUV + vec2<i32>(i32(offsetFloat32.x), i32(offsetFloat32.y));
          let hitRet = rayInterestScene(uv);
          if(hitRet == 1){
            let gBuffer = getGBuffer(hitData.hitCoord);
            if(getRoughnessFromGBuffer(gBuffer) >= 0.0){
              hitData.hitSky = 0;
            }
            
            let WN = getWorldNormalFromGBuffer(gBuffer);
            hitData.hitNormal = normalize(WN);
            break;
          }
        }
    }
  }

  fn rayInterestScene(uv:vec2<i32>) -> i32 {
    if(uv.x < 0 || uv.y < 0 || uv.x >= colorTexSize.x || uv.y >= colorTexSize.y){
      return 2;
    }else{
      let gBuffer = getGBuffer(uv);
      let hitPos = getWorldPositionFromGBuffer(gBuffer , vec2f(uv) / vec2f(colorTexSize) );
      let testDir = normalize(vec3<f32>(hitPos.xyz - rayOrigin));
      let cosValue = dot(reflectionDir, testDir);

      if(cosValue > 0.9996){
        let cross1 = cross(reflectionDir, -rayDirection);
        let cross2 = cross(reflectionDir, testDir);
        if(dot(cross1, cross2) > 0.0){
          hitData.hitPos = vec3<f32>(hitPos.xyz);
          hitData.hitCoord = uv;
          return 1;
        }
      }
    }
    return 0;
  }
`
);

let TAACopyTex_cs = (
  /*wgsl*/
  `
    @group(0) @binding(0) var<storage, read_write> preColor : array<vec4<f32>>;
    @group(0) @binding(1) var preColorTex : texture_storage_2d<rgba16float, write>;

    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> coordIndex: i32;
    
    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(preColorTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
          return;
      }
      coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
      textureStore(preColorTex, fragCoord , preColor[coordIndex]);
    }
 `
);

let TAASharpTex_cs = (
  /*wgsl*/
  `
    struct TAAData{
      preProjMatrix: mat4x4<f32>,
      preViewMatrix: mat4x4<f32>,
      jitterFrameIndex: f32,
      blendFactor: f32,
      sharpFactor: f32,
      sharpPreBlurFactor: f32,
      jitterX: f32,
      jitterY: f32,
      slot0: f32,
      slot1: f32,
    }
    @group(0) @binding(0) var<uniform> taaData: TAAData;
    @group(0) @binding(1) var inTex : texture_2d<f32>;
    @group(0) @binding(2) var outTex : texture_storage_2d<rgba16float, write>;

    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;

    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
      fragCoord = vec2<i32>( globalInvocation_id.xy );
      texSize = textureDimensions(outTex).xy;
      if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
          return;
      }
      
      let c0 = textureLoad(inTex, vec2<i32>(fragCoord.x, fragCoord.y - 1), 0);
      let c1 = textureLoad(inTex, vec2<i32>(fragCoord.x, fragCoord.y + 1), 0);
      let c2 = textureLoad(inTex, vec2<i32>(fragCoord.x - 1, fragCoord.y), 0);
      let c3 = textureLoad(inTex, vec2<i32>(fragCoord.x + 1, fragCoord.y), 0);
      
      var roundColor = (c0 + c1 + c2 + c3) * 0.25;
      let originColor = textureLoad(inTex, fragCoord, 0);
      let blurColor = mix(roundColor, originColor, taaData.sharpPreBlurFactor);
      var oc = (originColor - blurColor * taaData.sharpFactor) / (1.0 - taaData.sharpFactor);
      oc = clamp(oc, vec4<f32>(0.0), oc);
      textureStore(outTex, fragCoord , oc);
    }
`
);

let TAA_cs = (
  /*wgsl*/
  `
#include "GlobalUniform"
#include "GBufferStand"

struct TAAData{
  preProjMatrix: mat4x4<f32>,
  preViewMatrix: mat4x4<f32>,
  jitterFrameIndex: f32,
  blendFactor: f32,
  sharpFactor: f32,
  sharpPreBlurFactor: f32,
  jitterX: f32,
  jitterY: f32,
  slot0: f32,
  slot1: f32,
}

@group(0) @binding(2) var<uniform> taaData: TAAData;
@group(0) @binding(3) var<storage, read_write> preColorBuffer : array<vec4<f32>>;
@group(0) @binding(4) var preColorTexSampler : sampler;
@group(0) @binding(5) var preColorTex : texture_2d<f32>;
@group(0) @binding(6) var inTexSampler : sampler;
@group(0) @binding(7) var inTex : texture_2d<f32>;
@group(0) @binding(8) var outTex : texture_storage_2d<rgba16float, write>;

const PI = 3.1415926 ;
const FLT_EPS = 5.960464478e-8;  // 2^-24, machine epsilon: 1 + EPS = 1 (half of the ULP for 1.0f)

var<private> texSize: vec2<u32>;
var<private> fragCoord: vec2<i32>;
var<private> fragUV: vec2<f32>;
var<private> coordIndex: i32;
var<private> color_min: vec4<f32>;
var<private> color_max: vec4<f32>;
var<private> color_avg: vec4<f32>;
var<private> re_proj_uv01: vec2<f32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
  fragCoord = vec2<i32>( globalInvocation_id.xy );
  texSize = textureDimensions(inTex).xy;
  if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
      return;
  }
  useNormalMatrixInv();
  fragUV = vec2<f32>(fragCoord) / vec2<f32>(texSize - 1);
  let frame = globalUniform.frame;
  coordIndex = fragCoord.x + fragCoord.y * i32(texSize.x);
  
  let oc = blendColor();
  preColorBuffer[coordIndex] = oc;
  textureStore(outTex, fragCoord , oc);
}

fn blendColor() -> vec4<f32>
{
  var preCoord = fragCoord;
  var mixWeight = 1.0;
  re_proj_uv01 = vec2<f32>(0.0);
  var reProjectionCoord:vec2<f32> = vec2<f32>(fragCoord);
  //var jitterUVOffset = 0.5 * vec2<f32>(taaData.jitterX, -taaData.jitterY);
  if(taaData.jitterFrameIndex > 0.5){
      let gBuffer : GBuffer = getGBuffer(fragCoord);
      var wPos = getWorldPositionFromGBuffer(gBuffer,fragUV) ;
      let roughness = getRoughnessFromGBuffer(gBuffer);
      let ndc = taaData.preProjMatrix * (taaData.preViewMatrix * vec4<f32>(wPos.xyz, 1.0));
      re_proj_uv01 = vec2<f32>(ndc.x, -ndc.y) / ndc.w;
      re_proj_uv01 = (re_proj_uv01 + 1.0) * 0.5;
      
      if(roughness > 0.0 && re_proj_uv01.x >= 0.0 && re_proj_uv01.x <= 1.0 && re_proj_uv01.y >= 0.0 && re_proj_uv01.y <= 1.0){
          mixWeight = taaData.blendFactor;
          //reProjectionCoord = re_proj_uv01 + jitterUVOffset;
          reProjectionCoord.x = re_proj_uv01.x * f32(texSize.x - 1);
          reProjectionCoord.y = re_proj_uv01.y * f32(texSize.y - 1);
          preCoord = vec2<i32>(reProjectionCoord);
      }else{ 
          //outside of screen
          mixWeight = 1.0;
      }
  }
  
  var curUV01 = fragUV;
  //curUV01 += jitterUVOffset;
  
  let curColor = textureSampleLevel(inTex, inTexSampler, curUV01, 0.0);
  
  let preIndex = preCoord.x + preCoord.y * i32(texSize.x);
  var preColor = textureSampleLevel(preColorTex, preColorTexSampler, re_proj_uv01, 0.0);
  
  //minmax9(fragCoord);
  minmax4(fragCoord);
  
  preColor = clip_aabb(color_min.xyz, color_max.xyz, color_avg, preColor);
  var outColor = mix(preColor, curColor, mixWeight);
  return outColor;
}

fn clampCoord(coord0:vec2<i32>) -> vec2<i32>{
  return clamp(coord0, vec2<i32>(0), vec2<i32>(texSize - 1));
}

fn minmax4(coord:vec2<i32>) {
      let uv0 = clampCoord(vec2<i32>(coord.x - 1, coord.y));
      let uv1 = clampCoord(vec2<i32>(coord.x, coord.y - 1));
      let uv2 = clampCoord(vec2<i32>(coord.x, coord.y + 1));
      let uv3 = clampCoord(vec2<i32>(coord.x + 1, coord.y));
      
      let c0 = textureLoad(inTex, uv0, 0);
      let c1 = textureLoad(inTex, uv1, 0);
      let c2 = textureLoad(inTex, uv2, 0);
      let c3 = textureLoad(inTex, uv3, 0);
      
      color_min = min(c0, min(c1, min(c2, c3)));
      color_max = max(c0, max(c1, max(c2, c3)));
      color_avg = (c0 + c1 + c2 + c3) * 0.25;
  }
  
 fn minmax9(coord:vec2<i32>) {
      let uv0 = clampCoord(vec2<i32>(coord.x - 1, coord.y - 1));
      let uv1 = clampCoord(vec2<i32>(coord.x - 1, coord.y));
      let uv2 = clampCoord(vec2<i32>(coord.x - 1, coord.y + 1));
      let uv3 = clampCoord(vec2<i32>(coord.x, coord.y - 1));
      let uv4 = clampCoord(vec2<i32>(coord.x, coord.y));
      let uv5 = clampCoord(vec2<i32>(coord.x, coord.y + 1));
      let uv6 = clampCoord(vec2<i32>(coord.x + 1, coord.y - 1));
      let uv7 = clampCoord(vec2<i32>(coord.x + 1, coord.y));
      let uv8 = clampCoord(vec2<i32>(coord.x + 1, coord.y + 1));
      
      let ctl = textureLoad(inTex, uv0, 0);
      let ctc = textureLoad(inTex, uv1, 0);
      let ctr = textureLoad(inTex, uv2, 0);
      let cml = textureLoad(inTex, uv3, 0);
      let cmc = textureLoad(inTex, uv4, 0);
      let cmr = textureLoad(inTex, uv5, 0);
      let cbl = textureLoad(inTex, uv6, 0);
      let cbc = textureLoad(inTex, uv7, 0);
      let cbr = textureLoad(inTex, uv8, 0);
      
      color_min = min(ctl, min(ctc, min(ctr, min(cml, min(cmc, min(cmr, min(cbl, min(cbc, cbr))))))));
      color_max = max(ctl, max(ctc, max(ctr, max(cml, max(cmc, max(cmr, max(cbl, max(cbc, cbr))))))));
      color_avg = (ctl + ctc + ctr + cml + cmc + cmr + cbl + cbc + cbr) / 9.0;
  }
  
  fn clip_aabb(aabb_max:vec3<f32>, aabb_min:vec3<f32>, color_avg:vec4<f32>, input_texel:vec4<f32>) -> vec4<f32>
  {
      var p_clip:vec3<f32> = 0.5 * (aabb_max + aabb_min);
      var e_clip:vec3<f32> = 0.5 * (aabb_max - aabb_min) + FLT_EPS;
      var v_clip:vec4<f32> = input_texel - vec4<f32>(p_clip, color_avg.w);
      var v_unit:vec3<f32> = v_clip.xyz / e_clip;
      var a_unit:vec3<f32> = abs(v_unit);
      var ma_unit:f32 = max(a_unit.x, max(a_unit.y, a_unit.z));

      if (ma_unit > 1.0){
          return vec4<f32>(p_clip, color_avg.w) + v_clip / ma_unit;
      }else{
          return input_texel;
      }
  }`
);

let Combine_cs = (
  /* wgsl */
  `
    #include "GlobalUniform"
    #include "BitUtil"
    #include 'ColorUtil_frag'
    #include 'GBufferStand'

    struct FrameBuffer{
        frameCount : f32 ,
        indirectIns : f32 ,
        delay : f32 ,
        colorIns : f32 ,
        d1 : f32 ,
        d2 : f32 ,
        d3 : f32 ,
        d4 : f32 ,
    }
    

    // @group(0) @binding(0) var inputATexture : texture_2d<f32>;
    // @group(0) @binding(1) var inputATextureSampler : sampler;
    @group(0) @binding(2) var inputBTexture : texture_2d<f32>;
    @group(0) @binding(3) var inputBTextureSampler : sampler;
    
    @group(0) @binding(4) var outTexture : texture_storage_2d<rgba16float, write>;
    @group(0) @binding(5) var<storage,read> updateBuffer: FrameBuffer ;

    var<private> fragCoord:vec2<u32>;

    const PI = 3.1415926 ;
    
    @compute @workgroup_size( 16 , 16 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = globalInvocation_id.xy;
        let textsize = vec2f(textureDimensions(inputBTexture).xy);
        let size = vec2f(textureDimensions(outTexture).xy);
        let inputUV = vec2f(fragCoord) / size ;
        let inputUV2 = vec2<i32>(inputUV * textsize) ;

        let time = globalUniform.time ;

        let gBuffer = getGBuffer(vec2i(fragCoord));
        let b = textureSampleLevel( inputBTexture, inputBTextureSampler, inputUV , 0.0 );

        let albedoColor = getAbldeoFromGBuffer(gBuffer) / PI ;
        let bufferColor = getRGBMColorFromGBuffer(gBuffer)  ;
        var colorA = bufferColor.xyz * updateBuffer.colorIns ;
        var color = b.xyz * updateBuffer.indirectIns * albedoColor ;


        // color = LinearToGammaSpace(color);
        // var currentPixel:vec4f = vec4f((colorA.xyz + color.xyz ) , 1.0) ;
        var currentPixel:vec4f = vec4f(colorA.xyz + color , 1.0) ;
        // var currentPixel:vec4f = vec4f(bufferColor , 1.0) ;
        // var currentPixel:vec4f = vec4f(1.0,0.0,0.0, 1.0) ;
        textureStore(outTexture, fragCoord , currentPixel );
    }

  

`
);

let Denoising_cs = (
  /* wgsl */
  `
    // #include "GlobalUniform"

    struct FrameBuffer{
        frameCount : f32 ,
        indirectIns : f32 ,
        delay : f32 ,
        frameCount4 : i32 ,
    }
    
    @group(0) @binding(1) var<storage,read_write> updateBuffer: FrameBuffer ;
    @group(0) @binding(2) var newTexture : texture_2d<f32>;
    @group(0) @binding(3) var oldTexture : texture_2d<f32>;
    @group(0) @binding(4) var combineTexture : texture_storage_2d<rgba16float, write>;
    var<private> fragCoord:vec2<u32>;
    
    @compute @workgroup_size( 16 , 16 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = globalInvocation_id.xy;

        // if(updateBuffer.frameCount < 256){
            let newPixel = textureLoad( newTexture, fragCoord, 0 );
            let oldPixel = textureLoad( oldTexture, fragCoord, 0 );
    
            let weight = updateBuffer.delay ;
            var currentPixel:vec4f;
            currentPixel = vec4f(newPixel.xyz * weight + (1.0-weight) * oldPixel.xyz , 1.0 );
            textureStore(combineTexture, fragCoord , currentPixel );
    }

  

`
);

let TestComputeLoadBuffer = (
  /* wgsl */
  `
    #include "GlobalUniform"
    #include "MathShader"
    #include "FastMathShader"
    #include "BitUtil"
    #include "ColorUtil_frag"
    #include "GBufferStand"

    struct Uniform{
        state:i32,
        state1:i32,
        state2:i32,
        state3:i32,
    }

    @group(0) @binding(auto) var outputTexture : texture_storage_2d<rgba16float, write>;
    @group(0) @binding(auto) var reflectionsGBufferTexture : texture_2d<f32>;
    @group(0) @binding(auto) var currentRenderTexture : texture_2d<f32>;
    @group(0) @binding(auto) var envMap : texture_2d<f32>;
    @group(0) @binding(auto) var<uniform> uniformData : Uniform;
    
    var<private> fragCoord:vec2<u32>;
    var<private> screenSize:vec2<u32>;
    var<private> fragColor:vec4f;
    const PI = 3.1415926 ;
    
    var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
        vec3<f32>(1.0, 0.0, 0.0),
        vec3<f32>(1.0, 0.5, 0.0),
        vec3<f32>(0.5, 1.0, 0.0),
        vec3<f32>(0.0, 1.0, 0.0),
        vec3<f32>(0.0, 1.0, 0.5),
        vec3<f32>(0.0, 0.5, 1.0),
        vec3<f32>(0.0, 0.0, 1.0),
        vec3<f32>(0.5, 0.0, 1.0),
        vec3<f32>(1.0, 0.0, 0.5)
    );

    @compute @workgroup_size( 16 , 16 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        
        fragCoord = globalInvocation_id.xy;
        screenSize = vec2u(textureDimensions(outputTexture));

        useNormalMatrixInv();

        let color = textureLoad(currentRenderTexture, fragCoord , 0);
        fragColor = color ;

        var outPixel:vec3f ;
        var a = globalUniform.time ;

        var state = uniformData.state ;
        //render normal color
        let gBuffer : GBuffer = getGBuffer( vec2i(fragCoord) );
        switch (state) {
            case 0:{
                break;
            }
            case 1:{
                fragColor = vec4f(getAbldeoFromGBuffer(gBuffer).rgb,1.0) ;
                break;
            }
            case 2:{
                fragColor = vec4f(getViewNormalFromGBuffer(gBuffer),1.0) ;
                break;
            }
            case 3:{
                fragColor = vec4f(getWorldNormalFromGBuffer(gBuffer),1.0) ;
                break;
            }
            case 4:{
                fragColor = vec4f(vec3f(getRoughnessFromGBuffer(gBuffer)),1.0) ;
                break;
            }
            case 5:{
                fragColor = vec4f(vec3f(getMetaillicFromGBuffer(gBuffer)),1.0) ;
                break;
            }    
            case 6:{
                fragColor = vec4f(vec3f(getAlphaFromGBuffer(gBuffer)),1.0) ;
                break;
            }
            case 7:{
                let id = (f32(getIDFromGBuffer_i32(gBuffer)) * f_r22g8.r) % 9.0;
                fragColor = vec4f(colorSet[u32(id)],1.0) ;
                break;
            }
            
            default:{
                break;
            }
        }

        let size = f32(uniformData.state1) ; 
        let renderRec1 = vec4f(0.0,0.0,size,size);
        renderBufferToViewPort(reflectionsGBufferTexture,renderRec1);

        let size2 = f32(uniformData.state2) ; 
        let renderRec2 = vec4f(0.0,size,size2,size2);
        renderColorBufferToViewPort(envMap,renderRec2);
      
        //not chage final color out put 
        textureStore(outputTexture, fragCoord , fragColor );
    }

    fn renderBufferToViewPort( texture:texture_2d<f32> , viewRectangle:vec4f) {
        let size = vec2f(textureDimensions(texture));
        let f32FragCoord = vec2f(fragCoord);
        if(insideRectangle(f32FragCoord,viewRectangle)){
            let uv = clipViewUV(viewRectangle,size,f32FragCoord);
            let gBuffer = textureGBuffer(texture,uv);
            let color = getRGBMColorFromGBuffer(gBuffer);
            fragColor = vec4f(color,1.0); 
        }
    }

    fn renderColorBufferToViewPort( texture:texture_2d<f32> , viewRectangle:vec4f) {
        let size = vec2f(textureDimensions(texture));
        let f32FragCoord = vec2f(fragCoord);
        if(insideRectangle(f32FragCoord,viewRectangle)){
            let uv = clipViewUV(viewRectangle,size,f32FragCoord);
            let color = textureLoad(texture, uv , 0).rgb;
            fragColor = vec4f(color,1.0); 
        }
    }

    fn textureGBuffer( texture:texture_2d<f32> , fragCoord:vec2u ) -> GBuffer {
        let bufferTex = textureLoad(texture, fragCoord , 0) ;
        var gBuffer:GBuffer ;
        gBuffer.x = bufferTex.x ;
        gBuffer.y = bufferTex.y ;
        gBuffer.z = bufferTex.z ;
        gBuffer.w = bufferTex.w ;
        return gBuffer ;
    }

 
`
);

let textureCompress = (colorMap, sourceTexture, destTexture, workX, workY, workZ = 1) => {
  let begin = 0;
  let bindInputTexture = "";
  let preG = "";
  preG += /* wgsl */
  `
        fn acesFilm( x:vec3f) -> vec3f {
            return clamp((x*(2.51*x+vec3f(0.03)))/(x*(2.43*x+vec3f(0.59))+vec3f(0.14)),vec3f(0.0),vec3f(1.0));
        }
    `;
  for (let i = 0; i < sourceTexture.length; i++) {
    sourceTexture[i];
    let inTextureName = `source${i}Map`;
    let inTextureSamplerName = `source${i}MapSampler`;
    bindInputTexture += /* wgsl */
    `
            @group(0) @binding(${(begin + i) * 2 + 0}) var ${inTextureName} : texture_2d<f32>;

            @group(0) @binding(${(begin + i) * 2 + 1}) var ${inTextureSamplerName} : sampler;
        `;
    preG += GaussBlur(`GaussBlur_${inTextureName}_1`, inTextureName, inTextureSamplerName);
    preG += GaussBlur(`GaussBlur_${inTextureName}_0`, inTextureName, inTextureSamplerName);
  }
  begin += sourceTexture.length;
  let bindOutputTexture = "";
  for (let i = 0; i < destTexture.length; i++) {
    bindOutputTexture += /* wgsl */
    `@group(0) @binding(${(begin + i) * 2 + 0}) var dest${i}Map : texture_storage_2d<rgba16float, write>;
`;
  }
  let loadMainColor = "";
  if (colorMap) {
    begin += destTexture.length;
    bindInputTexture += /* wgsl */
    `@group(0) @binding(${begin * 2 + 0}) var colorMap : texture_2d<f32>;

       
        `;
    loadMainColor += /* wgsl */
    `
            mainColor = textureLoad( colorMap ,fragCoord, 0) ;
        `;
  }
  let compute_workgroup_size = (
    /* wgsl */
    `@compute @workgroup_size(${workX}, ${workY},${workZ})`
  );
  let copyTexture = copyToTexture(sourceTexture.length, colorMap ? true : false);
  let compute_shader = (
    /* wgsl */
    `
        ${GaussWeight2D}
        ${CalcUV_01}
        ${bindInputTexture}
        ${bindOutputTexture}
        ${preG}
        
        var<private> fragCoord: vec2<i32>;
        var<private> texSize: vec2<u32>;

        var<private> mainColor: vec4f;

        ${compute_workgroup_size}
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>){
            fragCoord = vec2<i32>( globalInvocation_id.xy );
            texSize = textureDimensions(dest0Map).xy;
            if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
                return;
            }
            
            ${loadMainColor}

            ${copyTexture}
        }
    `
  );
  return compute_shader;
};
let copyToTexture = (len, combineMainColor) => {
  let code = ``;
  for (let i = 0; i < len; i++) {
    code += upSample(`GaussBlur_source${i}Map`, `dest${i}Map`, combineMainColor);
  }
  return code;
};
let upSample = (funName, outeTextureName, combineMainColor) => {
  let code = (
    /* wgsl */
    `
        var color = vec4<f32>(0.0, 0.0, 0.0, 1.0);
        var uv = CalcUV_01(fragCoord, texSize);
        
        // half stride
        let prev_stride = vec2<f32>(0.5) / vec2<f32>(f32(texSize.x), f32(texSize.y));
        let curr_stride = vec2<f32>(1.0) / vec2<f32>(f32(texSize.x), f32(texSize.y));

        let rgb1 = ${funName}_1(uv, i32(1), prev_stride, 1.0);
        let rgb2 = ${funName}_0(uv, i32(1), curr_stride, 1.0);
        color = vec4<f32>((rgb1 + rgb2) * 0.5 , color.w) ;
        // color *= 3.1415926 ;
        color = vec4f(pow(acesFilm(max(vec3f(0.),color.xyz)),vec3f(0.45)),1.) * 0.5  ;   
        ${combineMainColor ? "color = (color + mainColor) ;" : ""}
        // color = color / (1.0+color) * 2.0 ;
        textureStore(${outeTextureName}, fragCoord, color );
    `
  );
  return code;
};
let CalcUV_01 = (
  /*wgsl*/
  `
  fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
  {
    let u = (f32(coord.x) + 0.5) / f32(texSize.x);
    let v = (f32(coord.y) + 0.5) / f32(texSize.y);
    return vec2<f32>(u, v);
  }
`
);
let GaussWeight2D = (
  /*wgsl*/
  `
fn GaussWeight2D(x:f32, y:f32, sigma:f32) -> f32
  {
      let PI = 3.14159265358;
      let E  = 2.71828182846;
      let sigma_2 = pow(sigma, 2);
  
      let a = -(x*x + y*y) / (2.0 * sigma_2);
      return pow(E, a) / (2.0 * PI * sigma_2);
  }
`
);
let GaussBlur = function(GaussNxN, inTex, inTexSampler) {
  var code = (
    /*wgsl*/
    `
  
  fn ${GaussNxN}(uv:vec2<f32>, n:i32, stride:vec2<f32>, sigma:f32) -> vec3<f32>
  {
      var color = vec3<f32>(0.0);
      let r:i32 = n / 2;
      var weight:f32 = 0.0;
  
      for(var i:i32=-r; i<=r; i+=1)
      {
          for(var j=-r; j<=r; j+=1)
          {
              let w = GaussWeight2D(f32(i), f32(j), sigma);
              var coord:vec2<f32> = uv + vec2<f32>(f32(i), f32(j)) * stride;
              // color += tex2D(tex, coord).rgb * w;
              color += textureSampleLevel(${inTex}, ${inTexSampler}, coord, 0.0).xyz * w;
              weight += w;
          }
      }
  
      color /= weight;
      return color;
  }`
  );
  return code;
};

let tw = (
  /* wgsl */
  `

    @group(0) @binding(1) var inputTexture : texture_2d<f32>;
    @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba16float, write>;

    // @group(0) @binding(3) var posTexture : texture_2d<f32>;
    // @group(0) @binding(4) var normalTexture : texture_2d<f32>;
    // @group(0) @binding(5) var colorTexture : texture_2d<f32>;

    var<private> fragCoord:vec2<u32>;
    // var<private> wPosition: vec4<f32>;
    // var<private> wNormal: vec4<f32>;
    // var<private> wColor: vec4<f32>;
    
    // var<private> finalMatrix: mat4x4<f32>;
    // var<private> ORI_NORMALMATRIX: mat3x3<f32>;

    
    @compute @workgroup_size( 16 , 16 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = globalInvocation_id.xy;

        wColor = textureLoad(colorTexture, fragCoord , 0);
      

        finalMatrix = globalUniform.projMat * globalUniform.viewMat ;
        let nMat = mat3x3<f32>(finalMatrix[0].xyz,finalMatrix[1].xyz,finalMatrix[2].xyz) ;
        ORI_NORMALMATRIX = transpose(inverse( nMat ));

        wPosition = textureLoad(posTexture, fragCoord, 0);
        wNormal = textureLoad(normalTexture, fragCoord, 0);
        var VPPos = (finalMatrix * vec4f(wPosition.xyz,1.0)).xyz ;
        var VPNormal = normalize(ORI_NORMALMATRIX * wNormal.xyz) ;

        var LastPixel = textureLoad(inputTexture,fragCoord,0);

        var NewPixel:vec4f = wColor ;
        var NewRadius = max(1.,ceil(1.99-LastPixel.w*0.25));
        var RadiusCoeff = max(1.,2.25-LastPixel.w*0.25);
        if (NewRadius>0.5) {
            var NewWeight = 1.;
            for (var x=-NewRadius; x<NewRadius+0.5; x+=1.0) {
                for (var y=-NewRadius; y<NewRadius+0.5; y+=1.0) {
                    var SUV:vec2f = vec2f(fragCoord)+vec2f(x,y)*RadiusCoeff;
                    if (x*x+y*y<0.01) {
                        continue;
                    }

                    var SVPos:vec3f = textureLoad(posTexture, vec2<u32>(SUV), 0);
                    var SVNormal:vec3f = textureLoad(posTexture, vec2<u32>(SUV), 0).xyz * 2.0 - 1.0;
                    var SWeight = max(0.0001,float(dot(Normal,SVPos-VPPos)<0.01))*
                                    max(0.01,float(dot(Normal,normalize(SVNormal))>0.9));
                    NewPixel += texture(iChannel1,SUV*IRES) * SWeight;
                    NewWeight += SWeight;
                }
            }
            NewPixel /= NewWeight;
        }
    }

`
);

let FrustumCulling_cs = (
  /*wgsl*/
  `
#include "GlobalUniform"

struct RenderBound{
    index:f32,
}

struct Uniforms {
    matrix : array<mat4x4<f32>>
};

//@group(0) @binding(0) var<uniform> globalUniform: GlobalUniform;
@group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(2) var<storage, read> planes: array<vec4<f32>,7>;
@group(0) @binding(3) var<storage, read> cullingList: array<RenderBound>;
@group(0) @binding(4) var<storage,read_write> outBuffer: array<f32>;


var<private> boundPoints : array<vec4<f32>,8> ;   

fn IsInClipSpace( coord : vec4<f32> ) -> bool {
    return -coord.w <= coord.x && coord.x <= coord.w
        && -coord.w <= coord.y && coord.y <= coord.w
        && -coord.w <= coord.z && coord.z <= coord.w;
}

fn IsOutsideThePlane( plane: vec4<f32>, pointPosition : vec3<f32> ) -> bool{
    if(dot(plane.xyz, pointPosition) + plane.w > 0.0){
        return true;
    }
    return false;
}

fn containsBox( size:vec3<f32> , center:vec3<f32> ) -> f32 {
    var c = 0.0 ;
    var d = 0.0 ;

    var r = max(size.x, size.y);
    var sr = max(r , size.z);
    var scx = center.x;
    var scy = center.y;
    var scz = center.z;

    for(var p:i32 = 0; p < 6 ; p = p + 1 ){
        var plane = planes[p];
        d = plane.x * scx + plane.y * scy + plane.z * scz + plane.w;
        if (d <= -sr) {
        return 0.0;
        }
        if (d > sr) {
        c+=1.0;
        }
    }

    if( c >= 6.0 ){
        return 2.0 ;
    }else{
        return 1.0 ;
    }
}

@compute @workgroup_size( 128 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
    let id = globalInvocation_id.x ;
    if(id + 1u > u32(planes[6].x) ){
        outBuffer[id] = f32(0.0); 
        return ;
    }

    let renderBound = cullingList[id];
    let boundID = i32(renderBound.index) ;
    var plane = planes[0];

    let worldMatrix = models.matrix[boundID];
    let projMat = globalUniform.projMat ;

    let const_boundMin : vec3<f32> = vec3<f32>(-0.5,-0.5,-0.5) ;   
    let const_boundMax : vec3<f32> = vec3<f32>(0.5,0.5,0.5) ;   

    let boundMin = worldMatrix * vec4<f32>(const_boundMin, 1.0);
    let boundMax = worldMatrix * vec4<f32>(const_boundMax, 1.0);

    let size = abs( boundMax.xyz - boundMin.xyz ) * 0.65 ;
    let center = worldMatrix[3].xyz ;

    var isIn :f32 = 0.0 ;

    isIn = containsBox(size,center);

    outBuffer[id] = f32(isIn); 
}
`
);

let ZPassShader_cs = (
  /*wgsl*/
  `
    @group(0) @binding(0) var<storage,read_write> visibleBuffer: array<f32>;
    @group(0) @binding(1) var zBufferTexture : texture_2d<f32>;

    @compute @workgroup_size(8, 8, 1)
    fn CsMain( @builtin(global_invocation_id) globalInvocation_id : vec3<u32> ) {
        var fragCoord = vec2<i32>( globalInvocation_id.xy );
        let md = textureLoad(zBufferTexture,fragCoord,0);

        let meshID = i32(floor( md.w + 0.1 ));
        if (meshID >= 0) {
            visibleBuffer[meshID] = 1.0 ;
        }
    }
`
);

let ColorPassFragmentOutput = (
  /*wgsl*/
  `
    struct FragmentOutput {
        @location(auto) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(auto) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(auto) worldNormal: vec4<f32>,
            @location(auto) material: vec4<f32>,
        #endif

        #if USE_OUTDEPTH
            @builtin(frag_depth) out_depth: f32
        #endif
    };
`
);

let Sky_glsl_vs = `
#version 450
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
layout(location = 2) in vec2 uv;

layout(location = 0) out vec2 fragUV;
layout(location = 1) out vec4 vWorldPos;
layout(location = 2) out vec3 vWorldNormal;

layout(set = 0, binding = 0) 
uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
};

layout(set = 1, binding = 0) 
buffer Uniforms {
    mat4[] modeMat;
};

 mat4 inverse( in mat4 m ){
    return mat4(
        m[0][0], m[1][0], m[2][0], 0.0,
        m[0][1], m[1][1], m[2][1], 0.0,
        m[0][2], m[1][2], m[2][2], 0.0,
        -dot(m[0].xyz,m[3].xyz),
        -dot(m[1].xyz,m[3].xyz),
        -dot(m[2].xyz,m[3].xyz),
        1.0 );
}

void main(){
    fragUV = uv;
    mat4 modelMat = modeMat[gl_InstanceID]; 
    mat4 vm = viewMat * modelMat;
	mat3 normalMatrix = mat3(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	vec3 eNormal = normalize( normalMatrix * normal );
    
    vWorldPos = modelMat * vec4(position.xyz,1.0) ;

    mat4 fixedViewMat = viewMat ;
    fixedViewMat[3] = vec4(0.0,0.0,-8.0,1.0);
    vec4 mvPosition = modelMat * vec4( position.xyz, 1.0 );
    gl_Position = projMat * fixedViewMat * mvPosition;
}

`;
let Sky_glsl_fs = `
#version 450

layout(location = 0) in vec2 fragUV;
layout(location = 1) in vec4 vWorldPos;
layout(location = 2) in vec3 vWorldNormal;

layout(location = 0) out vec4 o_Target;

layout(set = 2, binding = 0) 
uniform sampler baseMapSampler;
layout(set = 2, binding = 1) 
uniform texture2D baseMap;

layout(set = 3, binding = 0) uniform uniformData {
    vec3 eyesPos;
    float exposure;
    float roughness;
};

vec3 LinearToGammaSpace(in vec3 linRGB)
{
    vec3 _linRGB = vec3(linRGB) ;
    _linRGB = max(linRGB, vec3(0.0, 0.0, 0.0));
    _linRGB.r = pow(linRGB.r,0.416666667);
    _linRGB.g = pow(linRGB.g,0.416666667);
    _linRGB.b = pow(linRGB.b,0.416666667);
    return max(1.055 * _linRGB - 0.055, vec3(0.0));
}

void main(){
    int maxMipLevel = textureQueryLevels(baseMap, fragUV).x ;
    vec4 textureColor = textureCubeLod( sampler2D(baseMap, baseMapSampler), normalize(vWorldPos.xyz), roughness * float(maxMipLevel) ) ;
    o_Target = vec4(LinearToGammaSpace(textureColor.rgb),1.0) * exposure ;
}

`;

let LUT_glsl = `
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix ;
    mat4 pvMatrixInv ;
    float frame;
    float time;
    float detail;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;
    float intensity;
};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;

layout(set = 2, binding = 2) uniform sampler lutMapSample;
layout(set = 2, binding = 3) uniform texture2D lutMap;

layout(set = 3, binding = 0) uniform UniformData{
    float intensity ;
};

void main() {
    vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
    vec4 col = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale);
    // vec3 col = vec3(pow(base.xyz,vec3(1.0/2.2)));

    float Bcolor = col.b * 63.0;
	vec2 quad1;
    quad1.y = floor(floor(Bcolor) / 8.0);
    quad1.x = floor(Bcolor) - (quad1.y * 8.0);

    vec2 quad2;
    quad2.y = floor(ceil(Bcolor) / 8.0);
    quad2.x = ceil(Bcolor) - (quad2.y * 8.0);

    const float tmp = (0.125-(0.5/512.0)) ;
    const float tmp2 = 0.5/512.0 ;

    vec2 uv1;
    vec2 uv2;
	uv1.x = ((quad1.x)*0.125)+ tmp2 + (tmp* col.r);
	uv1.y = (((quad1.y)*0.125) + tmp2 + (tmp* col.g));

	uv2.x = ((quad2.x)*0.125)+ tmp2 + (tmp* col.r);
	uv2.y = (((quad2.y)*0.125)+ tmp2 + (tmp* col.g));

    vec4 color1 = texture(sampler2D(lutMap, lutMapSample), uv1);
    vec4 color2 = texture(sampler2D(lutMap, lutMapSample), uv2);

    vec4 newColor = mix(color1, color2, fract(Bcolor));
    // vec3 outC = pow(newColor.xyz,vec3(2.2));

    o_Target = vec4(newColor.rgb, col.a );
    // o_Target = vec4(1.0);
}
`;

let ColorLitShader = (
  /*wgsl*/
  `
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }

        fn frag(){
            ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
            ORI_ShadingInput.Roughness = materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = 1.0 ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

            useShadow();

            BxDFShading();
        }
    `
);

let GIProbeShader = (
  /*wgsl*/
  `
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "Irradiance_frag"
    #include "MathShader"
    
    struct MaterialUniform {
      probeUniform:vec4<f32>,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    var<private> probeID: i32 ;
    var<private> debugType: i32 ;
    
    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        probeID = i32(materialUniform.probeUniform.x);
        debugType = i32(materialUniform.probeUniform.y);
        if(debugType == 0){
            ORI_ShadingInput.BaseColor = debugProbe(probeID);
        }else if(debugType == 1){
            ORI_ShadingInput.BaseColor = getIrradiance();
        }else if(debugType == 2){
            ORI_ShadingInput.BaseColor = debugProbeDepth(probeID);
        }
        UnLit();
    }
    `
);

let GlassShader = (
  /*wgsl*/
  `
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    // @group(1) @binding(auto)
    // var noes_MapSampler: sampler;
    // @group(1) @binding(auto)
    // var noes_Map: texture_2d<f32>;

    @group(1) @binding(auto)
    var splitTexture_MapSampler: sampler;
    @group(1) @binding(auto)
    var splitTexture_Map: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var screenUV = ORI_VertexVarying.fragPosition.xy / ORI_VertexVarying.fragPosition.w;
        screenUV = (screenUV.xy + 1.0) * 0.5;
        screenUV.y = 1.0 - screenUV.y;

        screenUV.x = clamp(sin(screenUV.x * 1.0),0.0,1.0) ;
        screenUV.y = clamp(sin(screenUV.y * 1.0),0.0,1.0) ;
        // screenUV.y = cos(ORI_VertexVarying.fragPosition.y/7.15);

        let frameMap = textureSample(splitTexture_Map,splitTexture_MapSampler,screenUV);
        // let noesMap = textureSample(noes_Map,noes_MapSampler,screenUV);

        ORI_ShadingInput.BaseColor = vec4<f32>( frameMap.rgb , 1.0) ;
        UnLit();
    }
`
);

let OutlinePass = (
  /*wgsl*/
  `
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;


    struct MaterialUniform {
        baseColor:vec4<f32>,
        lineWeight:f32
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    fn vert(vertex:VertexAttributes) -> VertexOutput {
        var vertexPosition = vertex.position;
        var vertexNormal = vertex.normal;

                #if USE_MORPHTARGETS
                    vertexPosition = vertexPosition * morphTargetData.morphBaseInfluence + vertex.a_morphPositions_0 * morphTargetData.morphInfluence0;
                    #if USE_MORPHNORMALS
                        vertexNormal = vertexNormal * morphTargetData.morphBaseInfluence + vertex.a_morphNormals_0 * morphTargetData.morphInfluence0;
                    #endif
                #endif

                #if USE_SKELETON
                    #if USE_JOINT_VEC8
                        let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
                        ORI_MATRIX_M *= skeletonNormal ;
                        // vertexNormal = vec4<f32>(vec4<f32>(vertexNormal,0.0) * skeletonNormal).xyz; 
                    #else
                        let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
                        ORI_MATRIX_M *= skeletonNormal ;
                        // vertexNormal = vec4<f32>(vec4<f32>(vertexNormal,0.0) * skeletonNormal).xyz; 
                    #endif
                #endif


                #if USE_TANGENT
                    ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
                #endif

                ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));

                let worldNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;

                vertexPosition = vertexPosition + worldNormal * materialUniform.lineWeight ;

                var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
                var viewPosition = ORI_MATRIX_V * worldPos;
                var clipPosition = ORI_MATRIX_P * viewPosition ;

                ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
                ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
                ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
                ORI_VertexOut.varying_Clip = clipPosition ;
                ORI_VertexOut.varying_WPos = worldPos ;
                ORI_VertexOut.varying_WPos.w = f32(vertex.index);
                ORI_VertexOut.varying_WNormal = worldNormal ;
                ORI_VertexOut.member = clipPosition ;


        return ORI_VertexOut ;
    }

    fn frag(){
        let color = textureSample(baseMap,baseMapSampler,ORI_VertexVarying.fragUV0) ;
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = 0.5  ;
        ORI_ShadingInput.Metallic = 0.5 ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = 1.0 ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);
        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;
        UnLit();
    }
`
);

let PavementShader = (
  /*wgsl*/
  `
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        @group(1) @binding(auto)
        var rtColorTex: texture_2d<f32>;

        @group(1) @binding(auto)
        var baseMapSampler: sampler;
        @group(1) @binding(auto)
        var baseMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var normalMapSampler: sampler;
        @group(1) @binding(auto)
        var normalMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var displaceMapSampler: sampler;
        @group(1) @binding(auto)
        var displaceMap: texture_2d<f32>;

        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
 
        @group(1) @binding(auto)
        var reflectMapSampler: sampler;
        @group(1) @binding(auto)
        var reflectMap: texture_2d<f32>;

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            // let displaceDimensions = textureDimensions(displaceMap) ;
            // let displace = textureGather(0,displaceMap,displaceMapSampler,inputData.uv) ;
            // ORI_VertexOut.member.y += displace.r * 10.0;
            return ORI_VertexOut ;
        }

        fn frag(){
            var screenUV = ORI_VertexVarying.fragPosition.xy / ORI_VertexVarying.fragPosition.w;
            screenUV = (screenUV.xy + 1.0) * 0.5;
            screenUV.y = 1.0 - screenUV.y;

            let FrameMap = textureSample(rtColorTex,baseMapSampler,screenUV);

            let Albedo = textureSample(baseMap,baseMapSampler,ORI_VertexVarying.fragUV0);
            var Normal = textureSample(normalMap,normalMapSampler,ORI_VertexVarying.fragUV0).rgb ;
            Normal.y = 1.0 - Normal.y ;
            let Displace = textureSample(displaceMap,displaceMapSampler,ORI_VertexVarying.fragUV0).rgb ;
            let Ao = textureSample(aoMap,aoMapSampler,ORI_VertexVarying.fragUV0).r ;
            let ReflectMap = 1.0 - textureSample(reflectMap,reflectMapSampler,ORI_VertexVarying.fragUV0).r ;

            ORI_ShadingInput.BaseColor = FrameMap * materialUniform.baseColor * vec4<f32>(LinearToGammaSpace(Albedo.rgb),1.0);
            ORI_ShadingInput.Roughness = ReflectMap * materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = Ao;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            let normal = unPackRGNormal(Normal,Displace.r*materialUniform.normalScale,1.0) ;
            ORI_ShadingInput.Normal = normal ;

            BxDFShading();
        }
    `
);

let PointShadowDebug = (
  /*wgsl*/
  `
        #include "Common_vert"
        #include "Common_frag"
        #include "UnLit_frag"

        @group(1) @binding(auto) var pointShadowMapSampler: sampler;
        @group(1) @binding(auto) var pointShadowMap: texture_depth_cube ;

        struct MaterialUniform {
            center: vec3<f32>,
        };
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }
 
        fn frag(){

            var center = materialUniform.center ; 

            var dir = normalize(ORI_VertexVarying.vWorldPos.xyz - center) ;
            var depth = textureSample(pointShadowMap,pointShadowMapSampler,dir.xyz) ;
            depth = depth * globalUniform.far ;

            ORI_ShadingInput.BaseColor = vec4<f32>(depth*255.0,0.0,0.0,1.0)  ;
            UnLit();
        }
    `
);

let MaterialUniform = (
  /*wgsl*/
  `
    struct MaterialUniform{
       #if USE_BRDF
        #include "PhysicMaterialUniform_frag"
       #endif

       #if USE_ColorLit
       #endif

       #if USE_UnLit
       #endif
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;
`
);

let GlobalFog_shader = (
  /* wgsl */
  `
    var<private> PI: f32 = 3.14159265359;
    #include "GlobalUniform"
    #include "GBufferStand" 
    
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    struct FogUniformData {
        fogColor : vec4<f32>,
        
        fogType : f32 ,
        fogHeightScale : f32 , 
        start: f32,
        end: f32,

        density : f32 ,
        ins : f32 ,
        falloff : f32 ,
        rayLength : f32 ,

        scatteringExponent : f32 ,
        dirHeightLine : f32 ,
        skyFactor: f32,
        skyRoughness: f32,

        overrideSkyFactor: f32,
        isSkyHDR: f32,
        slot0: f32,
        slot1: f32,
    };


    @group(0) @binding(2) var<uniform> fogUniform: FogUniformData;
    @group(0) @binding(3) var<storage,read> lightBuffer: array<LightData>;
    @group(0) @binding(4) var inTex: texture_2d<f32>;
    @group(0) @binding(5) var prefilterMap: texture_cube<f32>;
    @group(0) @binding(6) var prefilterMapSampler: sampler;
    @group(0) @binding(7) var outTex : texture_storage_2d<rgba16float, write>;

    var<private> texSize: vec2<u32>;
    var<private> fragCoord: vec2<i32>;
    var<private> fragUV: vec2<f32>;

    var<private> texPosition: vec4<f32>;
    var<private> texNormal: vec4<f32>;
    var<private> texColor: vec4<f32>;

    fn getGroundWithSkyColor(worldPosition:vec3<f32>, skyRoughness:f32, isHDRTexture:bool) -> vec3<f32>
    {
        let rayDirection = normalize(vec3<f32>(worldPosition.xyz - globalUniform.CameraPos.xyz));
        let calcRoughness = clamp(skyRoughness, 0.0, 1.0);
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        var prefilterColor = textureSampleLevel(prefilterMap, prefilterMapSampler, rayDirection, calcRoughness * MAX_REFLECTION_LOD);
        if(isHDRTexture){
            prefilterColor = vec4<f32>(LinearToGammaSpace(vec3<f32>(prefilterColor.xyz)), prefilterColor.w);
        }
        return prefilterColor.xyz * globalUniform.skyExposure;
    }

    fn getSkyBluredColor(skyRoughness:f32, isHDRTexture:bool) -> vec3<f32>
    {
        var worldPosition = vec4f(getSkyPositionFromGBuffer(fragUV), 1.0);
        let rayDirection = normalize(vec3<f32>(worldPosition.xyz - globalUniform.CameraPos.xyz));
        let calcRoughness = clamp(skyRoughness, 0.0, 1.0);
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        var prefilterColor = textureSampleLevel(prefilterMap, prefilterMapSampler, rayDirection, calcRoughness * MAX_REFLECTION_LOD);
        if(isHDRTexture){
            prefilterColor = vec4<f32>(LinearToGammaSpace(vec3<f32>(prefilterColor.xyz)), prefilterColor.w);
        }
        return prefilterColor.xyz * globalUniform.skyExposure;
    }

    @compute @workgroup_size( 8 , 8 , 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
        fragCoord = vec2<i32>( globalInvocation_id.xy );
        texSize = textureDimensions(inTex).xy;
        if(fragCoord.x >= i32(texSize.x) || fragCoord.y >= i32(texSize.y)){
            return;
        }

        fragUV = vec2<f32>(fragCoord) / vec2<f32>(texSize - 1);

        var gBuffer = getGBuffer( fragCoord ) ;
        texNormal = vec4f(getWorldNormalFromGBuffer(gBuffer),1.0); 
        texPosition =  vec4f(getWorldPositionFromGBuffer(gBuffer,fragUV), 1.0);
        texColor = textureLoad(inTex, fragCoord, 0);
    
        var opColor = vec3<f32>(0.0);
        if(getRoughnessFromGBuffer(gBuffer) <= 0.0){
            //for sky
            if(fogUniform.overrideSkyFactor > 0.01){
                opColor = blendSkyColor();
            }else{
                opColor = texColor.xyz;
            }
        }else{
            //for ground
            var fogFactor = calcFogFactor();
            if(fogUniform.skyFactor > 0.01 || fogUniform.overrideSkyFactor > 0.01){
                opColor = blendGroundColor(fogFactor);
            }else{
            }
            
            opColor = mix(texColor.rgb, fogUniform.fogColor.xyz, fogFactor);
            let sunLight = lightBuffer[0] ;
            var inScatteringValue = inScatterIng(sunLight.direction, texPosition.xyz, sunLight.lightColor);
            opColor += inScatteringValue;
        }

        textureStore(outTex, fragCoord , vec4<f32>(opColor.xyz, texColor.a));
    }

    fn calcFogFactor() -> f32 
    {
        var cameraPos = globalUniform.cameraWorldMatrix[3].xyz  ;
        let dis = distance(cameraPos, texPosition.xyz);
        var heightFactor = computeFog(dis) + cFog(-texPosition.y);
        return clamp(fogUniform.ins * heightFactor,0.0,1.0);
    }

        
    fn blendGroundColor(fogFactor:f32) -> vec3<f32>
    {
        var skyColorBlur = getGroundWithSkyColor(texPosition.xyz, fogUniform.skyRoughness, fogUniform.isSkyHDR > 0.5);
        let skyFactor = clamp(fogUniform.skyFactor - fogUniform.overrideSkyFactor * 0.5, 0.0, 1.0);
        var fogColor = mix(fogUniform.fogColor.xyz, skyColorBlur, skyFactor);
        return mix(texColor.rgb, fogColor.rgb, fogFactor);
    }

    fn blendSkyColor() -> vec3<f32>
    {
        let overrideSkyFactor = sqrt(fogUniform.overrideSkyFactor);
        var skyColorBlur = getSkyBluredColor(overrideSkyFactor * 0.3, fogUniform.isSkyHDR > 0.5);
        return mix(fogUniform.fogColor.xyz, skyColorBlur, 1.0 - overrideSkyFactor);
    }


    fn computeFog(z:f32) -> f32 
    {
        var fog = 0.0;
        if( fogUniform.fogType < 0.5 ){
            fog = (fogUniform.end - z) / (fogUniform.end - fogUniform.start);
        }else if(fogUniform.fogType < 1.5 ){
            fog = exp2(-fogUniform.density * z);
        }else if(fogUniform.fogType == 2.5 ){
            fog = fogUniform.density * z;
            fog = exp2(-fog * fog);
        }
        return max(fog,0.0);
    }

    fn cFog(y:f32) -> f32 
    {
        let fogDensity = fogUniform.density * exp(fogUniform.fogHeightScale * y);
        let fogFactor = (1.0 - exp2(-fogUniform.falloff)) / fogUniform.falloff ;
        let fog = fogDensity * fogFactor * max(fogUniform.rayLength - fogUniform.start, 0.0); 
        return max(fog,0.0);
    }

    fn inScatterIng(sunDir:vec3<f32>, worldPos:vec3<f32>, sunColor:vec3<f32>) -> vec3<f32> 
    {
        let viewDir = normalize(globalUniform.CameraPos.xyz - worldPos.xyz) ;
        let VoL = saturate(dot(viewDir,sunDir)) ;
        var scatter = pow(VoL,fogUniform.scatteringExponent);
        scatter *= (1.0-saturate(exp2(-fogUniform.dirHeightLine)));
        return vec3<f32>(scatter*sunColor);
    }

`
);

var ColliderShapeType = /* @__PURE__ */ ((ColliderShapeType2) => {
  ColliderShapeType2[ColliderShapeType2["None"] = 0] = "None";
  ColliderShapeType2[ColliderShapeType2["Box"] = 1] = "Box";
  ColliderShapeType2[ColliderShapeType2["Capsule"] = 2] = "Capsule";
  ColliderShapeType2[ColliderShapeType2["Sphere"] = 3] = "Sphere";
  ColliderShapeType2[ColliderShapeType2["Mesh"] = 4] = "Mesh";
  return ColliderShapeType2;
})(ColliderShapeType || {});
class ColliderShape {
  _center;
  _size;
  _halfSize;
  _shapeType = 0 /* None */;
  static v3_help_0;
  static helpMatrix;
  static helpRay;
  constructor() {
    ColliderShape.v3_help_0 ||= new Vector3();
    ColliderShape.helpMatrix ||= new Matrix4();
    ColliderShape.helpRay ||= new Ray();
    this._center = new Vector3();
    this._size = new Vector3();
    this._halfSize = new Vector3();
  }
  get shapeType() {
    return this._shapeType;
  }
  /**
   * Set the position and size of collision objects
   * @param ct The position of the collision object in the local space of the object.
   * @param sz The size of the collision body in the X, Y, and Z directions.
   * @returns
   */
  setFromCenterAndSize(ct, sz) {
    ct && this._center.copy(ct);
    sz && this._size.copy(sz);
    return this;
  }
  /**
   * The position of the collision object in the local space of the object.
   */
  get center() {
    return this._center;
  }
  set center(value) {
    this._center.copy(value);
  }
  /**
   *
   * The size of the collision body in the X, Y, and Z directions.
   * @returns Vector3
   */
  get size() {
    return this._size;
  }
  set size(value) {
    this._size.copy(value);
    this._halfSize.copy(value).multiplyScalar(0.5);
  }
  /**
   * Half the size of the collision body.
   */
  get halfSize() {
    return this._halfSize;
  }
  /**
   * Ray pickup.Emit a ray from a designated location to detect objects colliding with the ray.
   * @param ray emit ray
   * @param fromMatrix matrix
   * @returns Pick result intersect: whether to collide;
   *  IntersectPoint: collision point;
   *  Distance: The distance from the origin of the ray to the collision point.
   */
  rayPick(ray, fromMatrix) {
    return null;
  }
}

class BoxColliderShape extends ColliderShape {
  _pickRet;
  box;
  /**
   * @constructor
   */
  constructor() {
    super();
    this._shapeType = ColliderShapeType.Box;
    this.box = new BoundingBox(new Vector3(), new Vector3());
  }
  /**
   * @internal
   * @param ray 
   * @param fromMatrix 
   * @returns 
   */
  rayPick(ray, fromMatrix) {
    let box = this.box;
    box.setFromCenterAndSize(this.center, this.size);
    let helpMatrix = ColliderShape.helpMatrix;
    helpMatrix.copyFrom(fromMatrix).invert();
    let helpRay = ColliderShape.helpRay.copy(ray);
    helpRay.applyMatrix(helpMatrix);
    let pick = helpRay.intersectBox(this.box, ColliderShape.v3_help_0);
    if (pick) {
      if (!this._pickRet) {
        this._pickRet = { intersectPoint: new Vector3(), distance: 0 };
      }
      this._pickRet.intersectPoint = pick;
      this._pickRet.distance = Vector3.distance(helpRay.origin, ColliderShape.v3_help_0);
      return this._pickRet;
    }
    return null;
  }
}

class ColliderComponent extends ComponentBase {
  _shape;
  constructor() {
    super();
    this._shape = new BoxColliderShape();
  }
  /**
   * @internal
   */
  start() {
    if (Engine3D.setting.pick.mode == `pixel`) {
      this.transform.scene3D.view.pickFire.mouseEnableMap.set(this.transform.worldMatrix.index, this);
    }
  }
  onEnable(view) {
    ComponentCollect.bindEnablePick(view, this, null);
  }
  onDisable(view) {
    ComponentCollect.unBindEnablePick(view, this);
  }
  /**
   * Returns the shape of collider
   */
  get shape() {
    return this._shape;
  }
  /**
   * Set the shape of collider
   */
  set shape(value) {
    this._shape = value;
  }
  /**
   * @internal
   * @param ray
   * @returns
   */
  rayPick(ray) {
    if (this._enable) {
      return this._shape.rayPick(ray, this.transform.worldMatrix);
    }
    return null;
  }
  beforeDestroy(force) {
    if (Engine3D.setting.pick.mode == `pixel`) {
      this.transform.scene3D.view.pickFire.mouseEnableMap.delete(this.transform.worldMatrix.index);
    }
    super.beforeDestroy(force);
  }
}

class AttributeAnimCurve extends AnimationCurve {
  attribute = "";
  propertyList;
  path;
  constructor() {
    super();
  }
  unSerialized(data) {
    this.attribute = data.attribute;
    this.path = data.path;
    this.propertyList = this.attribute.split(".");
    super.unSerialized(data.curve);
    return this;
  }
}

class ObjectAnimClip {
  curve = {};
}
var WrapMode = /* @__PURE__ */ ((WrapMode2) => {
  WrapMode2[WrapMode2["Default"] = 0] = "Default";
  WrapMode2[WrapMode2["Clamp"] = 1] = "Clamp";
  WrapMode2[WrapMode2["Once"] = 1] = "Once";
  WrapMode2[WrapMode2["Loop"] = 2] = "Loop";
  WrapMode2[WrapMode2["PingPong"] = 4] = "PingPong";
  WrapMode2[WrapMode2["ClampForever"] = 8] = "ClampForever";
  return WrapMode2;
})(WrapMode || {});
class PropertyAnimClip {
  name;
  objAnimClip;
  totalTime = 0;
  time = 0;
  // private _startTime: number = 0;
  _stopTime = 0;
  _loopTime;
  _wrapMode;
  _sampleRate;
  get wrapMode() {
    if (!this._wrapMode) this._wrapMode = 0 /* Default */;
    return this._wrapMode;
  }
  set wrapMode(value) {
    this._wrapMode = value;
  }
  parse(jsonData) {
    this.objAnimClip = {};
    let clip = jsonData["AnimationClip"];
    let { m_Name, m_AnimationClipSettings, m_WrapMode, m_SampleRate } = clip;
    this.name = m_Name;
    this._wrapMode = m_WrapMode;
    this._sampleRate = m_SampleRate;
    this._loopTime = m_AnimationClipSettings.m_LoopTime;
    let editorCurves = clip.m_EditorCurves;
    for (const key in editorCurves) {
      if (Object.prototype.hasOwnProperty.call(editorCurves, key)) {
        const curve = editorCurves[key];
        let attribute = curve.attribute;
        let attributeAnimCurve = new AttributeAnimCurve();
        attributeAnimCurve.unSerialized(curve);
        this.totalTime = Math.max(this.totalTime, attributeAnimCurve.totalTime);
        let objClip = this.objAnimClip[curve.path];
        if (!objClip) {
          objClip = new ObjectAnimClip();
          this.objAnimClip[curve.path] = objClip;
        }
        objClip.curve[attribute] = attributeAnimCurve;
      }
    }
  }
}

class PropertyAnimTag {
  transform;
  quaternion;
  materialColor;
}
class PropertyHelp {
  static Property = {
    "m_LocalPosition.x": "localPosition.x",
    "m_LocalPosition.y": "localPosition.y",
    "m_LocalPosition.z": "localPosition.z",
    "m_LocalRotation.x": "localQuaternion.x",
    "m_LocalRotation.y": "localQuaternion.y",
    "m_LocalRotation.z": "localQuaternion.z",
    "m_LocalRotation.w": "localQuaternion.w",
    "localEulerAnglesRaw.x": "localRotation.x",
    "localEulerAnglesRaw.y": "localRotation.y",
    "localEulerAnglesRaw.z": "localRotation.z",
    "m_LocalEulerAngles.x": "localRotation.x",
    "m_LocalEulerAngles.y": "localRotation.y",
    "m_LocalEulerAngles.z": "localRotation.z",
    "m_LocalScale.x": "localScale.x",
    "m_LocalScale.y": "localScale.y",
    "m_LocalScale.z": "localScale.z",
    "m_Color.r": "materialColor.r",
    "m_Color.g": "materialColor.g",
    "m_Color.b": "materialColor.b",
    "m_Color.a": "materialColor.a",
    "material._Color.r": "materialColor.r",
    "material._Color.g": "materialColor.g",
    "material._Color.b": "materialColor.b",
    "material._Color.a": "materialColor.a",
    "material._UnlitColor.r": "materialColor.r",
    "material._UnlitColor.g": "materialColor.g",
    "material._UnlitColor.b": "materialColor.b",
    "material._UnlitColor.a": "materialColor.a",
    "field of view": "camera3D.fov",
    m_IsActive: "active",
    m_Sprite: "sprite",
    m_FlipX: "flipX",
    m_FlipY: "flipY"
  };
  static Scale = {
    "m_LocalPosition.x": 1,
    "m_LocalPosition.y": 1,
    "m_LocalPosition.z": -1,
    "localEulerAnglesRaw.x": -1,
    //Deg2Rad(1),
    "localEulerAnglesRaw.y": 1,
    //Deg2Rad(1),
    "localEulerAnglesRaw.z": 1,
    //Deg2Rad(1),
    "m_LocalEulerAngles.x": -1,
    //Deg2Rad(1),
    "m_LocalEulerAngles.y": 1,
    //Deg2Rad(1),
    "m_LocalEulerAngles.z": 1,
    //Deg2Rad(1),
    "m_LocalRotation.x": 1,
    //Rad2Deg(1),
    "m_LocalRotation.y": 1,
    //Rad2Deg(1),
    "m_LocalRotation.z": -1,
    //Rad2Deg(1),
    "m_LocalRotation.w": -1,
    //Rad2Deg(1),
    "field of view": 1,
    m_IsActive: 1,
    m_Sprite: 1
  };
  static updatePropertyTag(tag, attribute) {
    tag.quaternion ||= this.tag_quaternion[attribute];
    tag.transform ||= this.tag_transform[attribute];
    tag.materialColor ||= this.tag_materialColor[attribute];
  }
  static tag_quaternion = {
    "m_LocalRotation.x": true,
    "m_LocalRotation.y": true,
    "m_LocalRotation.z": true,
    "m_LocalRotation.w": true
  };
  static tag_materialColor = {
    "material._Color.r": true,
    "material._Color.g": true,
    "material._Color.b": true,
    "material._Color.a": true,
    "material._UnlitColor.r": true,
    "material._UnlitColor.g": true,
    "material._UnlitColor.b": true,
    "material._UnlitColor.a": true
  };
  static tag_transform = {
    "m_LocalPosition.x": true,
    "m_LocalPosition.y": true,
    "m_LocalPosition.z": true,
    "m_LocalRotation.x": true,
    "m_LocalRotation.y": true,
    "m_LocalRotation.z": true,
    "m_LocalRotation.w": true,
    "localEulerAnglesRaw.x": true,
    "localEulerAnglesRaw.y": true,
    "localEulerAnglesRaw.z": true,
    "m_LocalEulerAngles.x": true,
    "m_LocalEulerAngles.y": true,
    "m_LocalEulerAngles.z": true,
    "m_LocalScale.x": true,
    "m_LocalScale.y": true,
    "m_LocalScale.z": true
  };
}

class AnimationMonitor {
  static Complete = 0;
  static Seek = 1;
  _rootObject3D;
  _animation;
  _propertyCache;
  _currentClip;
  _frame = 0;
  _time = 0;
  _isPlaying = true;
  speed = 1;
  _propertyTagDic;
  constructor(animation) {
    this._rootObject3D = animation.object3D;
    this._animation = animation;
    this._propertyTagDic = /* @__PURE__ */ new Map();
    this.reset();
  }
  reset() {
    this._propertyCache = {};
    this._propertyTagDic.clear();
  }
  get time() {
    return this._time;
  }
  get currentClip() {
    return this._currentClip;
  }
  play(clip, reset = true) {
    this._isPlaying = true;
    if (reset) {
      this._time = 0;
    }
    if (clip != this._currentClip) {
      if (clip) {
        this.parseAnimClip(clip);
      }
    }
    this._currentClip = clip;
    this.validProperty();
  }
  parseAnimClip(clip) {
    this.reset();
    for (const objPath in clip.objAnimClip) {
      let objClip = clip.objAnimClip[objPath];
      let bindObject3D = this._rootObject3D;
      let attsCache = {};
      if (objPath == "") {
        bindObject3D = this._rootObject3D;
      } else {
        bindObject3D = this._rootObject3D.getObjectByName(objPath);
      }
      if (!bindObject3D)
        continue;
      let tag = new PropertyAnimTag();
      this._propertyTagDic.set(bindObject3D, tag);
      let curve = objClip.curve;
      for (const attribute in curve) {
        PropertyHelp.updatePropertyTag(tag, attribute);
        let binder = this._propertyCache[objPath] ||= {};
        let atts = PropertyHelp.Property[attribute].split(".");
        let atts_0 = atts[0];
        if (atts.length > 1) {
          let value = attsCache[atts_0];
          if (!value) {
            value = attsCache[atts_0] = bindObject3D[atts_0];
          }
          binder[attribute] = { value, property: atts[1] };
        } else {
          binder[attribute] = { value: bindObject3D, property: atts[0] };
        }
      }
    }
    return this;
  }
  stop() {
    this._isPlaying = false;
    return this;
  }
  toggle() {
    this._isPlaying = !this._isPlaying;
    return this;
  }
  get isPlaying() {
    return this._isPlaying;
  }
  update(time, delta) {
    time = time * 1e-3;
    delta = delta * 1e-3;
    if (!this._currentClip || this._frame == time) return;
    if (!this._isPlaying) return;
    this._frame = time;
    let lastTime = this._time;
    this._time = this.calcTime(lastTime + delta * this.speed);
    this.validProperty();
    if (this._currentClip.wrapMode != WrapMode.Loop && this._currentClip.wrapMode != WrapMode.Default) {
      let complete = this.speed > 0 ? this._time >= this._currentClip.totalTime : this._time <= 0;
      if (complete) {
        this._isPlaying = false;
        this._animation["statusCall"](AnimationMonitor.Complete, lastTime, this._time);
      }
    }
    this._animation["statusCall"](AnimationMonitor.Seek, lastTime, this._time);
  }
  seek(time) {
    this._time = this.calcTime(time);
    this._rootObject3D && this.validProperty();
    return this;
  }
  calcTime(time) {
    if (this._currentClip.wrapMode == WrapMode.Loop || this._currentClip.wrapMode == WrapMode.Default) {
      time = repeat(time, this._currentClip.totalTime);
    } else {
      time = clamp(time, 0, this._currentClip.totalTime);
    }
    return time;
  }
  validProperty() {
    for (const objName in this._currentClip.objAnimClip) {
      let objClip = this._currentClip.objAnimClip[objName];
      let curve = objClip.curve;
      for (const attribute in curve) {
        const attributeAnim = curve[attribute];
        let target = this._propertyCache[objName][attribute];
        let ret = attributeAnim.getValue(this._time);
        if (attribute in PropertyHelp.Scale) {
          ret *= PropertyHelp.Scale[attribute];
        }
        target.value[target.property] = ret;
      }
    }
    this._propertyTagDic.forEach((v, k) => {
      this.applyProperty(v, k);
    });
  }
  applyProperty(tag, obj3d) {
    if (tag.quaternion) {
      Matrix4.getEuler(obj3d.transform.localRotation, obj3d.transform.localRotQuat, true, "ZYX");
    }
    if (tag.transform) {
      obj3d.transform.localPosition = obj3d.transform.localPosition;
      obj3d.transform.localRotation = obj3d.transform.localRotation;
      obj3d.transform.localScale = obj3d.transform.localScale;
    }
    let animObj = obj3d;
    if (tag.materialColor) {
      animObj.notifyMaterialColorChange(0, "baseColor");
    }
  }
}

class AnimatorEventKeyframe {
  clipName;
  data;
  time;
}
class PropertyAnimationEvent extends CEvent {
  static SEEK = "SEEK";
  static COMPLETE = "COMPLETE";
  animation;
  frame;
  constructor(animation, name) {
    super(name);
    this.animation = animation;
  }
}

class PropertyAnimation extends ComponentBase {
  _animator;
  _clips = [];
  /**
   * name of default animation clip
   */
  defaultClip;
  /**
   * is it play auto
   */
  autoPlay;
  _seekEvent;
  _completeEvent;
  _keyFrameList;
  constructor() {
    super();
    this._seekEvent = new PropertyAnimationEvent(this, PropertyAnimationEvent.SEEK);
    this._completeEvent = new PropertyAnimationEvent(this, PropertyAnimationEvent.COMPLETE);
    this._keyFrameList = {};
  }
  /**
   * register a event to animator
   * @param frame source AnimatorEventKeyframe
   */
  registerEventKeyFrame(frame) {
    let list = this._keyFrameList[frame.clipName];
    if (list == null) {
      this._keyFrameList[frame.clipName] = list = [];
    }
    list.push(frame);
  }
  /**
   * @internal
   */
  init() {
    this._animator = new AnimationMonitor(this);
  }
  /**
   * @internal
   */
  onUpdate() {
    if (this.enable) {
      this._animator.update(Time.time, Time.delta);
    }
  }
  /**
   * append a perperty animation clip
   * @param clip source PropertyAnimClip
   */
  appendClip(clip) {
    this._clips.push(clip);
    this.play(clip.name);
  }
  statusCall(tag, last, now) {
    if (tag == AnimationMonitor.Complete) {
      this.eventDispatcher.dispatchEvent(this._completeEvent);
    } else if (tag == AnimationMonitor.Seek) {
      if (last != now) {
        let frames = this._keyFrameList[this.currentClip.name];
        if (frames) {
          for (let frame of frames) {
            if (frame.time > last && frame.time <= now) {
              this._seekEvent.data = this._seekEvent.frame = frame;
              this.eventDispatcher.dispatchEvent(this._seekEvent);
            }
          }
        }
      }
    }
  }
  /**
   * set playing speed
   */
  set speed(value) {
    this._animator.speed = value;
  }
  /**
   * get playing speed
   */
  get speed() {
    return this._animator.speed;
  }
  /**
   * stop playing
   */
  stop() {
    this._animator.stop();
  }
  /**
   * stop or resume playing
   */
  toggle() {
    this._animator.toggle();
  }
  /**
   * get animation clip by clip name
   * @param clip name of PropertyAnimClip
   * @returns 
   */
  getClip(name) {
    let clip;
    for (let item of this._clips) {
      if (item.name == name) {
        clip = item;
        break;
      }
    }
    return clip;
  }
  /**
   * get animation clip which is playing now
   */
  get currentClip() {
    return this._animator.currentClip;
  }
  /**
   * get time of current animator
   */
  get time() {
    return this._animator.time;
  }
  /**
   * seek the animation to assign time
   * @param time assign time
   */
  seek(time) {
    this._animator.seek(time);
  }
  /**
   * play animation by given name
   * @param name animation name
   * @param reset if true, play the animation from time 0
   * @returns 
   */
  play(name, reset = true) {
    let clip = this.getClip(name);
    if (clip) {
      this._animator.play(clip, reset);
      return clip;
    }
    return null;
  }
  /**
   * @internal
   *
   */
  start() {
    if (this.autoPlay) {
      this.play(this.defaultClip);
    }
  }
  copyComponent(from) {
    this.autoPlay = from.autoPlay;
    this.defaultClip = from.defaultClip;
    let clips = from._clips;
    for (let i = 0, count = clips.length; i < count; i++) {
      this.appendClip(clips[i]);
    }
    return this;
  }
  /**
   * Create a new PropertyAnimation component, copy the properties of the current component, 
   * and add them to the target object.
   * @param obj target object3D
   */
  cloneTo(obj) {
    let animator = obj.addComponent(PropertyAnimation);
    animator.copyComponent(this);
  }
}

class MorphTargetBlender extends ComponentBase {
  _targetRenderers = {};
  _vec3 = new Vector3();
  _matrix4 = new Matrix4();
  _quaternion = new Quaternion();
  init(param) {
    let meshRenders = this.fetchMorphRenderers(this.object3D, SkinnedMeshRenderer2);
    let meshRenders2 = this.fetchMorphRenderers(this.object3D, MeshRenderer);
    meshRenders.push(...meshRenders2);
    for (const renderer of meshRenders) {
      let hasMorphTarget = RendererMaskUtil.hasMask(renderer.rendererMask, RendererMask.MorphTarget);
      if (hasMorphTarget) {
        renderer.selfCloneMaterials("MORPH_TARGET_UUID");
      }
      for (const key in renderer.geometry.morphTargetDictionary) {
        let renderList = this._targetRenderers[key] || [];
        renderList.push(renderer);
        this._targetRenderers[key] = renderList;
      }
    }
  }
  getMorphRenderersByKey(key) {
    return this._targetRenderers[key];
  }
  cloneMorphRenderers() {
    let dst = {};
    for (let key in this._targetRenderers) {
      dst[key] = this._targetRenderers[key];
    }
    return dst;
  }
  /**
   * Inject arkit data into the model and let all meshRender below the node accept morph animation
   * @param frame: BlendShape data output from ARKit.
   * @param keyMapper: Table mapping the relationship between the model's modelKey and ARKit's output arkitKey: {modelKey: arkitKey}.
   * @param multiplier: Scaling factor for movement data.
   * @returns
   */
  applyBlendShape(frame, keyMapper, multiplier = 1) {
    if (!frame) {
      console.warn("blendShape is null");
      return;
    }
    this._vec3.setFromArray(frame.transform.transform[3]);
    this._vec3.multiplyScalar(multiplier);
    this.object3D.transform.localPosition = this._vec3;
    this._vec3.setFromArray(frame.transform.transform[2]);
    this._matrix4.copyColFrom(2, this._vec3);
    this._vec3.setFromArray(frame.transform.transform[1]);
    this._matrix4.copyColFrom(1, this._vec3);
    this._vec3.setFromArray(frame.transform.transform[0]);
    this._matrix4.copyColFrom(0, this._vec3);
    this._matrix4.transpose();
    this._quaternion.fromMatrix(this._matrix4);
    this.object3D.localQuaternion = this._quaternion;
    for (let keyInModel in keyMapper) {
      let renderList = this._targetRenderers[keyInModel];
      let stdKey = keyMapper[keyInModel];
      let influence = frame.texture[stdKey];
      this.applyMorphTargetInfluence(keyInModel, influence, renderList);
    }
  }
  applyMorphTargetInfluence(key, influence, rendererList) {
    for (let renderer of rendererList) {
      renderer.setMorphInfluence(key, influence);
    }
  }
  fetchMorphRenderers(obj, c) {
    let sourceRenders = obj.getComponentsInChild(c);
    let result = [];
    for (let renderer of sourceRenders) {
      if (renderer.hasMask(RendererMask.MorphTarget)) {
        result.push(renderer);
      }
    }
    return result;
  }
}

class MorphTargetFrame {
  texture;
  transform;
}

var MorphTargetTransformKey = /* @__PURE__ */ ((MorphTargetTransformKey2) => {
  MorphTargetTransformKey2["mouthRollLower"] = "mouthRollLower";
  MorphTargetTransformKey2["browOuterUp_L"] = "browOuterUpLeft";
  MorphTargetTransformKey2["mouthSmile_L"] = "mouthSmileLeft";
  MorphTargetTransformKey2["jawRight"] = "jawRight";
  MorphTargetTransformKey2["eyeLookOut_L"] = "eyeLookOutLeft";
  MorphTargetTransformKey2["mouthFunnel"] = "mouthFunnel";
  MorphTargetTransformKey2["mouthUpperUp_R"] = "mouthUpperUpRight";
  MorphTargetTransformKey2["browDown_L"] = "browDownLeft";
  MorphTargetTransformKey2["jawLeft"] = "jawLeft";
  MorphTargetTransformKey2["mouthLowerDown_L"] = "mouthLowerDownLeft";
  MorphTargetTransformKey2["noseSneer_R"] = "noseSneerRight";
  MorphTargetTransformKey2["jawForward"] = "jawForward";
  MorphTargetTransformKey2["mouthLowerDown_R"] = "mouthLowerDownRight";
  MorphTargetTransformKey2["browInnerUp"] = "browInnerUp";
  MorphTargetTransformKey2["mouthRollUpper"] = "mouthRollUpper";
  MorphTargetTransformKey2["mouthStretch_R"] = "mouthStretchRight";
  MorphTargetTransformKey2["mouthPucker"] = "mouthPucker";
  MorphTargetTransformKey2["eyeBlink_L"] = "eyeBlinkLeft";
  MorphTargetTransformKey2["mouthUpperUp_L"] = "mouthUpperUpLeft";
  MorphTargetTransformKey2["mouthShrugUpper"] = "mouthShrugUpper";
  MorphTargetTransformKey2["eyeLookIn_R"] = "eyeLookInRight";
  MorphTargetTransformKey2["noseSneer_L"] = "noseSneerLeft";
  MorphTargetTransformKey2["mouthFrown_L"] = "mouthFrownLeft";
  MorphTargetTransformKey2["cheekSquint_L"] = "cheekSquintLeft";
  MorphTargetTransformKey2["eyeLookDown_L"] = "eyeLookDownLeft";
  MorphTargetTransformKey2["mouthDimple_L"] = "mouthDimpleLeft";
  MorphTargetTransformKey2["mouthFrown_R"] = "mouthFrownRight";
  MorphTargetTransformKey2["eyeLookIn_L"] = "eyeLookInLeft";
  MorphTargetTransformKey2["eyeLookOut_R"] = "eyeLookOutRight";
  MorphTargetTransformKey2["mouthLeft"] = "mouthLeft";
  MorphTargetTransformKey2["mouthStretch_L"] = "mouthStretchLeft";
  MorphTargetTransformKey2["mouthPress_L"] = "mouthPressLeft";
  MorphTargetTransformKey2["mouthDimple_R"] = "mouthDimpleRight";
  MorphTargetTransformKey2["eyeWide_R"] = "eyeWideRight";
  MorphTargetTransformKey2["browDown_R"] = "browDownRight";
  MorphTargetTransformKey2["eyeLookUp_R"] = "eyeLookUpRight";
  MorphTargetTransformKey2["eyeBlink_R"] = "eyeBlinkRight";
  MorphTargetTransformKey2["cheekSquint_R"] = "cheekSquintRight";
  MorphTargetTransformKey2["mouthRight"] = "mouthDimpleRight";
  MorphTargetTransformKey2["eyeLookDown_R"] = "eyeLookDownRight";
  MorphTargetTransformKey2["eyeLookUp_L"] = "eyeLookUpLeft";
  MorphTargetTransformKey2["eyeSquint_L"] = "eyeSquintLeft";
  MorphTargetTransformKey2["jawOpen"] = "jawOpen";
  MorphTargetTransformKey2["browOuterUp_R"] = "browOuterUpRight";
  MorphTargetTransformKey2["mouthClose"] = "mouthClose";
  MorphTargetTransformKey2["mouthShrugLower"] = "mouthShrugLower";
  MorphTargetTransformKey2["eyeWide_L"] = "eyeWideLeft";
  MorphTargetTransformKey2["tongueOut"] = "tongueOut";
  MorphTargetTransformKey2["eyeSquint_R"] = "eyeSquintRight";
  MorphTargetTransformKey2["cheekPuff"] = "cheekPuff";
  MorphTargetTransformKey2["mouthPress_R"] = "mouthPressRight";
  MorphTargetTransformKey2["mouthSmile_R"] = "mouthSmileRight";
  return MorphTargetTransformKey2;
})(MorphTargetTransformKey || {});

class CameraControllerBase {
  _autoUpdate = true;
  _target;
  _lookAtObject;
  _origin = new Vector3(0, 0, 0);
  _speed = 300;
  /**
   *
   * @constructor
   * @param targetObject control object3D
   * @param lookAtObject observational object3D
   */
  constructor(targetObject = null, lookAtObject = null) {
    this._target = targetObject;
    this._lookAtObject = lookAtObject;
  }
  /**
   *
   * Get the control object3D
   * @returns Object3D
   */
  get target() {
    return this._target;
  }
  /**
   *
   * Set the control object3D
   * @param val Object3D
   */
  set target(val) {
    if (this._target == val) return;
    this._target = val;
  }
  /**
   *
   * Get observational object3D
   * @returns Object3D
   */
  get lookAtObject() {
    return this._lookAtObject;
  }
  /**
   *
   * Set observational object3D
   * @param val Object3D
   */
  set lookAtObject(val) {
    if (this._lookAtObject == val) return;
    this._lookAtObject = val;
  }
  /**
   *
   * Get moving speed
   * @returns number
   */
  get speed() {
    return this._speed;
  }
  /**
   *
   * Set moving speed
   * @returns number
   */
  set speed(val) {
    this._speed = val;
  }
  /**
   * update(tick)
   */
  update() {
  }
}

class FirstPersonCameraController extends ComponentBase {
  focus;
  distance = 5;
  _camera;
  constructor() {
    super();
  }
  start() {
    this._camera = this.object3D.getOrAddComponent(Camera3D);
    if (!this._camera) {
      console.error("FirstPersonCameraController need camera");
      return;
    }
    if (!this.focus) {
      console.error("FirstPersonCameraController need target");
      return;
    }
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
  }
  mouseDown(e) {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_MOVE, this.mouseMove, this);
  }
  mouseUp(e) {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_MOVE, this.mouseMove, this);
  }
  mouseMove(e) {
    let temp = this.transform.localRotation;
    temp.y += e.movementX * 0.01;
    temp.x += e.movementY * 0.01;
    this.transform.localRotation = temp;
  }
  mouseWheel(e) {
    this.distance += Engine3D.inputSystem.wheelDelta * 0.1;
  }
  onUpdate() {
    let vec = new Vector3();
    this._camera.transform.forward.scaleToRef(this.distance, vec);
    var focusPoint = this.focus.transform.worldPosition;
    this._camera.transform.localPosition = focusPoint;
  }
  destroy(force) {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
    super.destroy(force);
  }
}

var KeyCode = /* @__PURE__ */ ((KeyCode2) => {
  KeyCode2[KeyCode2["Key_BackSpace"] = 8] = "Key_BackSpace";
  KeyCode2[KeyCode2["Key_Tab"] = 9] = "Key_Tab";
  KeyCode2[KeyCode2["Key_Clear"] = 12] = "Key_Clear";
  KeyCode2[KeyCode2["Key_Enter"] = 13] = "Key_Enter";
  KeyCode2[KeyCode2["Key_Shift_L"] = 16] = "Key_Shift_L";
  KeyCode2[KeyCode2["Key_Control_L"] = 17] = "Key_Control_L";
  KeyCode2[KeyCode2["Key_Alt_L"] = 18] = "Key_Alt_L";
  KeyCode2[KeyCode2["Key_Pause"] = 19] = "Key_Pause";
  KeyCode2[KeyCode2["Key_CapsLock"] = 20] = "Key_CapsLock";
  KeyCode2[KeyCode2["Key_Escape"] = 21] = "Key_Escape";
  KeyCode2[KeyCode2["Key_Esc"] = 27] = "Key_Esc";
  KeyCode2[KeyCode2["Key_Space"] = 32] = "Key_Space";
  KeyCode2[KeyCode2["Key_Prior"] = 33] = "Key_Prior";
  KeyCode2[KeyCode2["Key_Next"] = 34] = "Key_Next";
  KeyCode2[KeyCode2["Key_End"] = 35] = "Key_End";
  KeyCode2[KeyCode2["Key_Home"] = 36] = "Key_Home";
  KeyCode2[KeyCode2["Key_Left"] = 37] = "Key_Left";
  KeyCode2[KeyCode2["Key_Up"] = 38] = "Key_Up";
  KeyCode2[KeyCode2["Key_Right"] = 39] = "Key_Right";
  KeyCode2[KeyCode2["Key_Down"] = 40] = "Key_Down";
  KeyCode2[KeyCode2["Key_Select"] = 41] = "Key_Select";
  KeyCode2[KeyCode2["Key_Print"] = 42] = "Key_Print";
  KeyCode2[KeyCode2["Key_Execute"] = 43] = "Key_Execute";
  KeyCode2[KeyCode2["Key_Insert"] = 45] = "Key_Insert";
  KeyCode2[KeyCode2["Key_Delete"] = 46] = "Key_Delete";
  KeyCode2[KeyCode2["Key_Help"] = 47] = "Key_Help";
  KeyCode2[KeyCode2["Key_0"] = 48] = "Key_0";
  KeyCode2[KeyCode2["Key_1"] = 49] = "Key_1";
  KeyCode2[KeyCode2["Key_2"] = 50] = "Key_2";
  KeyCode2[KeyCode2["Key_3"] = 51] = "Key_3";
  KeyCode2[KeyCode2["Key_4"] = 52] = "Key_4";
  KeyCode2[KeyCode2["Key_5"] = 53] = "Key_5";
  KeyCode2[KeyCode2["Key_6"] = 54] = "Key_6";
  KeyCode2[KeyCode2["Key_7"] = 55] = "Key_7";
  KeyCode2[KeyCode2["Key_8"] = 56] = "Key_8";
  KeyCode2[KeyCode2["Key_9"] = 57] = "Key_9";
  KeyCode2[KeyCode2["Key_A"] = 65] = "Key_A";
  KeyCode2[KeyCode2["Key_B"] = 66] = "Key_B";
  KeyCode2[KeyCode2["Key_C"] = 67] = "Key_C";
  KeyCode2[KeyCode2["Key_D"] = 68] = "Key_D";
  KeyCode2[KeyCode2["Key_E"] = 69] = "Key_E";
  KeyCode2[KeyCode2["Key_F"] = 70] = "Key_F";
  KeyCode2[KeyCode2["Key_G"] = 71] = "Key_G";
  KeyCode2[KeyCode2["Key_H"] = 72] = "Key_H";
  KeyCode2[KeyCode2["Key_I"] = 73] = "Key_I";
  KeyCode2[KeyCode2["Key_J"] = 74] = "Key_J";
  KeyCode2[KeyCode2["Key_K"] = 75] = "Key_K";
  KeyCode2[KeyCode2["Key_L"] = 76] = "Key_L";
  KeyCode2[KeyCode2["Key_M"] = 77] = "Key_M";
  KeyCode2[KeyCode2["Key_N"] = 78] = "Key_N";
  KeyCode2[KeyCode2["Key_O"] = 79] = "Key_O";
  KeyCode2[KeyCode2["Key_P"] = 80] = "Key_P";
  KeyCode2[KeyCode2["Key_Q"] = 81] = "Key_Q";
  KeyCode2[KeyCode2["Key_R"] = 82] = "Key_R";
  KeyCode2[KeyCode2["Key_S"] = 83] = "Key_S";
  KeyCode2[KeyCode2["Key_T"] = 84] = "Key_T";
  KeyCode2[KeyCode2["Key_U"] = 85] = "Key_U";
  KeyCode2[KeyCode2["Key_V"] = 86] = "Key_V";
  KeyCode2[KeyCode2["Key_W"] = 87] = "Key_W";
  KeyCode2[KeyCode2["Key_X"] = 88] = "Key_X";
  KeyCode2[KeyCode2["Key_Y"] = 89] = "Key_Y";
  KeyCode2[KeyCode2["Key_Z"] = 90] = "Key_Z";
  KeyCode2[KeyCode2["Key_KP_0"] = 96] = "Key_KP_0";
  KeyCode2[KeyCode2["Key_KP_1"] = 97] = "Key_KP_1";
  KeyCode2[KeyCode2["Key_KP_2"] = 98] = "Key_KP_2";
  KeyCode2[KeyCode2["Key_KP_3"] = 99] = "Key_KP_3";
  KeyCode2[KeyCode2["Key_KP_4"] = 100] = "Key_KP_4";
  KeyCode2[KeyCode2["Key_KP_5"] = 101] = "Key_KP_5";
  KeyCode2[KeyCode2["Key_KP_6"] = 102] = "Key_KP_6";
  KeyCode2[KeyCode2["Key_KP_7"] = 103] = "Key_KP_7";
  KeyCode2[KeyCode2["Key_KP_8"] = 104] = "Key_KP_8";
  KeyCode2[KeyCode2["Key_KP_9"] = 105] = "Key_KP_9";
  KeyCode2[KeyCode2["Key_Multiply"] = 106] = "Key_Multiply";
  KeyCode2[KeyCode2["Key_Add"] = 107] = "Key_Add";
  KeyCode2[KeyCode2["Key_Separator"] = 108] = "Key_Separator";
  KeyCode2[KeyCode2["Key_Subtract"] = 109] = "Key_Subtract";
  KeyCode2[KeyCode2["Key_Decimal"] = 110] = "Key_Decimal";
  KeyCode2[KeyCode2["Key_Divide"] = 111] = "Key_Divide";
  KeyCode2[KeyCode2["Key_F1"] = 112] = "Key_F1";
  KeyCode2[KeyCode2["Key_F2"] = 113] = "Key_F2";
  KeyCode2[KeyCode2["Key_F3"] = 114] = "Key_F3";
  KeyCode2[KeyCode2["Key_F4"] = 115] = "Key_F4";
  KeyCode2[KeyCode2["Key_F5"] = 116] = "Key_F5";
  KeyCode2[KeyCode2["Key_F6"] = 117] = "Key_F6";
  KeyCode2[KeyCode2["Key_F7"] = 118] = "Key_F7";
  KeyCode2[KeyCode2["Key_F8"] = 119] = "Key_F8";
  KeyCode2[KeyCode2["Key_F9"] = 120] = "Key_F9";
  KeyCode2[KeyCode2["Key_F10"] = 121] = "Key_F10";
  KeyCode2[KeyCode2["Key_F11"] = 122] = "Key_F11";
  KeyCode2[KeyCode2["Key_F12"] = 123] = "Key_F12";
  KeyCode2[KeyCode2["Key_F13"] = 124] = "Key_F13";
  KeyCode2[KeyCode2["Key_F14"] = 125] = "Key_F14";
  KeyCode2[KeyCode2["Key_F15"] = 126] = "Key_F15";
  KeyCode2[KeyCode2["Key_F16"] = 127] = "Key_F16";
  KeyCode2[KeyCode2["Key_F17"] = 128] = "Key_F17";
  KeyCode2[KeyCode2["Key_F18"] = 129] = "Key_F18";
  KeyCode2[KeyCode2["Key_F19"] = 130] = "Key_F19";
  KeyCode2[KeyCode2["Key_F20"] = 131] = "Key_F20";
  KeyCode2[KeyCode2["Key_F21"] = 132] = "Key_F21";
  KeyCode2[KeyCode2["Key_F22"] = 133] = "Key_F22";
  KeyCode2[KeyCode2["Key_F23"] = 134] = "Key_F23";
  KeyCode2[KeyCode2["Key_F24"] = 135] = "Key_F24";
  KeyCode2[KeyCode2["Key_Num_Lock"] = 136] = "Key_Num_Lock";
  KeyCode2[KeyCode2["Key_Scroll_Lock"] = 137] = "Key_Scroll_Lock";
  return KeyCode2;
})(KeyCode || {});

class FlyCameraController extends ComponentBase {
  /**
   *  Camera movement speed
   */
  moveSpeed = 2;
  /**
   *
   * Coordinates of specific objects
   */
  targetPos = new Vector3(0, 0, 10);
  /**
   *
   * Camera orientation coordinates
   */
  lookAtPos = new Vector3(0, 0, 0);
  /**
   * @internal
   */
  config = { shiftMoveScale: 20 };
  _moveScale = 1;
  _dir;
  _mouseFactory = 25;
  _factory = 1.5;
  _mouseDown = false;
  _lastPos;
  _keyState;
  constructor() {
    super();
    this._lastPos = new Vector3();
    this._keyState = {
      front: false,
      back: false,
      left: false,
      right: false,
      q: false,
      e: false
    };
    this.setCamera(new Vector3(0, 0, 100), new Vector3(0, 0, 0));
  }
  /**
   *
   * Initialize camera data
   * @param cameraPos source position 
   * @param lookAt target position
   */
  setCamera(cameraPos, lookAt) {
    this.targetPos.copyFrom(cameraPos);
    this.lookAtPos.copyFrom(lookAt);
    this.Reset();
  }
  /**
   * @internal
   */
  start() {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.keyUp, this);
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    this.transform.lookAt(this.targetPos, this.lookAtPos);
  }
  mouseWheel(e) {
  }
  keyUp(e) {
    switch (e.keyCode) {
      case KeyCode.Key_W:
        this._keyState.front = false;
        break;
      case KeyCode.Key_S:
        this._keyState.back = false;
        break;
      case KeyCode.Key_A:
        this._keyState.left = false;
        break;
      case KeyCode.Key_D:
        this._keyState.right = false;
        break;
      case KeyCode.Key_Shift_L:
        this._moveScale = 1;
        break;
      case KeyCode.Key_Q:
        this._keyState.q = false;
        break;
      case KeyCode.Key_E:
        this._keyState.e = false;
        break;
      case KeyCode.Key_F:
        this.transform.lookAt(this.targetPos, this.lookAtPos);
        break;
    }
  }
  keyDown(e) {
    switch (e.keyCode) {
      case KeyCode.Key_W:
        this._keyState.front = true;
        break;
      case KeyCode.Key_S:
        this._keyState.back = true;
        break;
      case KeyCode.Key_A:
        this._keyState.left = true;
        break;
      case KeyCode.Key_D:
        this._keyState.right = true;
        break;
      case KeyCode.Key_Q:
        this._keyState.q = true;
        break;
      case KeyCode.Key_E:
        this._keyState.e = true;
        break;
      case KeyCode.Key_Shift_L:
        this._moveScale = this.config.shiftMoveScale;
    }
  }
  Reset() {
    this._lastPos.x = Engine3D.inputSystem.mouseLastX;
    this._lastPos.y = Engine3D.inputSystem.mouseLastY;
  }
  mouseDown(e) {
    this.Reset();
    this._mouseDown = true;
  }
  mouseUp(e) {
    this.Reset();
    this._mouseDown = false;
  }
  /**
   *
   * Get the smoothness of the camera by keyboard control
   */
  get factory() {
    return this._factory;
  }
  /**
   *
   * Set the smoothness of the camera by keyboard control
   */
  set factory(value) {
    this._factory = value;
  }
  /**
   *
   * Get the smoothness of the camera by mouse control
   */
  get mouseFactory() {
    return this._mouseFactory;
  }
  /**
   *
   * Set the smoothness of the camera by mouse control
   */
  set mouseFactory(value) {
    this._mouseFactory = value;
  }
  /**
   * @internal
   * @param target 
   * @param current 
   * @param t 
   * @returns 
   */
  internal(target, current, t) {
    return (current - target) * t;
  }
  onUpdate() {
    let transform = this.transform;
    let dt = clamp(Time.delta, 0, 0.016);
    if (this._mouseDown) {
      transform.rotationY -= this.internal(transform.rotationY + (Engine3D.inputSystem.mouseLastX - this._lastPos.x) * 0.25, transform.rotationY, dt * this._mouseFactory);
      transform.rotationX -= this.internal(transform.rotationX + (Engine3D.inputSystem.mouseLastY - this._lastPos.y) * 0.25, transform.rotationX, dt * this._mouseFactory);
      this.Reset();
    }
    if (this._keyState.front) {
      let forward = transform.forward;
      transform.x -= this.internal(transform.x + forward.x * this.moveSpeed * this._moveScale, transform.x, dt * this._factory);
      transform.y -= this.internal(transform.y + forward.y * this.moveSpeed * this._moveScale, transform.y, dt * this._factory);
      transform.z -= this.internal(transform.z + forward.z * this.moveSpeed * this._moveScale, transform.z, dt * this._factory);
    }
    if (this._keyState.back) {
      let forward = transform.forward;
      transform.x += this.internal(transform.x + forward.x * this.moveSpeed * this._moveScale, transform.x, dt * this._factory);
      transform.y += this.internal(transform.y + forward.y * this.moveSpeed * this._moveScale, transform.y, dt * this._factory);
      transform.z += this.internal(transform.z + forward.z * this.moveSpeed * this._moveScale, transform.z, dt * this._factory);
    }
    if (this._keyState.left) {
      let right = transform.left;
      transform.x += this.internal(transform.x + right.x * this.moveSpeed * this._moveScale, transform.x, dt * this._factory);
      transform.y += this.internal(transform.y + right.y * this.moveSpeed * this._moveScale, transform.y, dt * this._factory);
      transform.z += this.internal(transform.z + right.z * this.moveSpeed * this._moveScale, transform.z, dt * this._factory);
    }
    if (this._keyState.right) {
      let right = transform.left;
      transform.x -= this.internal(transform.x + right.x * this.moveSpeed * this._moveScale, transform.x, dt * this._factory);
      transform.y -= this.internal(transform.y + right.y * this.moveSpeed * this._moveScale, transform.y, dt * this._factory);
      transform.z -= this.internal(transform.z + right.z * this.moveSpeed * this._moveScale, transform.z, dt * this._factory);
    }
    if (this._keyState.q) {
      transform.y = lerp(transform.y, transform.y - this.moveSpeed * this._moveScale, dt * this._factory);
    }
    if (this._keyState.e) {
      transform.y = lerp(transform.y, transform.y + this.moveSpeed * this._moveScale, dt * this._factory);
    }
  }
  /**
   * @internal
   */
  destroy(force) {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
    Engine3D.inputSystem.removeEventListener(KeyEvent.KEY_UP, this.keyUp, this);
    Engine3D.inputSystem.removeEventListener(KeyEvent.KEY_DOWN, this.keyDown, this);
    super.destroy(force);
  }
}

class OrbitController extends ComponentBase {
  /**
   * internal camera
   */
  _camera;
  /**
   * Whether to enable automatic rotation
   */
  autoRotate = false;
  /**
   * Automatic rotation speed coefficient
   */
  autoRotateSpeed = 0.1;
  /**
   * Rotation speed coefficient
   */
  rotateFactor = 0.5;
  /**
   * Scale speed coefficient
   */
  zoomFactor = 0.1;
  /**
   * Angle translation velocity coefficient
   */
  panFactor = 0.25;
  _smooth = 5;
  _minDistance = 1;
  _maxDistance = 1e5;
  _maxPolarAngle = 90;
  _minPolarAngle = -90;
  _target = new Vector3(0, 0, 0);
  _cTarget = new Vector3(0, 0, 0);
  _position = new Vector3(0, 0, 0);
  _cPosition = new Vector3(0, 0, 0);
  _spherical = new Spherical();
  _isMouseDown = false;
  _lastMouseX = -1;
  _lastMouseY = -1;
  _isPanning = false;
  /**
   * @constructor
   */
  constructor() {
    super();
  }
  /**
   * Get the target position
   */
  get target() {
    return this._target;
  }
  /**
   * Set the target position
   */
  set target(v) {
    this._target = v;
  }
  /**
   * Set smoothing coefficient of controller
   */
  get smooth() {
    return this._smooth;
  }
  /**
   * Get smoothing coefficient of controller
   */
  set smooth(v) {
    this._smooth = Math.max(v, 1);
  }
  /**
   * Get the minimum distance between the camera and the target coordinate
   * @defaultValue 1
   */
  get minDistance() {
    return this._minDistance;
  }
  /**
   * Set the minimum distance between the camera and the target position
   * min value: 0.000002
   * max value: `this._maxDistance` {@link maxDistance}
   */
  set minDistance(v) {
    this._minDistance = clamp(v, 2e-6, this._maxDistance);
  }
  /**
   * Get the max distance between the camera and the target position
   * @defaultValue 100000
   */
  get maxDistance() {
    return this._maxDistance;
  }
  /**
   * Set the max distance between the camera and the target position
   * min - `this._maxDistance`
   * max - Infinity
   */
  set maxDistance(v) {
    this._maxDistance = clamp(v, this._minDistance, Infinity);
  }
  /**
   * Get the lower elevation limit of the camera from the xz plane
   * @defaultValue -90
   */
  get minPolarAngle() {
    return this._minPolarAngle;
  }
  /**
   * Set the lower elevation limit of the camera from the xz plane
   * min - -90
   * max - {@link maxPolarAngle}
   */
  set minPolarAngle(v) {
    this._minPolarAngle = clamp(v, -90, this._maxPolarAngle);
  }
  /**
   * Get the upper elevation limit of the camera from the xz plane
   * @defaultValue 90
   */
  get maxPolarAngle() {
    return this._maxPolarAngle;
  }
  /**
   * Set the upper elevation limit of the camera to the xz plane
   * min - less than {@link minPolarAngle}   
   * max - 90
   */
  set maxPolarAngle(v) {
    this._maxPolarAngle = clamp(v, this._minPolarAngle, 90);
  }
  get spherical() {
    return this._spherical;
  }
  /**
   * @internal
   */
  start() {
    this._camera = this.object3D.getComponent(Camera3D);
    this._position = this.object3D.transform.localPosition.clone();
    this._cPosition = this._position.clone();
    this._target = this._camera.lookTarget.clone();
    this._cTarget = this._target.clone();
    this._spherical.setCoords(this._position.x - this._target.x, this._position.y - this._target.y, this._position.z - this._target.z);
    this._camera.lookAt(this._cPosition, this._cTarget, Vector3.UP);
    this.addEventListener();
  }
  /**
   * @internal
   */
  onEnable() {
    this.addEventListener();
  }
  /**
   * @internal
   */
  onDisable() {
    this.removeEventListener();
  }
  /**
   * @internal
   */
  onUpdate() {
    let step = this._isPanning ? 1 : this.smooth;
    let changed = false;
    if (!this._cPosition.equals(this.object3D.transform.localPosition)) {
      this._position.copyFrom(this.object3D.transform.localPosition);
      step = 1;
      changed = true;
    }
    if (!this._cTarget.equals(this._target)) {
      this._cTarget.copyFrom(this._target);
      step = 1;
      changed = true;
    }
    if (changed) {
      this._spherical.setCoords(this._position.x - this._target.x, this._position.y - this._target.y, this._position.z - this._target.z);
    } else if (!this._isMouseDown && this.autoRotate) {
      this._spherical.theta -= this.autoRotateSpeed * Math.PI / 180;
      this.updateCamera();
    }
    let x = (this._position.x - this._cPosition.x) / step;
    let y = (this._position.y - this._cPosition.y) / step;
    let z = (this._position.z - this._cPosition.z) / step;
    this._cPosition.x = Math.abs(x) > 1e-10 ? this._cPosition.x + x : this._position.x;
    this._cPosition.y = Math.abs(y) > 1e-10 ? this._cPosition.y + y : this._position.y;
    this._cPosition.z = Math.abs(z) > 1e-10 ? this._cPosition.z + z : this._position.z;
    this._camera.lookAt(this._cPosition, this._cTarget, Vector3.UP);
  }
  /**
   * @internal
   */
  onWheel(e) {
    e.deltaY = clamp(e.deltaY, -this._spherical.radius, this._spherical.radius);
    this._spherical.radius += e.deltaY * this.zoomFactor;
    this._spherical.radius = clamp(this._spherical.radius, this.minDistance, this.maxDistance);
    this.updateCamera();
  }
  /**
   * @internal
   */
  onPointerDown(e) {
    this._isMouseDown = true;
    this._lastMouseX = e.mouseX;
    this._lastMouseY = e.mouseY;
    if (e.mouseCode === 2)
      this._isPanning = true;
  }
  /**
   * @internal
   */
  onPointerMove(e) {
    if (!this._isMouseDown || !this.enable) return;
    let mousex = e.mouseX;
    let mousey = e.mouseY;
    if (e.mouseCode === 0 && this._lastMouseX > 0 && this._lastMouseY > 0) {
      const ra = -(mousex - this._lastMouseX) * this.rotateFactor;
      const rb = (mousey - this._lastMouseY) * this.rotateFactor;
      this._spherical.theta += ra * Math.PI / 180;
      this._spherical.phi -= rb * Math.PI / 180;
      this._spherical.phi = clamp(this._spherical.phi, this.minPolarAngle, this.maxPolarAngle);
      this.updateCamera();
    } else if (e.mouseCode === 2) {
      Vector3Ex.mulScale(this.object3D.transform.up, e.movementY * this.panFactor * this._camera.aspect, Vector3.HELP_1);
      if (e.ctrlKey || e.metaKey) {
        this._target.y += Vector3.HELP_1.y;
      } else {
        this._target.x += Vector3.HELP_1.x;
        this._target.z += Vector3.HELP_1.z;
      }
      Vector3Ex.mulScale(this.object3D.transform.right, -e.movementX * this.panFactor, Vector3.HELP_1);
      this._target.x -= Vector3.HELP_1.x;
      this._target.z -= Vector3.HELP_1.z;
      this._cTarget.copyFrom(this._target);
      this.updateCamera();
    }
    this._lastMouseX = mousex;
    this._lastMouseY = mousey;
  }
  /**
   * @internal
   */
  onPointerUp(e) {
    this._isMouseDown = false;
    if (e.mouseCode === 2) {
      this._isPanning = false;
    }
  }
  // private onPointerLeave() {
  //     this._isMouseDown = false;
  //     this._isPanning = false;
  // }
  /**
   * @internal
   */
  updateCamera() {
    this._spherical.makeSafe();
    let pos = this._spherical.getCoords();
    this._position.set(pos.x + this._target.x, pos.y + this._target.y, pos.z + this._target.z);
  }
  /**
   * @internal
   */
  addEventListener() {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_WHEEL, this.onWheel, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this.onPointerDown, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_MOVE, this.onPointerMove, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this.onPointerUp, this);
  }
  /**
   * @internal
   */
  removeEventListener() {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_WHEEL, this.onWheel, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_DOWN, this.onPointerDown, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_MOVE, this.onPointerMove, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_UP, this.onPointerUp, this);
  }
}
const EPS = Math.PI / 180 / 100;
class Spherical {
  radius;
  phi;
  theta;
  coords;
  constructor(radius = 1, phi = 0, theta = 0) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    this.coords = new Vector3();
    return this;
  }
  set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));
    return this;
  }
  setFromVector3(v) {
    return this.setCoords(v.x, v.y, v.z);
  }
  setCoords(x, y, z) {
    this.radius = Math.sqrt(x * x + y * y + z * z);
    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2(x, z);
      this.phi = Math.acos(clamp(y / this.radius, -1, 1));
    }
    return this;
  }
  getCoords() {
    const sinPhiRadius = Math.sin(this.phi) * this.radius;
    this.coords.x = sinPhiRadius * Math.sin(this.theta);
    this.coords.y = Math.cos(this.phi) * this.radius;
    this.coords.z = sinPhiRadius * Math.cos(this.theta);
    return this.coords;
  }
}

class ThirdPersonCameraController extends ComponentBase {
  focus;
  _rotation = new Vector3(45, 0, 0);
  distance = 5;
  _camera;
  constructor() {
    super();
  }
  start() {
    this._camera = this.object3D.getOrAddComponent(Camera3D);
    if (!this._camera) {
      console.error("ThirdPersonCameraController need camera");
      return;
    }
    if (!this.focus) {
      console.error("ThirdPersonCameraController need target");
      return;
    }
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
  }
  mouseDown(e) {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_MOVE, this.mouseMove, this);
  }
  mouseUp(e) {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_MOVE, this.mouseMove, this);
  }
  mouseMove(e) {
    this._rotation.y += e.movementX * 0.01;
    this._rotation.x += e.movementY * 0.01;
  }
  mouseWheel(e) {
    this.distance += Engine3D.inputSystem.wheelDelta * 0.1;
  }
  onUpdate() {
    let vec = new Vector3();
    this._camera.transform.forward.scaleToRef(this.distance, vec);
    var focusPoint = this.focus.transform.worldPosition;
    this._camera.transform.localPosition = focusPoint.subtract(vec);
  }
  destroy(force) {
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_WHEEL, this.mouseWheel, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_UP, this.mouseUp, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_DOWN, this.mouseDown, this);
    super.destroy(force);
  }
}

var LineClassification = /* @__PURE__ */ ((LineClassification2) => {
  LineClassification2[LineClassification2["COLLINEAR"] = 0] = "COLLINEAR";
  LineClassification2[LineClassification2["LINES_INTERSECT"] = 1] = "LINES_INTERSECT";
  LineClassification2[LineClassification2["SEGMENTS_INTERSECT"] = 2] = "SEGMENTS_INTERSECT";
  LineClassification2[LineClassification2["A_BISECTS_B"] = 3] = "A_BISECTS_B";
  LineClassification2[LineClassification2["B_BISECTS_A"] = 4] = "B_BISECTS_A";
  LineClassification2[LineClassification2["PARALELL"] = 5] = "PARALELL";
  return LineClassification2;
})(LineClassification || {});
var PointClassification = /* @__PURE__ */ ((PointClassification2) => {
  PointClassification2[PointClassification2["ON_LINE"] = 0] = "ON_LINE";
  PointClassification2[PointClassification2["LEFT_SIDE"] = 1] = "LEFT_SIDE";
  PointClassification2[PointClassification2["RIGHT_SIDE"] = 2] = "RIGHT_SIDE";
  return PointClassification2;
})(PointClassification || {});
class Line {
  static cacluteLine0 = new Line(null, null);
  static cacluteLine1 = new Line(null, null);
  start;
  end;
  color = new Color(1, 1, 1, 1);
  _normal;
  _normalCalculated = false;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  set(start, end) {
    this.start = start;
    this.end = end;
  }
  getCenter() {
    let help = Vector3.HELP_0;
    this.start.subtract(this.end, help);
    help.scaleBy(0.5);
    help.add(this.end);
    return help;
  }
  inverse() {
    let tmp = this.start;
    this.start = this.end;
    this.end = tmp;
  }
  equals(l) {
    if (this.start == l.start && this.end == l.end || this.start == l.end && this.end == l.start) return true;
    return false;
  }
  /**
   */
  toArray() {
    return [this.start.x, this.start.y, this.start.z, this.end.x, this.end.y, this.end.z];
  }
  /**
   * @param ps
   */
  static getLines(ps) {
    let arr = [];
    for (let index = 0; index < ps.length; index++) {
      let i0 = index;
      let i1 = repeat(index + 1, ps.length);
      let p0 = ps[i0];
      let p1 = ps[i1];
      arr.push(new Line(p0, p1));
    }
    return arr;
  }
  /**
   * Determine the relationship between two straight lines
   * this line A = x0, y0 and B = x1, y1
   * other is A = x2, y2 and B = x3, y3
   * @param other compare other line
   * @param pIntersectPoint (out)Returns the intersection point of two line segments
   * @return
   */
  intersection(other, pIntersectPoint = null) {
    var denom = (other.end.z - other.start.z) * (this.end.x - this.start.x) - (other.end.x - other.start.x) * (this.end.z - this.start.z);
    var u0 = (other.end.x - other.start.x) * (this.start.z - other.start.z) - (other.end.z - other.start.z) * (this.start.x - other.start.x);
    var u1 = (other.start.x - this.start.x) * (this.end.z - this.start.z) - (other.start.z - this.start.z) * (this.end.x - this.start.x);
    if (denom == 0) {
      if (u0 == 0 && u1 == 0) return 0 /* COLLINEAR */;
      else return 5 /* PARALELL */;
    } else {
      u0 = u0 / denom;
      u1 = u1 / denom;
      var x = this.start.x + u0 * (this.end.x - this.start.x);
      var z = this.start.z + u0 * (this.end.z - this.start.z);
      if (pIntersectPoint != null) {
        pIntersectPoint.x = x;
        pIntersectPoint.y = 0;
        pIntersectPoint.z = z;
      }
      if (u0 >= 0 && u0 <= 1 && u1 >= 0 && u1 <= 1) {
        return 2 /* SEGMENTS_INTERSECT */;
      } else if (u1 >= 0 && u1 <= 1) {
        return 3 /* A_BISECTS_B */;
      } else if (u0 >= 0 && u0 <= 1) {
        return 4 /* B_BISECTS_A */;
      }
      return 1 /* LINES_INTERSECT */;
    }
  }
  /**
   * Straight direction
   * @return
   */
  getDirection() {
    var pt = this.end.subtract(this.start);
    var direction = new Vector3(pt.x, pt.y);
    return direction.normalize();
  }
  copyFrom(line) {
    if (!this.start) this.start = new Vector3();
    if (!this.end) this.end = new Vector3();
    this.start.copyFrom(line.start);
    this.end.copyFrom(line.end);
  }
  static IsEqual(d1, d2) {
    if (Math.abs(d1 - d2) < 1e-7) return true;
    return false;
  }
  static squreDistanceSegmentToSegment(lineA, lineB, mat) {
    let a_po = lineA.start;
    let a_p1 = lineA.end;
    let b_po = lineB.start;
    let b_p1 = lineB.end;
    let x1 = a_po.x;
    let y1 = a_po.y;
    let z1 = a_po.z;
    let x2 = a_p1.x;
    let y2 = a_p1.y;
    let z2 = a_p1.z;
    let x3 = b_po.x;
    let y3 = b_po.y;
    let z3 = b_po.z;
    let x4 = b_p1.x;
    let y4 = b_p1.y;
    let z4 = b_p1.z;
    let ux = x2 - x1;
    let uy = y2 - y1;
    let uz = z2 - z1;
    let vx = x4 - x3;
    let vy = y4 - y3;
    let vz = z4 - z3;
    let wx = x1 - x3;
    let wy = y1 - y3;
    let wz = z1 - z3;
    let a = ux * ux + uy * uy + uz * uz;
    let b = ux * vx + uy * vy + uz * vz;
    let c = vx * vx + vy * vy + vz * vz;
    let d = ux * wx + uy * wy + uz * wz;
    let e = vx * wx + vy * wy + vz * wz;
    let dt = a * c - b * b;
    let sd = dt;
    let td = dt;
    let sn = 0;
    let tn = 0;
    if (this.IsEqual(dt, 0)) {
      sn = 0;
      sd = 1;
      tn = e;
      td = c;
    } else {
      sn = b * e - c * d;
      tn = a * e - b * d;
      if (sn < 0) {
        sn = 0;
        tn = e;
        td = c;
      } else if (sn > sd) {
        sn = sd;
        tn = e + b;
        td = c;
      }
    }
    if (tn < 0) {
      tn = 0;
      if (-d < 0)
        sn = 0;
      else if (-d > a)
        sn = sd;
      else {
        sn = -d;
        sd = a;
      }
    } else if (tn > td) {
      tn = td;
      if (-d + b < 0) sn = 0;
      else if (-d + b > a) sn = sd;
      else {
        sn = -d + b;
        sd = a;
      }
    }
    let sc = 0;
    let tc = 0;
    if (this.IsEqual(sn, 0)) sc = 0;
    else sc = sn / sd;
    if (this.IsEqual(tn, 0)) tc = 0;
    else tc = tn / td;
    let dx = wx + sc * ux - tc * vx;
    let dy = wy + sc * uy - tc * vy;
    let dz = wz + sc * uz - tc * vz;
    return dx * dx + dy * dy + dz * dz;
  }
  /**
   * isNearLine
   */
  isNear(ray, maxDistance = 0, mat) {
    let tmpP0 = Vector3.HELP_0;
    let tmpP1 = Vector3.HELP_1;
    tmpP0.copyFrom(ray.origin);
    tmpP1.copyFrom(ray.direction);
    tmpP1.scaleBy(9999);
    tmpP1.add(tmpP0, tmpP1);
    Line.cacluteLine0.set(tmpP0, tmpP1);
    Line.cacluteLine1.copyFrom(this);
    if (mat) {
      mat.perspectiveMultiplyPoint3(Line.cacluteLine1.start, Line.cacluteLine1.start);
      mat.perspectiveMultiplyPoint3(Line.cacluteLine1.end, Line.cacluteLine1.end);
    }
    let dis = Line.squreDistanceSegmentToSegment(Line.cacluteLine0, Line.cacluteLine1, mat);
    if (dis + 1e-4 <= maxDistance) {
      ray.length = dis;
      return true;
    }
    ray.length = -999999;
    return false;
  }
}

class Triangle {
  static ID = -1;
  v1;
  v2;
  v3;
  u1;
  u2;
  u3;
  n1;
  n2;
  n3;
  t0;
  t;
  u;
  v;
  min = new Vector3();
  max = new Vector3();
  id = 0;
  constructor(v1, v2, v3) {
    this.id = Triangle.ID++ + 200;
    v1 && v2 && v3 && this.set(v1, v2, v3);
  }
  set(v1, v2, v3) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
    let min = this.min;
    let max = this.max;
    min.x = Math.min(this.v1.x, this.v2.x, this.v3.x);
    min.y = Math.min(this.v1.y, this.v2.y, this.v3.y);
    min.z = Math.min(this.v1.z, this.v2.z, this.v3.z);
    max.x = Math.max(this.v1.x, this.v2.x, this.v3.x);
    max.y = Math.max(this.v1.y, this.v2.y, this.v3.y);
    max.z = Math.max(this.v1.z, this.v2.z, this.v3.z);
    return this;
  }
  getNormal() {
    let v1 = this.v1;
    let v2 = this.v2;
    let v3 = this.v3;
    let edge1 = new Vector3(v2.x - v1.x, v2.y - v1.y, v2.z - v1.z);
    let edge2 = new Vector3(v3.x - v1.x, v3.y - v1.y, v3.z - v1.z);
    let normal = edge2.crossProduct(edge1);
    normal.normalize();
    return normal;
  }
  turnBack() {
    let tmp = this.v3;
    this.v3 = this.v1;
    this.v1 = tmp;
  }
  getLines() {
    let v1 = this.v1;
    let v2 = this.v2;
    let v3 = this.v3;
    let l = [new Line(v1, v2), new Line(v2, v3), new Line(v3, v1)];
    return l;
  }
  equals(t) {
    let lines1 = this.getLines();
    let lines2 = t.getLines();
    let cnt = 0;
    for (let i = 0; i < lines1.length; i++) {
      for (let j = 0; j < lines2.length; j++) {
        if (lines1[i].equals(lines2[j])) cnt++;
      }
    }
    if (cnt == 3) return true;
    else return false;
  }
  /**
   * name
   */
  getCenter() {
    let min = this.min;
    let max = this.max;
    let center = new Vector3();
    center.x = (min.x + max.x) * 0.5;
    center.y = (min.y + max.y) * 0.5;
    center.z = (min.z + max.z) * 0.5;
    return center;
  }
  /**
   * @function
   * @returns {Boolean} return intersection.
   */
  intersects(other) {
    var aMax = this.max;
    var aMin = this.min;
    var bMax = other.max;
    var bMin = other.min;
    return aMin.x <= bMax.x && aMax.x >= bMin.x && aMin.y <= bMax.y && aMax.y >= bMin.y && aMin.z <= bMax.z && aMax.z >= bMin.z;
  }
  sign2D(p1, p2, p3) {
    return (p1.x - p3.x) * (p2.z - p3.z) - (p2.x - p3.x) * (p1.z - p3.z);
  }
  pointInTriangle2D(pt) {
    let v1 = this.v1;
    let v2 = this.v2;
    let v3 = this.v3;
    let d1, d2, d3;
    let has_neg, has_pos;
    d1 = this.sign2D(pt, v1, v2);
    d2 = this.sign2D(pt, v2, v3);
    d3 = this.sign2D(pt, v3, v1);
    has_neg = d1 < 0 || d2 < 0 || d3 < 0;
    has_pos = d1 > 0 || d2 > 0 || d3 > 0;
    return !(has_neg && has_pos);
  }
  toArray() {
    return [this.v1.x, this.v1.y, this.v1.z, this.v2.x, this.v2.y, this.v2.z, this.v3.x, this.v3.y, this.v3.z];
  }
}

class GUIPickHelper {
  static _pt0;
  static _pt1;
  static _pt2;
  static _pt3;
  static _hitPoint;
  static _worldMatrix;
  static _ray;
  static _triangle;
  static _isInit;
  static init() {
    this._pt0 = new Vector3();
    this._pt1 = new Vector3();
    this._pt2 = new Vector3();
    this._pt3 = new Vector3();
    this._ray = new Ray();
    this._triangle = new Triangle();
    this._hitPoint = new Vector3();
    this._worldMatrix = new Matrix4();
  }
  static rayPick(ray, screenPos, screenSize, space, panelRatio, uiTransform, worldMatrix) {
    if (!this._isInit) {
      this.init();
      this._isInit = true;
    }
    let helpMatrix = this._worldMatrix;
    if (space == GUISpace.World) {
      let pickPoint;
      this.calculateHotArea_World(uiTransform, this._pt0, this._pt1, this._pt2, this._pt3);
      helpMatrix.copyFrom(worldMatrix).invert();
      let helpRay = this._ray;
      helpRay.copy(ray).applyMatrix(helpMatrix);
      this._triangle.set(this._pt0, this._pt1, this._pt2);
      pickPoint = helpRay.intersectTriangle(helpRay.origin, helpRay.direction, this._triangle);
      if (!pickPoint) {
        this._triangle.set(this._pt1, this._pt2, this._pt3);
        pickPoint = helpRay.intersectTriangle(helpRay.origin, helpRay.direction, this._triangle);
      }
      if (pickPoint) {
        return {
          distance: 0,
          intersectPoint: pickPoint
        };
      }
    } else {
      this.calculateHotArea_View(uiTransform, panelRatio, this._pt0, this._pt1, this._pt2, this._pt3);
      let screenSizeX = screenSize.x;
      let screenSizeY = screenSize.y;
      let minX = Math.min(this._pt0.x, this._pt1.x, this._pt2.x, this._pt3.x) + screenSizeX * 0.5;
      let minY = Math.min(this._pt0.y, this._pt1.y, this._pt2.y, this._pt3.y) + screenSizeY * 0.5;
      let maxX = Math.max(this._pt0.x, this._pt1.x, this._pt2.x, this._pt3.x) + screenSizeX * 0.5;
      let maxY = Math.max(this._pt0.y, this._pt1.y, this._pt2.y, this._pt3.y) + screenSizeY * 0.5;
      let pick = screenPos.x <= maxX && screenPos.x >= minX && screenPos.y <= maxY && screenPos.y >= minY;
      if (pick) {
        this._hitPoint.set(screenPos.x, screenPos.y, 0);
        return {
          distance: 0,
          intersectPoint: this._hitPoint
        };
      }
      return null;
    }
    return null;
  }
  static calculateHotArea_View(transform, panelRatio, pt0, pt1, pt2, pt3) {
    let uiMtx = transform.getWorldMatrix();
    let scaleX = uiMtx.getScaleX();
    let scaleY = uiMtx.getScaleY();
    let w = transform.width * 0.5 * scaleX;
    let h = transform.height * 0.5 * scaleY;
    pt0.set(-w, -h, 0);
    pt1.set(w, -h, 0);
    pt2.set(-w, h, 0);
    pt3.set(w, h, 0);
    let offset = uiMtx.tx;
    pt0.x += offset;
    pt1.x += offset;
    pt2.x += offset;
    pt3.x += offset;
    offset = uiMtx.ty;
    pt0.y -= offset;
    pt1.y -= offset;
    pt2.y -= offset;
    pt3.y -= offset;
    pt0.multiplyScalar(panelRatio);
    pt1.multiplyScalar(panelRatio);
    pt2.multiplyScalar(panelRatio);
    pt3.multiplyScalar(panelRatio);
  }
  static calculateHotArea_World(transform, pt0, pt1, pt2, pt3) {
    let uiMtx = transform.getWorldMatrix();
    let scaleX = uiMtx.getScaleX();
    let scaleY = uiMtx.getScaleY();
    let w = transform.width * 0.5 * scaleX;
    let h = transform.height * 0.5 * scaleY;
    pt0.set(-w, h, 0);
    pt1.set(w, h, 0);
    pt2.set(-w, -h, 0);
    pt3.set(w, -h, 0);
    let offset = uiMtx.tx;
    pt0.x += offset;
    pt1.x += offset;
    pt2.x += offset;
    pt3.x += offset;
    offset = uiMtx.ty;
    pt0.y += offset;
    pt1.y += offset;
    pt2.y += offset;
    pt3.y += offset;
  }
}

var TextAnchor = /* @__PURE__ */ ((TextAnchor2) => {
  TextAnchor2[TextAnchor2["UpperLeft"] = 0] = "UpperLeft";
  TextAnchor2[TextAnchor2["UpperCenter"] = 1] = "UpperCenter";
  TextAnchor2[TextAnchor2["UpperRight"] = 2] = "UpperRight";
  TextAnchor2[TextAnchor2["MiddleLeft"] = 3] = "MiddleLeft";
  TextAnchor2[TextAnchor2["MiddleCenter"] = 4] = "MiddleCenter";
  TextAnchor2[TextAnchor2["MiddleRight"] = 5] = "MiddleRight";
  TextAnchor2[TextAnchor2["LowerLeft"] = 6] = "LowerLeft";
  TextAnchor2[TextAnchor2["LowerCenter"] = 7] = "LowerCenter";
  TextAnchor2[TextAnchor2["LowerRight"] = 8] = "LowerRight";
  return TextAnchor2;
})(TextAnchor || {});
var Vertical = /* @__PURE__ */ ((Vertical2) => {
  Vertical2[Vertical2["Upper"] = 0] = "Upper";
  Vertical2[Vertical2["Middle"] = 1] = "Middle";
  Vertical2[Vertical2["Lower"] = 2] = "Lower";
  return Vertical2;
})(Vertical || {});
var Horizontal = /* @__PURE__ */ ((Horizontal2) => {
  Horizontal2[Horizontal2["Left"] = 0] = "Left";
  Horizontal2[Horizontal2["Center"] = 1] = "Center";
  Horizontal2[Horizontal2["Right"] = 2] = "Right";
  return Horizontal2;
})(Horizontal || {});
class TextFieldLine {
  charList = [];
  quadList = [];
  width = 0;
  index = 0;
}
class TextFieldLayout {
  layout(target) {
    let lineList = [];
    let originSize = target.originSize;
    let fontData = fonts.getFontData(target.font, originSize);
    let realSize = target.fontSize / originSize;
    this.makeTextLine(target.uiTransform, target.alignment, lineList, target.font, fontData, target.text, realSize, originSize, target.lineSpacing);
    return lineList;
  }
  makeTextLine(transform, alignment, lineList, fontName, fontData, text, realSize, originSize, lineSpacing) {
    let curLineIndex = -1;
    let offsetX = 0;
    let unitSize = originSize * realSize;
    let halfUnitSize = unitSize * 0.5;
    let maxTextWidthReal = transform.width / realSize;
    let maxTextHeightReal = transform.height / realSize;
    let transformOffsetX = 0;
    let transformOffsetY = transform.height;
    let makeLine = () => {
      offsetX = 0;
      curLineIndex++;
      let line = new TextFieldLine();
      line.index = curLineIndex;
      lineList.push(line);
      return line;
    };
    let makeQuad = (char, line) => {
      const code = char.charCodeAt(0).toString();
      let charSprite = fonts.getFnt(fontName, originSize, code);
      let quad = null;
      if (charSprite) {
        quad = GUIQuad.spawnQuad();
        quad.sprite = charSprite;
        quad.x = (offsetX + charSprite.xoffset) * realSize - transformOffsetX;
        quad.y = (fontData.base - charSprite.height - charSprite.yoffset - fontData.base) * realSize + transformOffsetY;
        quad.width = charSprite.offsetSize.width * realSize;
        quad.height = charSprite.offsetSize.height * realSize;
        offsetX += charSprite.xadvance;
      } else {
        if (char == "\n") ; else if (char == "	") {
          offsetX += unitSize;
        } else {
          offsetX += halfUnitSize;
        }
      }
      line.width = offsetX;
      line.quadList.push(quad);
      line.charList.push(char);
      return quad;
    };
    let alignTextLine = () => {
      let tuple = this.getAlignment(alignment);
      switch (tuple.v) {
        case 0 /* Upper */:
          for (let i = 0, countI = lineList.length; i < countI; i++) {
            let line = lineList[i];
            if (i > 0) {
              let lineOffsetY = i * unitSize * lineSpacing;
              for (let j = 0, countJ = line.quadList.length; j < countJ; j++) {
                let quad = line.quadList[j];
                if (quad) {
                  quad.y -= lineOffsetY;
                }
              }
            }
          }
          break;
        case 1 /* Middle */:
          for (let i = 0, countI = lineList.length; i < countI; i++) {
            let line = lineList[i];
            let lineOffsetY = (maxTextHeightReal - countI * originSize * lineSpacing) * 0.5 * realSize + i * unitSize * lineSpacing;
            for (let j = 0, countJ = line.quadList.length; j < countJ; j++) {
              let quad = line.quadList[j];
              if (quad) {
                quad.y -= lineOffsetY;
              }
            }
          }
          break;
        case 2 /* Lower */:
          for (let i = 0, countI = lineList.length; i < countI; i++) {
            let line = lineList[i];
            let lineOffsetY = (maxTextHeightReal - countI * originSize * lineSpacing) * realSize + i * unitSize * lineSpacing;
            for (let j = 0, countJ = line.quadList.length; j < countJ; j++) {
              let quad = line.quadList[j];
              if (quad) {
                quad.y -= lineOffsetY;
              }
            }
          }
          break;
      }
      switch (tuple.h) {
        case 0 /* Left */:
          break;
        case 1 /* Center */:
          for (let i = 0, countI = lineList.length; i < countI; i++) {
            let line = lineList[i];
            let lineOffsetX = (maxTextWidthReal - line.width) * 0.5 * realSize;
            for (let j = 0, countJ = line.quadList.length; j < countJ; j++) {
              let quad = line.quadList[j];
              if (quad) {
                quad.x += lineOffsetX;
              }
            }
          }
          break;
        case 2 /* Right */:
          for (let i = 0, countI = lineList.length; i < countI; i++) {
            let line = lineList[i];
            let lineOffsetX = (maxTextWidthReal - line.width) * realSize;
            for (let j = 0, countJ = line.quadList.length; j < countJ; j++) {
              let quad = line.quadList[j];
              if (quad) {
                quad.x += lineOffsetX;
              }
            }
          }
          break;
      }
    };
    let parseText = () => {
      let curLine = null;
      let totalLength = text.length;
      for (let i = 0; i < totalLength; i++) {
        curLine ||= makeLine();
        let char = text.charAt(i);
        if (char == "\n" || char == "	") {
          curLine = null;
        } else {
          makeQuad(char, curLine);
          let autoWrap = curLine.width + halfUnitSize >= maxTextWidthReal;
          if (autoWrap) {
            curLine = makeLine();
          }
        }
      }
    };
    parseText();
    alignTextLine();
  }
  getAlignment(alignment) {
    let ret = { v: 0 /* Upper */, h: 0 /* Left */ };
    switch (alignment) {
      case 1 /* UpperCenter */:
        ret.v = 0 /* Upper */;
        ret.h = 1 /* Center */;
        break;
      case 0 /* UpperLeft */:
        ret.v = 0 /* Upper */;
        ret.h = 0 /* Left */;
        break;
      case 2 /* UpperRight */:
        ret.v = 0 /* Upper */;
        ret.h = 2 /* Right */;
        break;
      case 4 /* MiddleCenter */:
        ret.v = 1 /* Middle */;
        ret.h = 1 /* Center */;
        break;
      case 3 /* MiddleLeft */:
        ret.v = 1 /* Middle */;
        ret.h = 0 /* Left */;
        break;
      case 5 /* MiddleRight */:
        ret.v = 1 /* Middle */;
        ret.h = 2 /* Right */;
        break;
      case 7 /* LowerCenter */:
        ret.v = 2 /* Lower */;
        ret.h = 1 /* Center */;
        break;
      case 6 /* LowerLeft */:
        ret.v = 2 /* Lower */;
        ret.h = 0 /* Left */;
        break;
      case 8 /* LowerRight */:
        ret.v = 2 /* Lower */;
        ret.h = 2 /* Right */;
        break;
    }
    return ret;
  }
}

class UIInteractive extends UIComponentBase {
  _style = UIInteractiveStyle.NORMAL;
  _interactive = false;
  set interactive(value) {
    this._interactive = value;
  }
  get interactive() {
    return this._interactive;
  }
  set mouseStyle(value) {
    this._style = value;
  }
  get interactiveVisible() {
    return this._uiTransform.globalVisible && this._visible;
  }
  init(param) {
    super.init(param);
    this._uiTransform.addUIInteractive(this);
  }
  destroy() {
    this._uiTransform.removeUIInteractive(this);
    super.destroy();
  }
  rayPick(ray, panel, screenPos, screenSize) {
    return GUIPickHelper.rayPick(ray, screenPos, screenSize, panel.space, panel.panelRatio, this._uiTransform, panel.transform.worldMatrix);
  }
  cloneTo(obj) {
    let component = obj.getOrAddComponent(UIInteractive);
    component.copyComponent(this);
  }
  copyComponent(from) {
    super.copyComponent(from);
    this.enable = from._enable;
    this.interactive = from._interactive;
    this.mouseStyle = from._style;
    return this;
  }
}

var UIButtonTransition = /* @__PURE__ */ ((UIButtonTransition2) => {
  UIButtonTransition2[UIButtonTransition2["NONE"] = 0] = "NONE";
  UIButtonTransition2[UIButtonTransition2["COLOR"] = 1] = "COLOR";
  UIButtonTransition2[UIButtonTransition2["SPRITE"] = 2] = "SPRITE";
  return UIButtonTransition2;
})(UIButtonTransition || {});
class UIButton extends UIInteractive {
  _spriteMap;
  _colorMap;
  _image;
  _isCreateImage;
  _transition = 2 /* SPRITE */;
  init(param) {
    super.init(param);
    this._interactive = true;
    this._spriteMap = /* @__PURE__ */ new Map();
    this._colorMap = /* @__PURE__ */ new Map();
    this._image = this.object3D.getComponent(UIImage);
    this._isCreateImage = this._image == null;
    if (!this._image) {
      this._image = this.object3D.addComponent(UIImage);
    }
    this.imageType = ImageType.Sliced;
  }
  onEnable() {
    this.mouseStyle = UIInteractiveStyle.NORMAL;
  }
  onDisable() {
    this.mouseStyle = UIInteractiveStyle.DISABLE;
  }
  set transition(value) {
    if (this._transition != value) {
      this._transition = value;
      this.validateStyle(this._style, true);
    }
  }
  get transition() {
    return this._transition;
  }
  get imageType() {
    return this._image.imageType;
  }
  set imageType(value) {
    this._image.imageType = value;
  }
  setStyleColor(style, color) {
    this._colorMap.set(style, color);
    if (this._style == style) {
      this.validateStyle(this._style, true);
    }
    return this;
  }
  getStyleColor(style) {
    return this._colorMap.get(style);
  }
  set mouseStyle(value) {
    super.mouseStyle = value;
    this.validateStyle(value, true);
  }
  get normalSprite() {
    return this._spriteMap.get(UIInteractiveStyle.NORMAL);
  }
  set normalSprite(value) {
    this._spriteMap.set(UIInteractiveStyle.NORMAL, value);
    if (this._style == UIInteractiveStyle.NORMAL) {
      this.validateStyle(this._style, true);
    }
  }
  get overSprite() {
    return this._spriteMap.get(UIInteractiveStyle.OVER);
  }
  set overSprite(value) {
    this._spriteMap.set(UIInteractiveStyle.OVER, value);
    if (this._style == UIInteractiveStyle.OVER) {
      this.validateStyle(this._style, true);
    }
  }
  set downSprite(value) {
    this._spriteMap.set(UIInteractiveStyle.DOWN, value);
    if (this._style == UIInteractiveStyle.DOWN) {
      this.validateStyle(this._style, true);
    }
  }
  get downSprite() {
    return this._spriteMap.get(UIInteractiveStyle.DOWN);
  }
  set disableSprite(value) {
    this._spriteMap.set(UIInteractiveStyle.DISABLE, value);
    if (this._style == UIInteractiveStyle.DISABLE) {
      this.validateStyle(this._style, true);
    }
  }
  get disableSprite() {
    return this._spriteMap.get(UIInteractiveStyle.DISABLE);
  }
  validateStyle(style, force) {
    if (this._transition & 2 /* SPRITE */) {
      let texture = this._spriteMap.get(style);
      this._image.sprite = texture;
    }
    if (this._transition & 1 /* COLOR */) {
      let color = this._colorMap.get(style);
      color && (this._image.color = color);
    }
  }
  cloneTo(obj) {
    let component = obj.getOrAddComponent(UIButton);
    component.copyComponent(this);
  }
  copyComponent(from) {
    super.copyComponent(from);
    this.imageType = from.imageType;
    this.transition = from.transition;
    from._spriteMap.forEach((v, k) => {
      v && this._spriteMap.set(k, v);
    });
    from._colorMap.forEach((v, k) => {
      v && this._colorMap.set(k, v.clone());
    });
    this.mouseStyle = from.mouseStyle;
    return this;
  }
  destroy() {
    if (this._isCreateImage && this._image) {
      this.object3D.removeComponent(UIImage);
      this._image = null;
    }
    super.destroy();
  }
}

class UIImageGroup extends UIRenderAble {
  _count = 0;
  constructor() {
    super();
  }
  init(param) {
    super.init?.(param);
    this._count = param ? param.count : 1;
    for (let i = 0; i < this._count; i++) {
      this.attachQuad(GUIQuad.spawnQuad());
    }
    this._uiTransform.resize(0, 0);
  }
  getQuad(index) {
    return this._mainQuads[index];
  }
  cloneTo(obj) {
    let component = obj.addComponent(UIImageGroup, { count: this._count });
    component.copyComponent(this);
  }
  copyComponent(from) {
    super.copyComponent(from);
    for (let i = 0; i < from._count; i++) {
      this.setSprite(i, from.getSprite(i));
      this.setColor(i, from.getColor(i));
      this.setImageType(i, from.getImageType(i));
    }
    return this;
  }
  setSprite(index, value) {
    this._mainQuads[index].sprite = value || Engine3D.res.defaultGUISprite;
    this.setShadowDirty();
  }
  getSprite(index) {
    return this._mainQuads[index].sprite;
  }
  onUIComponentVisible(visible) {
    this.applyComponentVisible();
  }
  onUITransformVisible(visible) {
    this.applyComponentVisible();
  }
  applyComponentVisible() {
    let isHidden = !this._visible || !this._uiTransform.globalVisible;
    for (let item of this._mainQuads) {
      item.visible = !isHidden;
    }
    this.setShadowDirty();
  }
  getColor(index) {
    return this._mainQuads[index].color;
  }
  setColor(index, value) {
    this._mainQuads[index].color = value;
    this.setShadowDirty();
  }
  getImageType(index) {
    return this._mainQuads[index].imageType;
  }
  setImageType(index, value) {
    this._mainQuads[index].imageType = value;
    this.setShadowDirty();
  }
  setSize(index, width, height) {
    this._mainQuads[index].setSize(width, height);
    this.setShadowDirty();
  }
  setXY(index, x, y) {
    this._mainQuads[index].setXY(x, y);
    this.setShadowDirty();
  }
  getXY(index, ret) {
    ret ||= new Vector2();
    let quad = this._mainQuads[index];
    ret.x = quad.x;
    ret.y = quad.y;
    return ret;
  }
}

class UIShadow extends UIRenderAble {
  _shadowQuality = 1;
  _shadowOffset;
  _shadowRadius;
  _shadowColor;
  _subShadowColor;
  needUpdateShadow = false;
  init(param) {
    super.init?.(param);
    this._shadowRadius = 2;
    this._shadowQuality = 1;
    this._shadowOffset = new Vector2(4, -4);
    this._shadowColor = new Color(0.1, 0.1, 0.1, 0.8);
    this._subShadowColor = this._shadowColor.clone();
    this.isUIShadow = true;
  }
  cloneTo(obj) {
    let component = obj.getOrAddComponent(UIShadow);
    component.copyComponent(this);
  }
  copyComponent(from) {
    super.copyComponent(this);
    this._shadowColor = from._shadowColor;
    this._shadowOffset = from._shadowOffset;
    this._shadowRadius = from._shadowRadius;
    this._shadowQuality = from.shadowQuality;
    return this;
  }
  get shadowColor() {
    return this._shadowColor;
  }
  set shadowColor(value) {
    this._shadowColor.copyFrom(value);
    this.needUpdateShadow = true;
  }
  set shadowQuality(value) {
    value = clamp(value, 0, 4);
    if (this._shadowQuality != value) {
      this._shadowQuality = value;
      this.needUpdateShadow = true;
    }
  }
  get shadowQuality() {
    return this._shadowQuality;
  }
  set shadowOffset(value) {
    this._shadowOffset = value;
    this.needUpdateShadow = true;
  }
  get shadowOffset() {
    this._shadowOffset ||= new Vector2(4, -4);
    return this._shadowOffset;
  }
  set shadowRadius(value) {
    if (this._shadowRadius != value) {
      this._shadowRadius = value;
      this.applyShadow();
    }
  }
  get shadowRadius() {
    return this._shadowRadius;
  }
  onUpdate(view) {
    if (this.needUpdateShadow) {
      this.applyShadow();
      this.needUpdateShadow = false;
    }
  }
  applyShadow() {
    this.detachQuads();
    if (this._shadowSource) {
      if (this._shadowQuality > 0) {
        let quads = this._shadowSource.mainQuads;
        if (quads.length > 0) {
          for (let quad of quads) {
            this.createQuadShadow(quad);
          }
        }
      }
    }
    this._uiTransform.setNeedUpdateUIPanel();
  }
  createQuadShadow(sourceQuad) {
    let shadowCount = this._shadowQuality;
    let pi2 = Math.PI * 2;
    this._subShadowColor.copyFrom(this._shadowColor);
    this._subShadowColor.a = 1 / Math.max(1, shadowCount);
    for (let i = 0; i < shadowCount; i++) {
      let item = GUIQuad.spawnQuad();
      let offsetX = 0;
      let offsetY = 0;
      if (i == 0) {
        item.color = this._shadowColor;
      } else {
        let angle = pi2 * (i - 1) / (shadowCount - 1);
        offsetX = Math.sin(angle) * this._shadowRadius;
        offsetY = Math.cos(angle) * this._shadowRadius;
        item.color = this._subShadowColor;
      }
      item.setXY(offsetX + this._shadowOffset.x + sourceQuad.x, offsetY + this._shadowOffset.y + sourceQuad.y);
      item.setSize(sourceQuad.width, sourceQuad.height);
      item.sprite = sourceQuad.sprite;
      item.visible = sourceQuad.visible;
      item.imageType = sourceQuad.imageType;
      this.attachQuad(item);
    }
  }
}

class UITextField extends UIRenderAble {
  _font = "微软雅黑";
  _fontSize = 14;
  _originSize = 42;
  _alignment = 0;
  _lineSpacing = 1;
  _text = "";
  _color = new Color(1, 1, 1, 1);
  constructor() {
    super();
  }
  cloneTo(obj) {
    let component = obj.getOrAddComponent(UITextField);
    component.copyComponent(this);
  }
  copyComponent(from) {
    super.copyComponent(from);
    this._font = from._font;
    this._fontSize = from._fontSize;
    this._originSize = from._originSize;
    this._alignment = from._alignment;
    this._lineSpacing = from._lineSpacing;
    this._color.copyFrom(from._color);
    this.text = from.text;
    return this;
  }
  get originSize() {
    return this._originSize;
  }
  get font() {
    return this._font;
  }
  set font(value) {
    this._font = value;
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(value) {
    if (this._fontSize != value) {
      this._fontSize = value;
      this.layoutText();
    }
  }
  get text() {
    return this._text;
  }
  set text(value) {
    if (this._text != value) {
      if (!value) value = "";
      this._text = value;
      this.layoutText();
    }
  }
  textLine = null;
  layoutProxy = new TextFieldLayout();
  layoutText() {
    this.detachQuads();
    this.textLine = this.layoutProxy.layout(this);
    for (let i = 0, count = this.textLine.length; i < count; i++) {
      let line = this.textLine[i];
      for (let j = 0, count2 = line.quadList.length; j < count2; j++) {
        let quad = line.quadList[j];
        if (quad) {
          this.attachQuad(quad);
        }
      }
    }
    this.color = this._color;
    this._uiTransform.setNeedUpdateUIPanel();
    this.onUIComponentVisible(this._visible);
    this.setShadowDirty();
  }
  onUIComponentVisible(visible) {
    this.applyComponentVisible();
  }
  onUITransformVisible(visible) {
    this.applyComponentVisible();
  }
  applyComponentVisible() {
    let isHidden = !this._visible || !this._uiTransform.globalVisible;
    for (let quad of this._mainQuads) {
      quad && (quad.visible = !isHidden);
    }
    this.setShadowDirty();
  }
  onTransformResize() {
    this.layoutText();
  }
  get color() {
    return this._color;
  }
  set color(value) {
    this._color.copyFrom(value);
    for (let quad of this._mainQuads) {
      quad.color = value;
    }
    this.setShadowDirty();
  }
  get alignment() {
    return this._alignment;
  }
  set alignment(value) {
    if (this._alignment != value) {
      this._alignment = value;
      this.layoutText();
    }
  }
  get lineSpacing() {
    return this._lineSpacing;
  }
  set lineSpacing(value) {
    if (this._lineSpacing != value) {
      this._lineSpacing = value;
      this.layoutText();
    }
  }
}

class Probe extends Object3D {
  index = 0;
  drawCallFrame = -1;
  constructor() {
    super();
  }
}

var GIProbeMaterialType = /* @__PURE__ */ ((GIProbeMaterialType2) => {
  GIProbeMaterialType2[GIProbeMaterialType2["CastGI"] = 0] = "CastGI";
  GIProbeMaterialType2[GIProbeMaterialType2["ReceiveGI"] = 1] = "ReceiveGI";
  GIProbeMaterialType2[GIProbeMaterialType2["CastDepth"] = 2] = "CastDepth";
  GIProbeMaterialType2[GIProbeMaterialType2["Other"] = 3] = "Other";
  return GIProbeMaterialType2;
})(GIProbeMaterialType || {});
class GIProbeMaterial extends Material {
  static count = 0;
  constructor(type = 0 /* CastGI */, index = 0) {
    super();
    ShaderLib.register("GIProbeShader", GIProbeShader);
    let newShader = new Shader();
    let colorShader = new RenderShaderPass("GIProbeShader", "GIProbeShader");
    colorShader.passType = PassType.COLOR;
    newShader.addRenderPass(colorShader);
    colorShader.setDefine("USE_BRDF", true);
    colorShader.setShaderEntry(`VertMain`, `FragMain`);
    colorShader.setUniformVector4("probeUniform", new Vector4(index, type, 0, 0));
    let shaderState = colorShader.shaderState;
    shaderState.acceptShadow = false;
    shaderState.castShadow = false;
    shaderState.receiveEnv = false;
    shaderState.acceptGI = false;
    shaderState.useLight = false;
    newShader.setTexture("baseMap", Engine3D.res.whiteTexture);
    newShader.setTexture("normalMap", Engine3D.res.normalTexture);
    newShader.setTexture("emissiveMap", Engine3D.res.blackTexture);
    this.shader = newShader;
  }
}

class GlobalIlluminationComponent extends ComponentBase {
  _probes;
  _volume;
  _debugMr = [];
  init(scene) {
    scene ||= Engine3D.views[0]?.scene;
    Engine3D.setting.gi.enable = true;
    this._volume = GlobalBindGroup.getLightEntries(scene).irradianceVolume;
    this.initProbe(scene);
  }
  initProbe(scene) {
    let xCount = this._volume.setting.probeXCount;
    let yCount = this._volume.setting.probeYCount;
    let zCount = this._volume.setting.probeZCount;
    let debugGeo = new SphereGeometry(4, 16, 16);
    let position = new Vector3();
    this._probes = [];
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        for (let z = 0; z < zCount; z++) {
          let index = x + z * xCount + y * (xCount * zCount);
          let probe = new Probe();
          probe.index = index;
          probe.name = `${x}_${y}_${z}`;
          let mr = probe.addComponent(MeshRenderer);
          mr.material = new GIProbeMaterial(GIProbeMaterialType.CastGI, index);
          mr.geometry = debugGeo;
          mr.castGI = false;
          mr.castShadow = false;
          this._debugMr.push(mr);
          this.object3D.addChild(probe);
          this._volume.calcPosition(x, y, z, position);
          probe.x = position.x;
          probe.y = position.y;
          probe.z = position.z;
          this._probes[index] = probe;
          this._debugMr.push(mr);
        }
      }
    }
    for (let i = 0; i < this._probes.length; i++) {
      EntityCollect.instance.addGIProbe(scene, this._probes[i]);
    }
    this.object3D.transform.enable = false;
    if (this._volume.setting.debug) {
      this.debug();
    }
  }
  debug() {
  }
  debugProbeRay(probeIndex, array) {
    const rayNumber = Engine3D.setting.gi.rayNumber;
    let quat = new Quaternion(0, -0.7071067811865475, 0.7071067811865475, 0);
    for (let i = 0; i < rayNumber; i++) {
      let ii = probeIndex * rayNumber + i;
      let dir = new Vector3(
        -array[ii * 4 + 0],
        -array[ii * 4 + 1],
        -array[ii * 4 + 2],
        0
      );
      quat.transformVector(dir, dir);
      let len = array[ii * 4 + 3];
      let start = this._probes[probeIndex].transform.worldPosition.clone();
      let end = dir.scaleBy(len);
      end.add(start, end);
    }
  }
  changeProbesVolumeData() {
    this._volume.setVolumeDataChange();
  }
  changeProbesPosition() {
    this._volume.setVolumeDataChange();
    let xCount = this._volume.setting.probeXCount;
    let yCount = this._volume.setting.probeYCount;
    let zCount = this._volume.setting.probeZCount;
    let position = new Vector3();
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        for (let z = 0; z < zCount; z++) {
          let index = x + z * xCount + y * (xCount * zCount);
          let probe = this._probes[index];
          this._volume.calcPosition(x, y, z, position);
          probe.x = position.x;
          probe.y = position.y;
          probe.z = position.z;
        }
      }
    }
  }
  onUpdate() {
    Engine3D.setting.gi.maxDistance = Engine3D.setting.gi.probeSpace * 1.5;
    let camera = this.transform.scene3D.view.camera;
    let scale = Vector3.distance(camera.transform.worldPosition, camera.transform.targetPos) / 300;
    if (this._debugMr && this._debugMr.length > 0) {
      for (let i = 0; i < this._debugMr.length; i++) {
        const debugOBJ = this._debugMr[i].transform;
        debugOBJ.scaleX = scale;
        debugOBJ.scaleY = scale;
        debugOBJ.scaleZ = scale;
      }
    }
  }
}

class CapsuleColliderShape extends ColliderShape {
  /**
   * The radius of the local width of the collision body.
   */
  radius = 2.5;
  /**
   * The total height of the collision body.
   */
  height = 10;
  constructor() {
    super();
    this._shapeType = ColliderShapeType.Capsule;
  }
  // constructor(center: Vector3, radius: number, height: number) {
  //   super(center, new Vector3(radius, radius, radius));
  //   this.radius = radius;
  //   this.height = height;
  // }
}

class MeshColliderShape extends ColliderShape {
  /**
   * meshComponent
   */
  mesh;
  static triangle;
  _pickRet;
  constructor() {
    super();
    this._shapeType = ColliderShapeType.Mesh;
  }
  rayPick(ray, fromMatrix) {
    if (this.mesh) {
      MeshColliderShape.triangle ||= new Triangle(new Vector3(), new Vector3(), new Vector3());
      let positionAttribute = this.mesh.getAttribute(VertexAttributeName.position);
      let indexAttribute = this.mesh.getAttribute(VertexAttributeName.indices);
      let helpMatrix = ColliderShape.helpMatrix;
      helpMatrix.copyFrom(fromMatrix).invert();
      let helpRay = ColliderShape.helpRay.copy(ray);
      helpRay.applyMatrix(helpMatrix);
      helpRay.intersectBox(this.mesh.bounds);
      let pick = helpRay.intersectBox(this.mesh.bounds, ColliderShape.v3_help_0);
      if (!pick) {
        return null;
      }
      if (indexAttribute && positionAttribute && indexAttribute.data.length > 0) {
        let vertexData = positionAttribute.data;
        for (let i = 0, c = indexAttribute.data.length / 3; i < c; i++) {
          let offsetIndex = i * 3;
          const i1 = indexAttribute.data[offsetIndex + 0] * 3;
          const i2 = indexAttribute.data[offsetIndex + 1] * 3;
          const i3 = indexAttribute.data[offsetIndex + 2] * 3;
          let triangle = MeshColliderShape.triangle;
          let p1 = triangle.v1.set(vertexData[i1 + 0], vertexData[i1 + 1], vertexData[i1 + 2]);
          let p2 = triangle.v2.set(vertexData[i2 + 0], vertexData[i2 + 1], vertexData[i2 + 2]);
          let p3 = triangle.v3.set(vertexData[i3 + 0], vertexData[i3 + 1], vertexData[i3 + 2]);
          triangle.set(p1, p2, p3);
          let pick2 = helpRay.intersectTriangle(helpRay.origin, helpRay.direction, triangle);
          if (pick2) {
            this._pickRet ||= { intersectPoint: new Vector3(), distance: 0 };
            this._pickRet.intersectPoint = pick2;
            this._pickRet.distance = Vector3.distance(helpRay.origin, pick2);
            let normalAttribute = this.mesh.getAttribute(VertexAttributeName.normal);
            if (normalAttribute) {
              let normalData = normalAttribute.data;
              let normal = new Vector3(normalData[i1], normalData[i1 + 1], normalData[i1 + 2]);
              fromMatrix.transformVector(normal, normal);
              normal.normalize();
              this._pickRet.normal = normal;
            }
            return this._pickRet;
          }
        }
      }
    }
    return null;
  }
}

class SphereColliderShape extends ColliderShape {
  _pickRet;
  box;
  /**
   * radius of this collider
   */
  radius = 0.5;
  /**
   * @constructor
   * @param radius radius of this collider
   */
  constructor(radius) {
    super();
    this._shapeType = ColliderShapeType.Sphere;
    this.radius = radius;
    this.box = new BoundingSphere(new Vector3(), 1);
  }
  rayPick(ray, fromMatrix) {
    let box = this.box;
    box.setFromCenterAndSize(this.center, this.radius);
    let helpMatrix = ColliderShape.helpMatrix;
    helpMatrix.copyFrom(fromMatrix).invert();
    let helpRay = ColliderShape.helpRay.copy(ray);
    helpRay.applyMatrix(helpMatrix);
    let pick = helpRay.intersectSphere(helpRay.origin, helpRay.direction, this.box.center, this.box.radius);
    if (pick) {
      if (!this._pickRet) {
        this._pickRet = { intersect: false, intersectPoint: new Vector3(), distance: 0 };
      }
      this._pickRet.intersect = true;
      this._pickRet.intersectPoint = pick;
      this._pickRet.distance = Vector3.distance(helpRay.origin, ColliderShape.v3_help_0);
      return this._pickRet;
    }
    return null;
  }
}

class Section {
  normal;
  fixNormal;
  center;
  rotateShape;
  distance = 0;
  index;
  constructor(i) {
    this.index = i;
    this.rotateShape = [];
  }
}
class ExtrudeGeometry extends GeometryBase {
  vScale;
  uNegate;
  sections;
  /**
   * for the points of start and end:
   * Please ensure that you do not actively clone the starting point to the end of the shape array;
   * closed: true.
   *       if you want them closed, it'll auto clone start point.
   * closed: false.
   *  
   * @param shaderReflection ShaderReflection
   */
  build(shape, isShapeClosed, path, vScale = 1, uNegate = true) {
    if (path.length < 2) {
      throw new Error("path length is not enough");
    }
    this.vScale = vScale;
    this.uNegate = uNegate;
    shape = shape.slice();
    isShapeClosed && shape.push(shape[0]);
    this.sections = this.buildSections(shape, path);
    this.buildGeometry(shape, this.sections);
    this.bounds = new BoundingBox(Vector3.ZERO.clone(), new Vector3(100, 100, 100));
    return this;
  }
  buildSections(shape, path) {
    let curPoint;
    let nextPoint;
    let normal;
    let sections = [];
    let sectionCount = path.length;
    for (let i = 0; i < sectionCount; i++) {
      let section = new Section(i);
      curPoint = path[i];
      nextPoint = path[i + 1];
      section.center = curPoint.clone();
      if (nextPoint == null) {
        section.normal = normal.clone();
        section.distance = 0;
      } else {
        normal = nextPoint.subtract(curPoint);
        section.distance = normal.length;
        section.normal = normal.normalize();
      }
      sections.push(section);
    }
    sections[0].fixNormal = sections[0].normal.clone();
    for (let i = 1; i < sectionCount; i++) {
      let lastSection = sections[i - 1];
      let curSection = sections[i];
      curSection.fixNormal = curSection.normal.add(lastSection.normal).normalize();
    }
    let matrixRotate = new Matrix4().identity();
    for (let i = 0; i < sectionCount; i++) {
      let curSection = sections[i];
      let fromDirection;
      let sourceShape;
      if (i == 0) {
        fromDirection = Vector3.UP;
        sourceShape = shape;
      } else {
        let lastSection = sections[i - 1];
        fromDirection = lastSection.fixNormal;
        sourceShape = lastSection.rotateShape;
      }
      Matrix4.fromToRotation(fromDirection, curSection.fixNormal, matrixRotate);
      for (let i2 = 0, count = shape.length; i2 < count; i2++) {
        let newPoint = matrixRotate.multiplyPoint3(sourceShape[i2]);
        curSection.rotateShape.push(newPoint);
      }
    }
    return sections;
  }
  buildGeometry(shape, sections) {
    let sectionCount = sections.length;
    let shapeVertexCount = shape.length;
    let totalVertexCount = sectionCount * shapeVertexCount;
    let segmentCount = sectionCount - 1;
    let position_arr = new Float32Array(totalVertexCount * 3);
    let normal_arr = new Float32Array(totalVertexCount * 3);
    let uv_arr = new Float32Array(totalVertexCount * 2);
    let indices_arr = new Uint32Array(segmentCount * (shapeVertexCount - 1) * 6);
    let quadCount = shapeVertexCount - 1;
    let vDistance = 0;
    let uDistance = 0;
    let uList = [0];
    for (let i = 1; i < shapeVertexCount; i++) {
      uDistance += shape[i - 1].subtract(shape[i]).length;
      uList.push(uDistance);
    }
    for (let i = 0; i < sectionCount; i++) {
      let section = sections[i];
      for (let j = 0; j < shapeVertexCount; j++) {
        let pos_offset = (i * shapeVertexCount + j) * 3;
        let vertex = section.rotateShape[j].add(section.center);
        position_arr[pos_offset] = vertex.x;
        position_arr[pos_offset + 1] = vertex.y;
        position_arr[pos_offset + 2] = vertex.z;
        normal_arr[pos_offset + 1] = 1;
        let uv_offset = (i * shapeVertexCount + j) * 2;
        let u = uList[j] / uDistance;
        uv_arr[uv_offset] = this.uNegate ? 1 - u : u;
        uv_arr[uv_offset + 1] = vDistance * this.vScale;
      }
      vDistance += section.distance;
    }
    let index = 0;
    for (let i = 0; i < segmentCount; i++) {
      let vertexOffset = i * shapeVertexCount;
      for (let j = 0; j < quadCount; j++) {
        let vertex_rb = j;
        let vertex_lb = j + 1;
        let vertex_rt = vertex_rb + shapeVertexCount;
        let vertex_lt = vertex_lb + shapeVertexCount;
        indices_arr[index++] = vertex_rb + vertexOffset;
        indices_arr[index++] = vertex_lb + vertexOffset;
        indices_arr[index++] = vertex_rt + vertexOffset;
        indices_arr[index++] = vertex_lb + vertexOffset;
        indices_arr[index++] = vertex_lt + vertexOffset;
        indices_arr[index++] = vertex_rt + vertexOffset;
      }
    }
    this.setIndices(indices_arr);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
    this.computeNormals();
    return this;
  }
}

class VertexBufferLayout {
  name;
  offset;
  size;
  arrayStride;
  stepMode;
  attributes;
}
class VertexAttribute {
  name;
  format;
  offset;
  shaderLocation;
  stride;
}

var VertexAttributeStride = /* @__PURE__ */ ((VertexAttributeStride2) => {
  VertexAttributeStride2[VertexAttributeStride2["position"] = 3] = "position";
  VertexAttributeStride2[VertexAttributeStride2["normal"] = 3] = "normal";
  VertexAttributeStride2[VertexAttributeStride2["TANGENT"] = 4] = "TANGENT";
  VertexAttributeStride2[VertexAttributeStride2["uv"] = 2] = "uv";
  VertexAttributeStride2[VertexAttributeStride2["TEXCOORD_1"] = 2] = "TEXCOORD_1";
  VertexAttributeStride2[VertexAttributeStride2["color"] = 4] = "color";
  VertexAttributeStride2[VertexAttributeStride2["joints0"] = 4] = "joints0";
  VertexAttributeStride2[VertexAttributeStride2["weights0"] = 4] = "weights0";
  VertexAttributeStride2[VertexAttributeStride2["joints1"] = 4] = "joints1";
  VertexAttributeStride2[VertexAttributeStride2["weights1"] = 4] = "weights1";
  VertexAttributeStride2[VertexAttributeStride2["vIndex"] = 1] = "vIndex";
  VertexAttributeStride2[VertexAttributeStride2["weight"] = 1] = "weight";
  VertexAttributeStride2[VertexAttributeStride2["a_morphPositions_0"] = 3] = "a_morphPositions_0";
  return VertexAttributeStride2;
})(VertexAttributeStride || {});

class MatrixDO {
  constructor() {
  }
}

class IKDTreeUserData {
  get data() {
    return null;
  }
  entity;
}

class KDTreeEntity extends KDTreeUUID {
  userData;
  node;
  constructor(data) {
    super();
    this.userData = data;
  }
  centerValue(dimension) {
    return 0;
  }
  isInNode(node, dimension) {
    return false;
  }
  entityContainPoint(point) {
    return false;
  }
  squareDistanceTo(point, dimensions) {
    return Number.MAX_VALUE;
  }
  entityIntersectsBox(box) {
    return false;
  }
  entityIntersectsRay(ray, target) {
    return false;
  }
  attachTreeNode(node) {
    if (this.node) this.detachTreeNode();
    this.node = node;
    return this.node.pushEntity(this);
  }
  detachTreeNode() {
    let success = this.node.removeEntity(this);
    this.node = null;
    return success;
  }
  updateNode(root) {
    let lastNode = this.node;
    if (lastNode) this.detachTreeNode();
    root.updateEntity(this);
    if (lastNode) lastNode.autoClear();
  }
}

class QuadAABB {
  minPosX = 0;
  minPosY = 0;
  maxPosX = 0;
  maxPosY = 0;
  testID = 0;
  points;
  offsetPosition;
  static TINY = 1e-6;
  constructor() {
    this.points = new Array();
    this.offsetPosition = new Vector3(0, 0, 0, 0);
    this.clear();
  }
  setAABox(cx, cy, sideX, sideY) {
    this.minPosX = cx - sideX / 2 - QuadAABB.TINY;
    this.maxPosX = cx + sideX / 2 + QuadAABB.TINY;
    this.minPosY = cy - sideY / 2 - QuadAABB.TINY;
    this.maxPosY = cy + sideY / 2 + QuadAABB.TINY;
    this.offsetPosition.setTo(0, 0, 0);
  }
  setOffset(vec) {
    this.maxPosX += vec.x - this.offsetPosition.x;
    this.minPosX += vec.x - this.offsetPosition.x;
    this.minPosY += vec.z - this.offsetPosition.z;
    this.maxPosY += vec.z - this.offsetPosition.z;
    this.offsetPosition.copyFrom(vec);
  }
  setContainRect(minX, minY, maxX, maxY) {
    if (this.minPosX > minX) this.minPosX = minX;
    if (this.minPosY > minY) this.minPosY = minY;
    if (this.maxPosX < maxX) this.maxPosX = maxX;
    if (this.maxPosY < maxY) this.maxPosY = maxY;
  }
  clear() {
    var huge = 1e9;
    this.minPosX = this.minPosY = huge;
    this.maxPosX = this.maxPosY = -huge;
    this.points.length = 0;
    this.testID = 0;
    this.offsetPosition.setTo(0, 0, 0);
  }
  addPoint(pos) {
    if (this.points.indexOf(pos) == -1) {
      if (pos.x < this.minPosX)
        this.minPosX = pos.x - QuadAABB.TINY;
      if (pos.x > this.maxPosX)
        this.maxPosX = pos.x + QuadAABB.TINY;
      if (pos.z < this.minPosY)
        this.minPosY = pos.z - QuadAABB.TINY;
      if (pos.z > this.maxPosY)
        this.maxPosY = pos.z + QuadAABB.TINY;
      this.points.push(pos);
    }
  }
  clone() {
    var aabb = new QuadAABB();
    aabb.minPosX = this.minPosX;
    aabb.minPosY = this.minPosY;
    aabb.maxPosX = this.maxPosX;
    aabb.maxPosY = this.maxPosY;
    return aabb;
  }
  get radius() {
    return Math.sqrt((this.maxPosY - this.minPosY) * (this.maxPosY - this.minPosY) + (this.maxPosX - this.minPosX) * (this.maxPosX - this.minPosX));
  }
  get sideX() {
    return this.maxPosX - this.minPosX;
  }
  get sideY() {
    return this.maxPosY - this.minPosY;
  }
  get centreX() {
    return (this.maxPosX - this.minPosX) * 0.5 + this.minPosX;
  }
  get centreY() {
    return (this.maxPosY - this.minPosY) * 0.5 + this.minPosY;
  }
  overlapTest(box) {
    return this.minPosY >= box.maxPosY || this.maxPosY <= box.minPosY || this.minPosX >= box.maxPosX || this.maxPosX <= box.minPosX ? false : true;
  }
  isPointInside(pos) {
    return pos.x >= this.minPosX && pos.x <= this.maxPosX && pos.z >= this.minPosY && pos.z <= this.maxPosY;
  }
  isIntersectLineSegment(p1x, p1y, p2x, p2y) {
    var isIntersect = false;
    var A1 = p1y - p2y;
    var B1 = p2x - p1x;
    var C1 = p1x * p2y - p2x * p1y;
    var LineIntersectY = (-C1 - A1 * this.minPosX) / B1;
    if (LineIntersectY <= this.maxPosY && LineIntersectY >= this.minPosY)
      isIntersect = true;
    LineIntersectY = (-C1 - A1 * this.maxPosX) / B1;
    if (LineIntersectY <= this.maxPosY && LineIntersectY >= this.minPosY)
      isIntersect = true;
    var LineIntersectX = (-C1 - B1 * this.minPosY) / A1;
    if (LineIntersectX <= this.maxPosX && LineIntersectX >= this.minPosX)
      isIntersect = true;
    LineIntersectX = (-C1 - B1 * this.maxPosY) / A1;
    if (LineIntersectX <= this.maxPosX && LineIntersectX >= this.minPosX)
      isIntersect = true;
    return isIntersect;
  }
}

class QuadTreeCell {
  static NUM_CHILDREN = 4;
  childCellIndices;
  nodeIndices;
  aabb;
  points;
  constructor(aabox) {
    this.childCellIndices = new Array();
    this.childCellIndices.length = QuadTreeCell.NUM_CHILDREN;
    this.nodeIndices = new Array();
    this.clear();
    if (aabox) {
      this.aabb = aabox.clone();
    } else {
      this.aabb = new QuadAABB();
    }
  }
  /**
  * @language zh_CN
  * Indicates if we contain triangles (if not then we should/might have children)
  */
  isLeaf() {
    return this.childCellIndices[0] == -1;
  }
  clear() {
    for (var i = 0; i < QuadTreeCell.NUM_CHILDREN; i++) {
      this.childCellIndices[i] = -1;
    }
    this.nodeIndices.splice(0, this.nodeIndices.length);
  }
}

class QuadTree {
  _cells;
  _rootCell;
  _quadNodes;
  _aabb;
  _cellsToTest;
  _testID;
  constructor() {
    this._testID = 0;
    this._cells = new Array();
    this._quadNodes = new Array();
    this._cellsToTest = new Array();
    this._aabb = new QuadAABB();
  }
  getQuadNode(idx) {
    return this._quadNodes[idx];
  }
  clear() {
    this._cells.length = 0;
    this._quadNodes.length = 0;
  }
  initNodes(nodes) {
    this.clear();
    var i = 0;
    var count = nodes.length;
    while (i < count) {
      nodes[i].calcGlobalQuadAABB();
      this._quadNodes.push(nodes[i]);
      i++;
    }
  }
  buildQuadTree(maxNodesPerCell, minCellSize) {
    this._aabb.clear();
    for (var node of this._quadNodes) {
      if (node.isTriangle) {
        for (var vt of node.aabb.points) {
          this._aabb.addPoint(vt);
        }
      } else {
        this._aabb.setContainRect(node.aabb.minPosX, node.aabb.minPosY, node.aabb.maxPosX, node.aabb.maxPosY);
      }
    }
    this._cells.length = 0;
    this._rootCell = new QuadTreeCell(this._aabb);
    this._cells.push(this._rootCell);
    var numTriangles = this._quadNodes.length;
    for (var i = 0; i < numTriangles; i++) {
      this._cells[0].nodeIndices[i] = i;
    }
    var cellsToProcess = new Array();
    cellsToProcess.push(0);
    var iTri;
    var cellIndex;
    var childCell;
    while (cellsToProcess.length != 0) {
      cellIndex = cellsToProcess.pop();
      if (this._cells[cellIndex].nodeIndices.length <= maxNodesPerCell || this._cells[cellIndex].aabb.radius < minCellSize) {
        continue;
      }
      for (i = 0; i < QuadTreeCell.NUM_CHILDREN; i++) {
        this._cells[cellIndex].childCellIndices[i] = this._cells.length;
        cellsToProcess.push(this._cells.length);
        this._cells.push(new QuadTreeCell(this.createAABox(this._cells[cellIndex].aabb, i)));
        childCell = this._cells[this._cells.length - 1];
        numTriangles = this._cells[cellIndex].nodeIndices.length;
        for (var j = 0; j < numTriangles; j++) {
          iTri = this._cells[cellIndex].nodeIndices[j];
          if (this.doesNodeIntersectCell(this._quadNodes[iTri], childCell)) {
            childCell.nodeIndices.push(iTri);
          }
        }
      }
      this._cells[cellIndex].nodeIndices.length = 0;
    }
  }
  createAABox(aabb, id) {
    var centerX = aabb.centreX;
    var centerY = aabb.centreY;
    var dimX = aabb.sideX;
    var dimY = aabb.sideY;
    var result = new QuadAABB();
    switch (id) {
      case 0:
        result.setAABox(centerX + dimX / 4, centerY + dimY / 4, dimX / 2, dimY / 2);
        break;
      case 1:
        result.setAABox(centerX - dimX / 4, centerY + dimY / 4, dimX / 2, dimY / 2);
        break;
      case 2:
        result.setAABox(centerX - dimX / 4, centerY - dimY / 4, dimX / 2, dimY / 2);
        break;
      case 3:
        result.setAABox(centerX + dimX / 4, centerY - dimY / 4, dimX / 2, dimY / 2);
        break;
      default:
        result.setAABox(centerX + dimX / 4, centerY - dimY / 4, dimX / 2, dimY / 2);
        break;
    }
    return result;
  }
  doesNodeIntersectCell(node, cell) {
    var box = node.aabb;
    if (!box.overlapTest(cell.aabb)) {
      return false;
    }
    if (!node.isTriangle)
      return true;
    var points = box.points;
    var p1 = points[0];
    var p2 = points[1];
    var p3 = points[2];
    if (cell.aabb.isPointInside(p1) || cell.aabb.isPointInside(p2) || cell.aabb.isPointInside(p3)) {
      return true;
    }
    var isIntersect = this.pointInTriangle(cell.aabb.minPosX, cell.aabb.minPosY, p1, p2, p3) || this.pointInTriangle(cell.aabb.minPosX, cell.aabb.maxPosY, p1, p2, p3) || this.pointInTriangle(cell.aabb.maxPosX, cell.aabb.maxPosY, p1, p2, p3) || this.pointInTriangle(cell.aabb.maxPosX, cell.aabb.minPosY, p1, p2, p3);
    if (isIntersect)
      return true;
    isIntersect = cell.aabb.isIntersectLineSegment(p1.x, p1.z, p2.x, p2.z) || cell.aabb.isIntersectLineSegment(p1.x, p1.z, p3.x, p3.z) || cell.aabb.isIntersectLineSegment(p2.x, p2.z, p3.x, p3.z);
    return isIntersect;
  }
  getNodesIntersectingtAABox(result, aabb) {
    if (this._cells.length == 0)
      return 0;
    this._cellsToTest.length = 0;
    this._cellsToTest.push(0);
    this.incrementTestCounter();
    var cellIndex, nTris, cell;
    var nodeBox;
    var i = 0;
    while (this._cellsToTest.length != 0) {
      cellIndex = this._cellsToTest.pop();
      cell = this._cells[cellIndex];
      if (!aabb.overlapTest(cell.aabb)) {
        continue;
      }
      if (cell.isLeaf()) {
        nTris = cell.nodeIndices.length;
        for (i = 0; i < nTris; i++) {
          nodeBox = this.getQuadNode(cell.nodeIndices[i]).aabb;
          if (nodeBox.testID != this._testID) {
            nodeBox.testID = this._testID;
            if (aabb.overlapTest(nodeBox)) {
              result.push(cell.nodeIndices[i]);
            }
          }
        }
      } else {
        for (i = 0; i < QuadTreeCell.NUM_CHILDREN; i++) {
          this._cellsToTest.push(cell.childCellIndices[i]);
        }
      }
    }
    return result.length;
  }
  pointInTriangle(x, y, triP1, triP2, triP3) {
    var p1 = triP1;
    var p2 = triP2;
    var p3 = triP3;
    var A1 = p1.z - p2.z;
    var B1 = p2.x - p1.x;
    var C1 = p1.x * p2.z - p2.x * p1.z;
    var A2 = p2.z - p3.z;
    var B2 = p3.x - p2.x;
    var C2 = p2.x * p3.z - p3.x * p2.z;
    var A3 = p3.z - p1.z;
    var B3 = p1.x - p3.x;
    var C3 = p3.x * p1.z - p1.x * p3.z;
    var isInTri = false;
    var D1 = A1 * x + B1 * y + C1;
    var D2 = A2 * x + B2 * y + C2;
    var D3 = A3 * x + B3 * y + C3;
    const Tiny = 0.01;
    if (D1 >= -Tiny && D2 >= -Tiny && D3 >= -Tiny || D1 <= Tiny && D2 <= Tiny && D3 <= Tiny)
      isInTri = true;
    return isInTri;
  }
  incrementTestCounter() {
    ++this._testID;
    if (this._testID == 0) {
      var numTriangles = this._quadNodes.length;
      for (var i = 0; i < numTriangles; i++) {
        this._quadNodes[i].aabb.testID = 0;
      }
      this._testID = 1;
    }
  }
  logDeep = 0;
  logTree(cellIndex) {
    if (cellIndex < 0)
      return;
    this.logDeep++;
    var cell = this._cells[cellIndex];
    var spaces = "";
    for (var si = 0; si < this.logDeep - 1; si++)
      spaces += "-|";
    console.log(spaces + "i=" + cellIndex + " " + cell.aabb.minPosX.toFixed(2) + " " + cell.aabb.maxPosX.toFixed(2) + " " + cell.aabb.minPosY.toFixed(2) + " " + cell.aabb.maxPosY.toFixed(2));
    var i;
    for (i = 0; i < cell.nodeIndices.length; i++) {
      if (cell.nodeIndices[i] >= 0) {
        var tri = this._quadNodes[cell.nodeIndices[i]];
        console.log(spaces + " t=" + cell.nodeIndices[i] + " " + tri.aabb.minPosX.toFixed(2) + " " + tri.aabb.maxPosX.toFixed(2) + " " + tri.aabb.minPosY.toFixed(2) + " " + tri.aabb.maxPosY.toFixed(2));
      }
    }
    for (i = 0; i < cell.childCellIndices.length; i++) {
      if (cell.childCellIndices[i] >= 0) {
        this.logTree(cell.childCellIndices[i]);
      }
    }
    this.logDeep--;
  }
}

class QuadRoot {
  _maxNodesPerCell;
  _minCellSize;
  _quadTree;
  _collisionNodesIdx;
  _segBox;
  _collisionNodes;
  constructor(maxNodesPerCell = 10, minCellSize = 500) {
    this._maxNodesPerCell = maxNodesPerCell;
    this._minCellSize = minCellSize;
    this._segBox = new QuadAABB();
    this._collisionNodesIdx = new Array();
    this._collisionNodes = new Array();
  }
  createQuadTree(nodes) {
    this._quadTree = new QuadTree();
    this._quadTree.initNodes(nodes);
    this._quadTree.buildQuadTree(this._maxNodesPerCell, this._minCellSize);
  }
  getNodesByAABB(minX, minY, maxX, maxY) {
    this._segBox.clear();
    this._segBox.maxPosX = maxX;
    this._segBox.maxPosY = maxY;
    this._segBox.minPosX = minX;
    this._segBox.minPosY = minY;
    this._collisionNodesIdx.length = 0;
    this._collisionNodes.length = 0;
    this._quadTree.getNodesIntersectingtAABox(this._collisionNodesIdx, this._segBox);
    var quadNode;
    for (var i = 0; i < this._collisionNodesIdx.length; i++) {
      quadNode = this._quadTree.getQuadNode(this._collisionNodesIdx[i]);
      this._collisionNodes.push(quadNode);
    }
    return this._collisionNodes;
  }
  getTriangleAtPoint(point, threshold = 5) {
    this._segBox.clear();
    this._segBox.setAABox(point.x, point.z, 1, 1);
    this._collisionNodesIdx.length = 0;
    this._collisionNodes.length = 0;
    this._quadTree.getNodesIntersectingtAABox(this._collisionNodesIdx, this._segBox);
    var minDistance = 4294967295;
    var curDistance = 0;
    var minTriangle;
    var quadNode;
    var triangle;
    var box;
    for (var i = 0; i < this._collisionNodesIdx.length; i++) {
      quadNode = this._quadTree.getQuadNode(this._collisionNodesIdx[i]);
      box = quadNode.aabb;
      if (!Vector3.pointInsideTriangle(point, box.points[0], box.points[1], box.points[2])) {
        continue;
      }
      triangle = quadNode;
      curDistance = Math.abs(triangle.plane.distance(point));
      if (curDistance > threshold)
        continue;
      if (quadNode == null || curDistance <= minDistance) {
        minTriangle = triangle;
        minDistance = curDistance;
      }
    }
    return minTriangle;
  }
}

var MouseCode = /* @__PURE__ */ ((MouseCode2) => {
  MouseCode2[MouseCode2["MOUSE_LEFT"] = 0] = "MOUSE_LEFT";
  MouseCode2[MouseCode2["MOUSE_MID"] = 1] = "MOUSE_MID";
  MouseCode2[MouseCode2["MOUSE_RIGHT"] = 2] = "MOUSE_RIGHT";
  return MouseCode2;
})(MouseCode || {});

class LoaderEvent extends CEvent {
  static LOADER_PROGRESS = "loaderProgress";
  static LOADER_COMPLETE = "loaderComplete";
}

class Object3DEvent extends CEvent {
  static ADDED = "added";
  static REMOVED = "removed";
  static CHILD_ADD_EVENT = "childAddEvent";
  static CHILD_REMOVED = "childRemoved";
}

class UIEvent extends CEvent {
  static SHOW = "show";
  static HIDE = "hide";
  static UPDATE = "update";
}

class MergeRGBACreator {
  static merge(textureR, textureG, textureB, textureA) {
    let w = 0;
    let h = 0;
    w = Math.max(textureR.width, w);
    w = Math.max(textureG.width, w);
    w = Math.max(textureB.width, w);
    w = Math.max(textureA.width, w);
    h = Math.max(textureR.height, h);
    h = Math.max(textureG.height, h);
    h = Math.max(textureB.height, h);
    h = Math.max(textureA.height, h);
    let outTex = new VirtualTexture(w, h, GPUTextureFormat.rgba8unorm);
    let compute = new ComputeShader(MergeRGBA_cs);
    compute.setSamplerTexture("textureR", textureR);
    compute.setSamplerTexture("textureG", textureG);
    compute.setSamplerTexture("textureB", textureB);
    compute.setSamplerTexture("textureA", textureA);
    compute.setStorageTexture("outTex", outTex);
    compute.workerSizeX = Math.ceil(w / 8);
    compute.workerSizeY = Math.ceil(h / 8);
    let command = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(command, [compute]);
    GPUContext.endCommandEncoder(command);
    return outTex;
  }
}

class TextureScaleCompute {
  computeShader;
  setInputes(colorMap, inputs, outputs) {
    this.computeShader = new ComputeShader(textureCompress(colorMap, inputs, outputs, 8, 8, 1));
    for (let i = 0; i < inputs.length; i++) {
      this.computeShader.setSamplerTexture(`source${i}Map`, inputs[i]);
    }
    for (let i = 0; i < outputs.length; i++) {
      this.computeShader.setStorageTexture(`dest${i}Map`, outputs[i]);
    }
    if (colorMap) {
      this.computeShader.setSamplerTexture(`colorMap`, colorMap);
    }
    this.computeShader.workerSizeX = outputs[0].width / 8;
    this.computeShader.workerSizeY = outputs[0].height / 8;
    this.computeShader.workerSizeZ = 1;
  }
}

class ProbeEntries {
  gpuBuffer;
  probes;
  memoryDo;
  _probeInfoList;
  initDataUniform(probes) {
    this.memoryDo = new MemoryDO();
    this.probes = probes;
    this._probeInfoList = [];
    this.memoryDo.destroy();
    this.memoryDo.allocation(probes.length * 17 * 4);
    for (let i = 0; i < probes.length; i++) {
      var size = 17;
      let memoryInfo = this.memoryDo.allocation_node(size * 4);
      this._probeInfoList.push(memoryInfo);
      let probeWorldPos = probes[i].transform.worldPosition;
      memoryInfo.setArray(0, [probeWorldPos.x, probeWorldPos.y, probeWorldPos.z]);
    }
    this.gpuBuffer = webGPUContext.device.createBuffer({
      size: this.memoryDo.shareDataBuffer.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
      label: "ProbeBuffer",
      mappedAtCreation: false
    });
  }
  updateGPUBuffer() {
    const bufferData = this.memoryDo.shareDataBuffer;
    let totalBytes = this.memoryDo.shareDataBuffer.byteLength;
    let offsetBytes = 0;
    const space = 5e3 * 64;
    while (offsetBytes < totalBytes) {
      webGPUContext.device.queue.writeBuffer(this.gpuBuffer, offsetBytes, bufferData, offsetBytes, Math.floor(Math.min(space, totalBytes - offsetBytes)));
      offsetBytes += space;
    }
  }
}

class StructStorageGPUBuffer extends GPUBufferBase {
  constructor(struct, count, usage = 0) {
    super();
    this.bufferType = GPUBufferType.StructStorageGPUBuffer;
    this.createBufferByStruct(GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | usage, struct, count);
  }
}

class TextureMipmapCompute {
  static codeMax = `
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(8, 8)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            //fromColor = vec4<f32>(0.0, 0.0, 0.0, 1.0);
            //if(dstSize.x == 512){
            //    fromColor.x = 1.0;
            //}else  if(dstSize.x == 256){
            //    fromColor.y = 1.0;
            //}else if(dstSize.x == 128){
            //    fromColor.z = 1.0;
            //}
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `;
  static codeMin = `
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(1, 1)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `;
  static _pipelineMax;
  static _pipelineMin;
  static createMipmap(texture, mipmapCount) {
    const device = webGPUContext.device;
    this._pipelineMax ||= device.createComputePipeline({
      layout: `auto`,
      compute: {
        module: device.createShaderModule({
          code: this.codeMax
        }),
        entryPoint: "main"
      }
    });
    this._pipelineMin ||= device.createComputePipeline({
      layout: `auto`,
      compute: {
        module: device.createShaderModule({
          code: this.codeMin
        }),
        entryPoint: "main"
      }
    });
    let dstWidth = Math.ceil(texture.width * 0.5);
    let dstHeight = Math.ceil(texture.height * 0.5);
    let mipmapData = { mipmapCount, texture, srcView: null, mipLevel: 1, dstHeight, dstWidth };
    mipmapData.srcView = texture.getGPUTexture().createView({
      format: texture.format,
      dimension: "2d",
      baseMipLevel: 0,
      // Make sure we're getting the right mip level...
      mipLevelCount: 1
      // And only selecting one mip level
    });
    let isMax = texture.width > 1024 && texture.height > 1024;
    if (isMax) {
      this.mipmap(this._pipelineMax, mipmapData);
    } else {
      this.mipmap(this._pipelineMin, mipmapData);
    }
  }
  static mipmap(computePipeline, data) {
    const device = webGPUContext.device;
    const commandEncoder = GPUContext.beginCommandEncoder();
    let isCurrentMax = computePipeline == this._pipelineMax;
    let dstView;
    let isBreakToMin;
    for (let i = data.mipLevel; i < data.mipmapCount; i++) {
      let entries = [];
      let binding = 0;
      entries.push({
        binding: binding++,
        resource: data.srcView
      });
      entries.push({
        binding: binding++,
        resource: data.texture.gpuSampler
      });
      dstView = data.texture.getGPUTexture().createView({
        format: data.texture.format,
        dimension: "2d",
        baseMipLevel: i,
        mipLevelCount: 1
      });
      entries.push({
        binding: binding++,
        resource: dstView
      });
      const computeBindGroup = device.createBindGroup({
        layout: computePipeline.getBindGroupLayout(0),
        entries
      });
      const computePass = commandEncoder.beginComputePass();
      computePass.setPipeline(computePipeline);
      computePass.setBindGroup(0, computeBindGroup);
      let groupX = data.dstWidth;
      let groupY = data.dstHeight;
      if (isCurrentMax) {
        groupX = Math.max(1, Math.floor(data.dstWidth / 8));
        groupY = Math.max(1, Math.floor(data.dstHeight / 8));
      }
      computePass.dispatchWorkgroups(groupX, groupY);
      data.dstHeight *= 0.5;
      data.dstWidth *= 0.5;
      data.srcView = dstView;
      data.mipLevel = i + 1;
      isBreakToMin = isCurrentMax && (data.dstWidth < 8 || data.dstHeight < 8);
      computePass.end();
      if (isBreakToMin) {
        break;
      }
    }
    GPUContext.endCommandEncoder(commandEncoder);
    if (isBreakToMin) {
      this.mipmap(this._pipelineMin, data);
    }
  }
}

class MorePassShader {
  name = "";
  passMap = /* @__PURE__ */ new Map();
}
class PassShader {
  passType = "";
  shaderState = /* @__PURE__ */ new Map();
  vertexShader = "";
  fragmentShader = "";
}
class MorePassParser {
  static passKeyword = "pass";
  static shaderKeyword = "Shader";
  static vertexKeyword = "vertex";
  static fragmentKeyword = "fragment";
  static passTypeKeyword = "PassType";
  static parser(code, defineValue) {
    code = Preprocessor.filterComment(code);
    let result = new MorePassShader();
    let index1 = code.indexOf(this.shaderKeyword);
    let index2 = code.indexOf("{", index1);
    let block = code.substring(index1 + this.shaderKeyword.length, index2).trim();
    result.name = block.substring(1, block.length - 1);
    block = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
    let passBlocks = this.splitPassBlock(block);
    for (let passCode of passBlocks) {
      let passShader = this.parserPassBlock(passCode);
      let passshaderList;
      if (result.passMap.has(passShader.passType)) {
        passshaderList = result.passMap.get(passShader.passType);
      } else {
        passshaderList = [];
        result.passMap.set(passShader.passType, passshaderList);
      }
      passshaderList.push(passShader);
      if (passShader.vertexShader.length > 0) {
        passShader.vertexShader = Preprocessor.parse(passShader.vertexShader, defineValue);
      }
      if (passShader.fragmentShader.length > 0) {
        passShader.fragmentShader = Preprocessor.parse(passShader.fragmentShader, defineValue);
      }
    }
    return result;
  }
  static splitPassBlock(code) {
    let offset = 0;
    let result = [];
    while (offset < code.length) {
      let index = code.indexOf(this.passKeyword, offset);
      if (index == -1) {
        result.push(code.substring(offset));
        break;
      }
      if (offset != 0) {
        result.push(code.substring(offset, index));
      }
      offset = index + this.passKeyword.length;
    }
    return result;
  }
  static parserPassBlock(code) {
    let passShader = new PassShader();
    let index1 = code.indexOf(this.passTypeKeyword);
    let index2 = code.indexOf('"', index1);
    index1 = code.indexOf('"', index2 + 1);
    passShader.passType = code.substring(index1 + 1, index2).trim();
    this.parserShaderState(passShader, code);
    index1 = code.indexOf(this.vertexKeyword);
    if (index1 != -1) {
      passShader.vertexShader = this.extractBlock(code.substring(index1 + this.vertexKeyword.length), "{", "}");
    }
    index1 = code.indexOf(this.fragmentKeyword);
    if (index1 != -1) {
      passShader.fragmentShader = this.extractBlock(code.substring(index1 + this.fragmentKeyword.length), "{", "}");
    }
    return passShader;
  }
  static parserShaderState(passShader, code) {
    let indexL = code.indexOf("ShaderState");
    if (indexL == -1)
      return false;
    indexL = code.indexOf("{", indexL);
    let indexR = code.indexOf("}", indexL);
    let codeBlock = code.substring(indexL + 1, indexR);
    let fields = codeBlock.split(",");
    for (let item of fields) {
      let keyValue = item.split(":");
      let key = keyValue[0].trim();
      let value = this.convertValue(keyValue[1].trim());
      passShader.shaderState.set(key, value);
    }
    return true;
  }
  static convertValue(str) {
    if (str.length == 4 && str.toLowerCase() == "true")
      return true;
    else if (str.length == 5 && str.toLowerCase() == "false")
      return false;
    else if (str[0] == '"')
      return str.substring(1, str.length - 1);
    return Number.parseInt(str);
  }
  static extractBlock(str, leftStr, rightStr) {
    let indexL = str.indexOf(leftStr);
    if (indexL == -1) {
      return "";
    }
    let depth = 0;
    let indexR = 0;
    str = str.substring(indexL);
    for (let char of str) {
      if (char == leftStr) {
        depth++;
      } else if (char == rightStr) {
        depth--;
      }
      if (depth <= 0) {
        break;
      }
      indexR++;
    }
    let block = str.substring(1, indexR).trim();
    return block;
  }
}

let IrradianceDataReaderCompleteEvent = new CEvent("IrradianceDataReaderCompleteEvent");
class DDGIIrradianceGPUBufferReader extends CEventDispatcher {
  readFlag = false;
  probeRenderer;
  opColorBuffer;
  opDepthBuffer;
  srcColorMap;
  srcDepthMap;
  opDepthArray;
  opColorArray;
  initReader(probeRender, colorMap, depthMap) {
    this.probeRenderer = probeRender;
    this.srcColorMap = colorMap;
    this.srcDepthMap = depthMap;
    let giSetting = Engine3D.setting.gi;
    let pixelCount = giSetting.octRTMaxSize * giSetting.octRTMaxSize;
    this.opColorBuffer = webGPUContext.device.createBuffer({
      size: pixelCount * 4 * 4,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
      mappedAtCreation: false
    });
    this.opColorArray = new Float32Array(pixelCount * 4);
    this.opDepthBuffer = webGPUContext.device.createBuffer({
      size: pixelCount * 4 * 4,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
      mappedAtCreation: false
    });
    this.opDepthArray = new Float32Array(pixelCount * 4);
    this.probeRenderer.addEventListener(
      GIRenderCompleteEvent.type,
      () => {
        this.onProbeRenderComplete();
      },
      this
    );
    this.probeRenderer.addEventListener(
      GIRenderStartEvent.type,
      () => {
        console.log("GIRenderStartEvent");
      },
      this
    );
  }
  async onProbeRenderComplete() {
    console.log("GIRenderCompleteEvent");
    if (!this.readFlag) {
      this.readFlag = true;
      let startTime = Date.now();
      console.log("irradianceDataReader start reading ");
      await DDGIIrradianceGPUBufferReader.read(this.srcColorMap.getGPUTexture(), this.opColorBuffer, this.opColorArray);
      await DDGIIrradianceGPUBufferReader.read(this.srcDepthMap.getGPUTexture(), this.opDepthBuffer, this.opDepthArray);
      this.readFlag = false;
      console.log("process time :", Date.now() - startTime);
      console.log("irradianceDataReader read complete");
      this.dispatchEvent(IrradianceDataReaderCompleteEvent);
    } else {
      console.log("irradianceDataReader is reading yet!!!");
    }
  }
  static async read(srcTexture, dstBuffer, output) {
    let command = GPUContext.beginCommandEncoder();
    command.copyTextureToBuffer({ texture: srcTexture }, { buffer: dstBuffer, bytesPerRow: srcTexture.width * 16 }, [srcTexture.width, srcTexture.height]);
    GPUContext.endCommandEncoder(command);
    await dstBuffer.mapAsync(GPUMapMode.READ);
    const copyArrayBuffer = dstBuffer.getMappedRange();
    output.set(new Float32Array(copyArrayBuffer), 0);
    dstBuffer.unmap();
  }
}
let irradianceDataReader = new DDGIIrradianceGPUBufferReader();

class ZCullingCompute {
  computeShader;
  visibleBuffer;
  texture;
  constructor() {
    this.computeShader = new ComputeShader(ZPassShader_cs);
    this.visibleBuffer = new ComputeGPUBuffer(8192 * 2);
    this.computeShader.setStorageBuffer(`visibleBuffer`, this.visibleBuffer);
    this.texture = RTResourceMap.getTexture(RTResourceConfig.zBufferTexture_NAME);
    this.computeShader.setSamplerTexture(`zBufferTexture`, this.texture);
    this.computeShader.workerSizeX = Math.ceil(this.texture.width / 8);
    this.computeShader.workerSizeY = Math.ceil(this.texture.height / 8);
    this.computeShader.workerSizeZ = 1;
  }
  compute(scene, occlusionSystem) {
    this.visibleBuffer.reset(true, 0);
    this.visibleBuffer.apply();
    let command = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(command, [this.computeShader]);
    this.visibleBuffer.readBuffer();
    occlusionSystem.zVisibleList = this.visibleBuffer.outFloat32Array;
  }
}

class BloomPost extends PostBase {
  /**
   * @internal
   */
  RT_BloomUp;
  RT_BloomDown;
  RT_threshold;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  thresholdCompute;
  downSampleComputes;
  upSampleComputes;
  postCompute;
  /**
   * @internal
   */
  bloomSetting;
  /**
   * @internal
   */
  rtFrame;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.bloom.enable = true;
    this.createGUI();
  }
  /**
   * @internal
   */
  Render;
  onDetach(view) {
    Engine3D.setting.render.postProcessing.bloom.enable = false;
    this.removeGUI();
  }
  createGUI() {
  }
  removeGUI() {
  }
  get downSampleBlurSize() {
    return Engine3D.setting.render.postProcessing.bloom.downSampleBlurSize;
  }
  set downSampleBlurSize(value) {
    Engine3D.setting.render.postProcessing.bloom.downSampleBlurSize = value;
  }
  get downSampleBlurSigma() {
    return Engine3D.setting.render.postProcessing.bloom.downSampleBlurSigma;
  }
  set downSampleBlurSigma(value) {
    Engine3D.setting.render.postProcessing.bloom.downSampleBlurSigma = value;
  }
  get upSampleBlurSize() {
    return Engine3D.setting.render.postProcessing.bloom.upSampleBlurSize;
  }
  set upSampleBlurSize(value) {
    Engine3D.setting.render.postProcessing.bloom.upSampleBlurSize = value;
  }
  get upSampleBlurSigma() {
    return Engine3D.setting.render.postProcessing.bloom.upSampleBlurSigma;
  }
  set upSampleBlurSigma(value) {
    Engine3D.setting.render.postProcessing.bloom.upSampleBlurSigma = value;
  }
  get luminanceThreshole() {
    return Engine3D.setting.render.postProcessing.bloom.luminanceThreshole;
  }
  set luminanceThreshole(value) {
    Engine3D.setting.render.postProcessing.bloom.luminanceThreshole = value;
  }
  get bloomIntensity() {
    return Engine3D.setting.render.postProcessing.bloom.bloomIntensity;
  }
  set bloomIntensity(value) {
    Engine3D.setting.render.postProcessing.bloom.bloomIntensity = value;
  }
  get hdr() {
    return Engine3D.setting.render.postProcessing.bloom.hdr;
  }
  set hdr(value) {
    Engine3D.setting.render.postProcessing.bloom.hdr = value;
  }
  createThreshouldCompute() {
    this.thresholdCompute = new ComputeShader(threshold);
    this.autoSetColorTexture("inTex", this.thresholdCompute);
    this.thresholdCompute.setStorageTexture(`outTex`, this.RT_threshold);
    this.thresholdCompute.setUniformBuffer("bloomCfg", this.bloomSetting);
    this.thresholdCompute.workerSizeX = Math.ceil(this.RT_threshold.width / 8);
    this.thresholdCompute.workerSizeY = Math.ceil(this.RT_threshold.height / 8);
    this.thresholdCompute.workerSizeZ = 1;
  }
  createDownSampleComputes() {
    let setting = Engine3D.setting.render.postProcessing.bloom;
    const N = setting.downSampleStep;
    this.downSampleComputes = [];
    for (let i = 0; i < N; i++) {
      let compute = new ComputeShader(downSample);
      let dstTexture = this.RT_BloomDown[i];
      let srcTexture = i == 0 ? this.RT_threshold : this.RT_BloomDown[i - 1];
      compute.setSamplerTexture(`inTex`, srcTexture);
      compute.setStorageTexture(`outTex`, dstTexture);
      compute.setUniformBuffer("bloomCfg", this.bloomSetting);
      compute.workerSizeX = Math.ceil(dstTexture.width / 8);
      compute.workerSizeY = Math.ceil(dstTexture.height / 8);
      compute.workerSizeZ = 1;
      this.downSampleComputes.push(compute);
    }
  }
  createUpSampleComputes() {
    let setting = Engine3D.setting.render.postProcessing.bloom;
    const N = setting.downSampleStep;
    this.upSampleComputes = [];
    {
      let compute = new ComputeShader(upSample$1);
      let dstTexture = this.RT_BloomUp[0];
      let srcTexture = this.RT_BloomDown[N - 2];
      compute.setSamplerTexture(`_MainTex`, srcTexture);
      compute.setSamplerTexture(`_PrevMip`, this.RT_BloomDown[N - 1]);
      compute.setStorageTexture(`outTex`, dstTexture);
      compute.setUniformBuffer("bloomCfg", this.bloomSetting);
      compute.workerSizeX = Math.ceil(dstTexture.width / 8);
      compute.workerSizeY = Math.ceil(dstTexture.height / 8);
      compute.workerSizeZ = 1;
      this.upSampleComputes.push(compute);
    }
    for (let i = 1; i < N - 1; i++) {
      let compute = new ComputeShader(upSample$1);
      let dstTexture = this.RT_BloomUp[i];
      let srcTexture = this.RT_BloomDown[N - 2 - i];
      compute.setSamplerTexture(`_MainTex`, srcTexture);
      compute.setSamplerTexture(`_PrevMip`, this.RT_BloomUp[i - 1]);
      compute.setStorageTexture(`outTex`, dstTexture);
      compute.setUniformBuffer("bloomCfg", this.bloomSetting);
      compute.workerSizeX = Math.ceil(dstTexture.width / 8);
      compute.workerSizeY = Math.ceil(dstTexture.height / 8);
      compute.workerSizeZ = 1;
      this.upSampleComputes.push(compute);
    }
  }
  createPostCompute() {
    let setting = Engine3D.setting.render.postProcessing.bloom;
    const N = setting.downSampleStep;
    this.postCompute = new ComputeShader(post);
    this.autoSetColorTexture("_MainTex", this.postCompute);
    this.postCompute.setSamplerTexture(`_BloomTex`, this.RT_BloomUp[N - 2]);
    this.postCompute.setStorageTexture(`outTex`, this.RT_threshold);
    this.postCompute.setUniformBuffer("bloomCfg", this.bloomSetting);
    this.postCompute.workerSizeX = Math.ceil(this.RT_threshold.width / 8);
    this.postCompute.workerSizeY = Math.ceil(this.RT_threshold.height / 8);
    this.postCompute.workerSizeZ = 1;
  }
  createResource() {
    let setting = Engine3D.setting.render.postProcessing.bloom;
    this.bloomSetting = new UniformGPUBuffer(4 * 2);
    let [screenWidth, screenHeight] = webGPUContext.presentationSize;
    let usage = GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING;
    this.RT_threshold = new VirtualTexture(screenWidth, screenHeight, GPUTextureFormat.rgba16float, false, usage);
    const N = setting.downSampleStep;
    {
      this.RT_BloomDown = [];
      let w = Math.ceil(screenWidth / 4);
      let h = Math.ceil(screenHeight / 4);
      for (let i = 0; i < N; i++) {
        this.RT_BloomDown[i] = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, usage);
        w = Math.ceil(w / 2);
        h = Math.ceil(h / 2);
      }
    }
    {
      this.RT_BloomUp = [];
      for (let i = 0; i < N - 1; i++) {
        let w = this.RT_BloomDown[N - 2 - i].width;
        let h = this.RT_BloomDown[N - 2 - i].height;
        this.RT_BloomUp[i] = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, usage);
      }
    }
    let bloomDesc = new RTDescriptor();
    bloomDesc.loadOp = `load`;
    this.rtFrame = new RTFrame([this.RT_threshold], [bloomDesc]);
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.thresholdCompute) {
      this.createResource();
      this.createThreshouldCompute();
      this.createDownSampleComputes();
      this.createUpSampleComputes();
      this.createPostCompute();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      this.rendererPassState.label = "Bloom";
    }
    let cfg = Engine3D.setting.render.postProcessing.bloom;
    this.bloomSetting.setFloat("downSampleStep", cfg.downSampleStep);
    this.bloomSetting.setFloat("downSampleBlurSize", cfg.downSampleBlurSize);
    this.bloomSetting.setFloat("downSampleBlurSigma", cfg.downSampleBlurSigma);
    this.bloomSetting.setFloat("upSampleBlurSize", cfg.upSampleBlurSize);
    this.bloomSetting.setFloat("upSampleBlurSigma", cfg.upSampleBlurSigma);
    this.bloomSetting.setFloat("luminanceThreshole", cfg.luminanceThreshole);
    this.bloomSetting.setFloat("bloomIntensity", cfg.bloomIntensity);
    this.bloomSetting.setFloat("hdr", cfg.hdr);
    this.bloomSetting.apply();
    GPUContext.computeCommand(command, [this.thresholdCompute, ...this.downSampleComputes, ...this.upSampleComputes, this.postCompute]);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let cfg = Engine3D.setting.render.postProcessing.bloom;
    let [screenWidth, screenHeight] = webGPUContext.presentationSize;
    this.RT_threshold.resize(screenWidth, screenHeight);
    const N = cfg.downSampleStep;
    let w = Math.ceil(screenWidth / 4);
    let h = Math.ceil(screenHeight / 4);
    for (let i = 0; i < N; i++) {
      this.RT_BloomDown[i].resize(w, h);
      w = Math.ceil(w / 2);
      h = Math.ceil(h / 2);
    }
    for (let i = 0; i < N - 1; i++) {
      let w2 = this.RT_BloomDown[N - 2 - i].width;
      let h2 = this.RT_BloomDown[N - 2 - i].height;
      this.RT_BloomUp[i].resize(w2, h2);
    }
    this.thresholdCompute.workerSizeX = Math.ceil(this.RT_threshold.width / 8);
    this.thresholdCompute.workerSizeY = Math.ceil(this.RT_threshold.height / 8);
    this.thresholdCompute.workerSizeZ = 1;
    for (let i = 0; i < N; i++) {
      let compute = this.downSampleComputes[i];
      let dstTexture = this.RT_BloomDown[i];
      compute.workerSizeX = Math.ceil(dstTexture.width / 8);
      compute.workerSizeY = Math.ceil(dstTexture.height / 8);
      compute.workerSizeZ = 1;
    }
    {
      let dstTexture = this.RT_BloomUp[0];
      let compute = this.upSampleComputes[0];
      compute.workerSizeX = Math.ceil(dstTexture.width / 8);
      compute.workerSizeY = Math.ceil(dstTexture.height / 8);
      compute.workerSizeZ = 1;
    }
    {
      for (let i = 1; i < N - 1; i++) {
        let dstTexture = this.RT_BloomUp[i];
        let compute = this.upSampleComputes[i];
        compute.workerSizeX = Math.ceil(dstTexture.width / 8);
        compute.workerSizeY = Math.ceil(dstTexture.height / 8);
        compute.workerSizeZ = 1;
      }
    }
    this.postCompute.workerSizeX = Math.ceil(this.RT_threshold.width / 8);
    this.postCompute.workerSizeY = Math.ceil(this.RT_threshold.height / 8);
    this.postCompute.workerSizeZ = 1;
  }
}

class DepthOfFieldPost extends PostBase {
  /**
   * @internal
   */
  blurTexture1;
  /**
   * @internal
   */
  blurTexture2;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  blurComputes;
  /**
   * @internal
   */
  blurSettings;
  /**
   * @internal
   */
  outTexture;
  rtFrame;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.depthOfView.enable = true;
  }
  /**
   * @internal
   */
  onDetach(view) {
    Engine3D.setting.render.postProcessing.depthOfView.enable = false;
  }
  get pixelOffset() {
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    return setting.pixelOffset;
  }
  set pixelOffset(value) {
    value = Math.max(0, value);
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    setting.pixelOffset = value;
  }
  get near() {
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    return setting.near;
  }
  set near(value) {
    value = Math.max(0, value);
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    setting.near = value;
  }
  get far() {
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    return setting.far;
  }
  set far(value) {
    value = Math.max(0, value);
    let setting = Engine3D.setting.render.postProcessing.depthOfView;
    setting.far = value;
  }
  createBlurCompute() {
    this.blurSettings = [];
    this.blurComputes = [];
    let cfg = Engine3D.setting.render.postProcessing.depthOfView;
    for (let i = 0; i < cfg.iterationCount; i++) {
      let blurSetting = new UniformGPUBuffer(4);
      let blurCompute = new ComputeShader(DepthOfView_cs);
      this.blurComputes.push(blurCompute);
      this.blurSettings.push(blurSetting);
      blurCompute.setUniformBuffer("blurSetting", blurSetting);
      let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
      blurCompute.setSamplerTexture(`gBufferTexture`, rtFrame.getCompressGBufferTexture());
      let input = i % 2 == 0 ? this.blurTexture1 : this.blurTexture2;
      let output = i % 2 == 1 ? this.blurTexture1 : this.blurTexture2;
      blurCompute.setSamplerTexture("inTex", input);
      blurCompute.setStorageTexture(`outTex`, output);
      blurCompute.workerSizeX = Math.ceil(this.blurTexture1.width / 8);
      blurCompute.workerSizeY = Math.ceil(this.blurTexture1.height / 8);
      blurCompute.workerSizeZ = 1;
      this.outTexture = output;
    }
  }
  createResource() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    this.blurTexture1 = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.blurTexture1.name = "dof1";
    let blur1Dec = new RTDescriptor();
    blur1Dec.clearValue = [0, 0, 0, 1];
    blur1Dec.loadOp = `clear`;
    this.blurTexture2 = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.blurTexture2.name = "dof2";
    let blur2Dec = new RTDescriptor();
    blur2Dec.clearValue = [0, 0, 0, 1];
    blur2Dec.loadOp = `clear`;
    this.rtFrame = new RTFrame([
      this.blurTexture1,
      this.blurTexture2
    ], [
      blur1Dec,
      blur2Dec
    ]);
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.blurComputes) {
      this.createResource();
      this.createBlurCompute();
      let standUniform = GlobalBindGroup.getCameraGroup(view.camera);
      for (let i = 0; i < this.blurComputes.length; i++) {
        const blurCompute = this.blurComputes[i];
        blurCompute.setUniformBuffer("globalUniform", standUniform.uniformGPUBuffer);
      }
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
    }
    this.autoSetColorTexture("inTex", this.blurComputes[0]);
    let cfg = Engine3D.setting.render.postProcessing.depthOfView;
    cfg.far = Math.max(cfg.near, cfg.far) + 1e-4;
    for (let i = 0; i < cfg.iterationCount; i++) {
      let blurCompute = this.blurComputes[i];
      let blurSetting = this.blurSettings[i];
      blurSetting.setFloat("near", cfg.near);
      blurSetting.setFloat("far", cfg.far);
      blurSetting.setFloat("pixelOffset", (i + 1) * cfg.pixelOffset);
      blurSetting.apply();
      blurCompute.setStorageBuffer("blurSetting", blurSetting);
    }
    GPUContext.computeCommand(command, this.blurComputes);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    let cfg = Engine3D.setting.render.postProcessing.depthOfView;
    cfg.far = Math.max(cfg.near, cfg.far) + 1e-4;
    this.blurTexture1.resize(w, h);
    this.blurTexture2.resize(w, h);
    for (let i = 0; i < cfg.iterationCount; i++) {
      let compute = this.blurComputes[i];
      compute.workerSizeX = Math.ceil(this.blurTexture1.width / 8);
      compute.workerSizeY = Math.ceil(this.blurTexture1.height / 8);
      compute.workerSizeZ = 1;
    }
  }
}

class GBufferPost extends PostBase {
  /**
   * @internal
   */
  outTexture;
  /**
   * @internal
   */
  rendererPassState;
  rtFrame;
  view;
  gBufferTexture;
  testCompute;
  _state = 0;
  _state1 = 256;
  _state2 = 256;
  uniformBuffer;
  currentRenderTexture;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    this.view = view;
  }
  /**
   * @internal
   */
  Render;
  onDetach(view) {
  }
  /**
   * check state
   */
  set state(v) {
    this._state = v;
    this.uniformBuffer.setInt32("state", v);
    this.uniformBuffer.apply();
  }
  get state() {
    return this._state;
  }
  set size1(v) {
    this._state1 = v;
    this.uniformBuffer.setInt32("state1", v);
    this.uniformBuffer.apply();
  }
  get size1() {
    return this._state1;
  }
  set size2(v) {
    this._state2 = v;
    this.uniformBuffer.setInt32("state2", v);
    this.uniformBuffer.apply();
  }
  get size2() {
    return this._state2;
  }
  createResource() {
    let rtFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
    this.currentRenderTexture = rtFrame.getColorTexture();
    this.gBufferTexture = rtFrame.getCompressGBufferTexture();
    let [w, h] = webGPUContext.presentationSize;
    this.outTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.outTexture.name = "outTexture";
    let testDec = new RTDescriptor();
    testDec.loadOp = `load`;
    this.rtFrame = new RTFrame([
      this.outTexture
    ], [
      testDec
    ]);
  }
  createCompute() {
    this.uniformBuffer = new UniformGPUBuffer(4);
    this.uniformBuffer.setInt32("state", this._state);
    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);
    let rtFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
    let gBufferTexture = rtFrame.getCompressGBufferTexture();
    let reflectionSetting = Engine3D.setting.reflectionSetting;
    let reflectionsGBufferFrame = GBufferFrame.getGBufferFrame(GBufferFrame.reflections_GBuffer, reflectionSetting.width, reflectionSetting.height);
    let reflectionsGBufferTexture = reflectionsGBufferFrame.getCompressGBufferTexture();
    let envMap = Engine3D.renderJobs.get(this.view).reflectionRenderer.outTexture;
    this.testCompute = new ComputeShader(TestComputeLoadBuffer);
    this.testCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    this.testCompute.setUniformBuffer("uniformData", this.uniformBuffer);
    this.testCompute.setSamplerTexture("gBufferTexture", gBufferTexture);
    this.testCompute.setSamplerTexture("currentRenderTexture", this.currentRenderTexture);
    this.testCompute.setSamplerTexture("reflectionsGBufferTexture", reflectionsGBufferTexture);
    this.testCompute.setSamplerTexture("envMap", envMap);
    this.testCompute.setStorageTexture("outputTexture", this.outTexture);
    this.testCompute.workerSizeX = Math.ceil(this.outTexture.width / 16);
    this.testCompute.workerSizeY = Math.ceil(this.outTexture.height / 16);
    this.testCompute.workerSizeZ = 1;
  }
  render(view, command) {
  }
  compute(view) {
    if (!this.testCompute) {
      this.createResource();
      this.createCompute();
      this.onResize();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      this.rendererPassState.label = "test";
    }
    let command = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(command, [this.testCompute]);
    GPUContext.endCommandEncoder(command);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let [w, h] = webGPUContext.presentationSize;
    this.outTexture.resize(w, h);
    this.testCompute.workerSizeX = Math.ceil(this.outTexture.width / 16);
    this.testCompute.workerSizeY = Math.ceil(this.outTexture.height / 16);
  }
}

class GTAOPost extends PostBase {
  /**
   * @internal
   */
  gtaoTexture;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  gtaoCompute;
  /**
   * @internal
   */
  gtaoSetting;
  /**
   * @internal
   */
  aoBuffer;
  /**
   * @internal
   */
  directionsBuffer;
  /**
   * @internal
   */
  directionsArray;
  rtFrame;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.gtao.enable = true;
  }
  /**
   * @internal
   */
  Render;
  onDetach(view) {
    Engine3D.setting.render.postProcessing.gtao.enable = false;
  }
  get maxDistance() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.maxDistance;
  }
  set maxDistance(value) {
    value = clamp(value, 0.1, 50);
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.maxDistance = value;
  }
  get maxPixel() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.maxPixel;
  }
  set maxPixel(value) {
    value = clamp(value, 5, 100);
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.maxPixel = value;
  }
  get darkFactor() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.darkFactor;
  }
  set darkFactor(value) {
    value = clamp(value, 0.01, 1);
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.darkFactor = value;
  }
  get rayMarchSegment() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.rayMarchSegment;
  }
  set rayMarchSegment(value) {
    value = clamp(value, 4, 10);
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.rayMarchSegment = value;
  }
  get multiBounce() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.multiBounce;
  }
  set multiBounce(value) {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.multiBounce = value;
  }
  get blendColor() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.blendColor;
  }
  set blendColor(value) {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.blendColor = value;
  }
  get usePosFloat32() {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    return setting.usePosFloat32;
  }
  set usePosFloat32(value) {
    let setting = Engine3D.setting.render.postProcessing.gtao;
    setting.usePosFloat32 = value;
  }
  createCompute() {
    this.gtaoCompute = new ComputeShader(GTAO_cs);
    let gtaoSetting = new UniformGPUBuffer(4 * 2);
    this.gtaoCompute.setUniformBuffer("gtaoData", gtaoSetting);
    this.directionsArray = new Float32Array(8 * 2);
    this.directionsBuffer = new StorageGPUBuffer(8 * 2);
    this.directionsBuffer.setFloat32Array("array", this.randomDirection());
    this.directionsBuffer.apply();
    this.gtaoCompute.setStorageBuffer("directions", this.directionsBuffer);
    this.aoBuffer = new StorageGPUBuffer(this.gtaoTexture.width * this.gtaoTexture.height);
    this.gtaoCompute.setStorageBuffer("aoBuffer", this.aoBuffer);
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    this.gtaoCompute.setSamplerTexture(`gBufferTexture`, rtFrame.getCompressGBufferTexture());
    this.autoSetColorTexture("inTex", this.gtaoCompute);
    this.gtaoCompute.setStorageTexture(`outTex`, this.gtaoTexture);
    this.gtaoSetting = gtaoSetting;
  }
  createResource() {
    let [w, h] = webGPUContext.presentationSize;
    this.gtaoTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.gtaoTexture.name = "gtaoTex";
    let gtaoDec = new RTDescriptor();
    gtaoDec.loadOp = `load`;
    this.rtFrame = new RTFrame([this.gtaoTexture], [gtaoDec]);
  }
  randomCount = 0;
  randomDirection() {
    this.randomCount = 0;
    let offsetAngle = Math.PI * 2 * this.randomCount / 16;
    let angleSegment = Math.PI * 2 / 8;
    for (let i = 0; i < 8; i++) {
      let angle = offsetAngle + i * angleSegment;
      this.directionsArray[i * 2] = Math.sin(angle);
      this.directionsArray[i * 2 + 1] = Math.cos(angle);
    }
    return this.directionsArray;
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.gtaoCompute) {
      this.createResource();
      this.createCompute();
      this.onResize();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      this.rendererPassState.label = "GTAO";
      let globalUniform = GlobalBindGroup.getCameraGroup(view.camera);
      this.gtaoCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    }
    let cfg = Engine3D.setting.render.postProcessing.gtao;
    this.directionsBuffer.setFloat32Array("array", this.randomDirection());
    this.directionsBuffer.apply();
    let scaleFactor = 1 - 0.2 * (Time.frame % 2);
    let maxDistance = cfg.maxDistance * scaleFactor;
    let maxPixel = cfg.maxPixel * scaleFactor;
    this.gtaoSetting.setFloat("maxDistance", maxDistance);
    this.gtaoSetting.setFloat("maxPixel", maxPixel);
    this.gtaoSetting.setFloat("darkFactor", cfg.darkFactor);
    this.gtaoSetting.setFloat("rayMarchSegment", cfg.rayMarchSegment);
    let camera = view.camera;
    this.gtaoSetting.setFloat("cameraNear", camera.near);
    this.gtaoSetting.setFloat("cameraFar", camera.far);
    this.gtaoSetting.setFloat("multiBounce", cfg.multiBounce ? 1 : 0);
    this.gtaoSetting.setFloat("blendColor", cfg.blendColor ? 1 : 0);
    this.gtaoSetting.apply();
    GPUContext.computeCommand(command, [this.gtaoCompute]);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let [w, h] = webGPUContext.presentationSize;
    this.gtaoTexture.resize(w, h);
    this.gtaoCompute.workerSizeX = Math.ceil(this.gtaoTexture.width / 8);
    this.gtaoCompute.workerSizeY = Math.ceil(this.gtaoTexture.height / 8);
    this.gtaoCompute.workerSizeZ = 1;
  }
}

class GlobalFog extends PostBase {
  /**
   * @internal
   */
  fogSetting;
  fogOpTexture;
  fogCompute;
  fogUniform;
  rendererPassState;
  constructor() {
    super();
    this.fogSetting = Engine3D.setting.render.postProcessing.globalFog;
  }
  createCompute(view) {
    ShaderLib.register("GlobalFog_shader", GlobalFog_shader);
    this.fogCompute = new ComputeShader(GlobalFog_shader);
    this.fogUniform = new UniformGPUBuffer(4 * 5);
    this.fogCompute.setUniformBuffer("fogUniform", this.fogUniform);
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    this.fogCompute.setSamplerTexture("gBufferTexture", rtFrame.getCompressGBufferTexture());
    this.fogCompute.setSamplerTexture("inTex", rtFrame.getColorTexture());
    this._lastSkyTexture = this.getSkyTexture();
    this.fogCompute.setSamplerTexture(`prefilterMap`, this._lastSkyTexture);
    this.fogCompute.setStorageTexture(`outTex`, this.fogOpTexture);
    this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
    this.rendererPassState.label = "FOG";
    let lightUniformEntries = GlobalBindGroup.getLightEntries(view.scene);
    this.fogCompute.setStorageBuffer(`lightBuffer`, lightUniformEntries.storageGPUBuffer);
  }
  uploadSetting() {
    let fogUniform = this.fogUniform;
    let globalFog = this.fogSetting;
    fogUniform.setColor("fogColor", globalFog.fogColor);
    fogUniform.setFloat("fogType", globalFog.fogType);
    fogUniform.setFloat("fogHeightScale", globalFog.fogHeightScale);
    fogUniform.setFloat("start", globalFog.start);
    fogUniform.setFloat("end", globalFog.end);
    fogUniform.setFloat("density", globalFog.density);
    fogUniform.setFloat("ins", globalFog.ins);
    fogUniform.setFloat("falloff", globalFog.falloff);
    fogUniform.setFloat("rayLength", globalFog.rayLength);
    fogUniform.setFloat("scatteringExponent", globalFog.scatteringExponent);
    fogUniform.setFloat("dirHeightLine", globalFog.dirHeightLine);
    fogUniform.setFloat("skyFactor", globalFog.skyFactor);
    fogUniform.setFloat("skyRoughness", globalFog.skyRoughness);
    fogUniform.setFloat("overrideSkyFactor", globalFog.overrideSkyFactor);
    fogUniform.setFloat("isSkyHDR", 0);
    fogUniform.apply();
    this.fogCompute.setUniformBuffer("fogUniform", this.fogUniform);
  }
  rtFrame;
  createResource() {
    let [w, h] = webGPUContext.presentationSize;
    this.fogOpTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.fogOpTexture.name = "fogTex";
    let fogDesc = new RTDescriptor();
    fogDesc.loadOp = `load`;
    this.rtFrame = new RTFrame([this.fogOpTexture], [fogDesc]);
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.globalFog.enable = true;
  }
  /**
   * @internal
   */
  onDetach(view) {
    Engine3D.setting.render.postProcessing.globalFog.enable = false;
  }
  set fogType(v) {
    this.fogSetting.fogType = v;
  }
  get fogType() {
    return this.fogSetting.fogType;
  }
  set fogHeightScale(v) {
    this.fogSetting.fogHeightScale = v;
  }
  get fogHeightScale() {
    return this.fogSetting.fogHeightScale;
  }
  set start(v) {
    this.fogSetting.start = v;
  }
  get start() {
    return this.fogSetting.start;
  }
  set end(v) {
    this.fogSetting.end = v;
  }
  get end() {
    return this.fogSetting.end;
  }
  set ins(v) {
    this.fogSetting.ins = v;
  }
  get ins() {
    return this.fogSetting.ins;
  }
  set density(v) {
    this.fogSetting.density = v;
  }
  get density() {
    return this.fogSetting.density;
  }
  set skyRoughness(v) {
    this.fogSetting.skyRoughness = v;
  }
  get skyRoughness() {
    return this.fogSetting.skyRoughness;
  }
  set skyFactor(v) {
    this.fogSetting.skyFactor = v;
  }
  get skyFactor() {
    return this.fogSetting.skyFactor;
  }
  set overrideSkyFactor(v) {
    this.fogSetting.overrideSkyFactor = v;
  }
  get overrideSkyFactor() {
    return this.fogSetting.overrideSkyFactor;
  }
  /**
   * @internal
   */
  get fogColor() {
    return this.fogSetting.fogColor;
  }
  /**
   * @internal
   */
  set fogColor(value) {
    this.fogSetting.fogColor.copyFrom(value);
  }
  set falloff(v) {
    this.fogSetting.falloff = v;
  }
  get falloff() {
    return this.fogSetting.falloff;
  }
  set rayLength(v) {
    this.fogSetting.rayLength = v;
  }
  get rayLength() {
    return this.fogSetting.rayLength;
  }
  set scatteringExponent(v) {
    this.fogSetting.scatteringExponent = v;
  }
  get scatteringExponent() {
    return this.fogSetting.scatteringExponent;
  }
  set dirHeightLine(v) {
    this.fogSetting.dirHeightLine = v;
  }
  get dirHeightLine() {
    return this.fogSetting.dirHeightLine;
  }
  _lastSkyTexture;
  getSkyTexture() {
    let texture = Engine3D.res.defaultSky;
    if (EntityCollect.instance.sky instanceof SkyRenderer) {
      texture = EntityCollect.instance.sky.map;
    }
    return texture;
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.fogCompute) {
      this.createResource();
      this.createCompute(view);
      this.onResize();
      let globalUniform = GlobalBindGroup.getCameraGroup(view.camera);
      this.fogCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    }
    let skyTexture = this.getSkyTexture();
    if (skyTexture != this._lastSkyTexture) {
      this._lastSkyTexture = skyTexture;
      this.fogCompute.setSamplerTexture(`prefilterMap`, this._lastSkyTexture);
    }
    this.fogCompute.setUniformFloat("isSkyHDR", skyTexture.isHDRTexture ? 1 : 0);
    this.uploadSetting();
    GPUContext.computeCommand(command, [this.fogCompute]);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let [w, h] = webGPUContext.presentationSize;
    this.fogOpTexture.resize(w, h);
    this.fogCompute.workerSizeX = Math.ceil(this.fogOpTexture.width / 8);
    this.fogCompute.workerSizeY = Math.ceil(this.fogOpTexture.height / 8);
    this.fogCompute.workerSizeZ = 1;
  }
}

class GodRayPost extends PostBase {
  /**
   * @internal
   */
  godRayTexture;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  godRayCompute;
  /**
   * @internal
   */
  historyGodRayData;
  /**
   * @internal
   */
  godRaySetting;
  rtFrame;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.godRay.enable = true;
    this.createGUI();
  }
  /**
   * @internal
   */
  Render;
  onDetach(view) {
    Engine3D.setting.render.postProcessing.godRay.enable = false;
    this.removeGUI();
  }
  get blendColor() {
    return Engine3D.setting.render.postProcessing.godRay.blendColor;
  }
  set blendColor(value) {
    Engine3D.setting.render.postProcessing.godRay.blendColor = value;
  }
  get rayMarchCount() {
    return Engine3D.setting.render.postProcessing.godRay.rayMarchCount;
  }
  set rayMarchCount(value) {
    value = clamp(value, 8, 20);
    Engine3D.setting.render.postProcessing.godRay.rayMarchCount = value;
  }
  get scatteringExponent() {
    return Engine3D.setting.render.postProcessing.godRay.scatteringExponent;
  }
  set scatteringExponent(value) {
    value = clamp(value, 1, 40);
    Engine3D.setting.render.postProcessing.godRay.scatteringExponent = value;
  }
  get intensity() {
    return Engine3D.setting.render.postProcessing.godRay.intensity;
  }
  set intensity(value) {
    value = clamp(value, 0.01, 5);
    Engine3D.setting.render.postProcessing.godRay.intensity = value;
  }
  createGUI() {
  }
  removeGUI() {
  }
  createCompute(view) {
    this.godRayCompute = new ComputeShader(GodRay_cs);
    let godRaySetting = new UniformGPUBuffer(4 * 3);
    this.godRayCompute.setUniformBuffer("godRayUniform", godRaySetting);
    this.historyGodRayData = new StorageGPUBuffer(4 * this.godRayTexture.width * this.godRayTexture.height);
    this.godRayCompute.setStorageBuffer("historyGodRayData", this.historyGodRayData);
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    this.godRayCompute.setSamplerTexture(`gBufferTexture`, rtFrame.getCompressGBufferTexture());
    this.autoSetColorTexture("inTex", this.godRayCompute);
    this.godRayCompute.setStorageTexture(`outTex`, this.godRayTexture);
    let shadowRenderer = Engine3D.getRenderJob(view).shadowMapPassRenderer;
    this.godRayCompute.setSamplerTexture(`shadowMap`, shadowRenderer.depth2DArrayTexture);
    this.godRaySetting = godRaySetting;
    this.onResize();
  }
  createResource() {
    let presentationSize = webGPUContext.presentationSize;
    let [w, h] = presentationSize;
    this.godRayTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.godRayTexture.name = "godRayTexture";
    let gtaoDec = new RTDescriptor();
    gtaoDec.loadOp = `load`;
    this.rtFrame = new RTFrame([this.godRayTexture], [gtaoDec]);
  }
  onResize() {
    let presentationSize = webGPUContext.presentationSize;
    let [w, h] = presentationSize;
    this.godRayTexture.resize(w, h);
    this.historyGodRayData.resizeBuffer(4 * this.godRayTexture.width * this.godRayTexture.height);
    this.godRayCompute.setStorageBuffer("historyGodRayData", this.historyGodRayData);
    this.godRayCompute.workerSizeX = Math.ceil(this.godRayTexture.width / 8);
    this.godRayCompute.workerSizeY = Math.ceil(this.godRayTexture.height / 8);
    this.godRayCompute.workerSizeZ = 1;
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.godRayCompute) {
      this.createResource();
      this.createCompute(view);
      let lightUniformEntries = GlobalBindGroup.getLightEntries(view.scene);
      this.godRayCompute.setStorageBuffer("lightBuffer", lightUniformEntries.storageGPUBuffer);
      this.godRayCompute.setStorageBuffer("models", GlobalBindGroup.modelMatrixBindGroup.matrixBufferDst);
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      this.rendererPassState.label = "GodRay";
      let globalUniform = GlobalBindGroup.getCameraGroup(view.camera);
      this.godRayCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    }
    let setting = Engine3D.setting.render.postProcessing.godRay;
    this.godRaySetting.setFloat("intensity", setting.intensity);
    this.godRaySetting.setFloat("rayMarchCount", setting.rayMarchCount);
    let presentationSize = webGPUContext.presentationSize;
    let [w, h] = presentationSize;
    this.godRaySetting.setFloat("viewPortWidth", w);
    this.godRaySetting.setFloat("viewPortHeight", h);
    this.godRaySetting.setFloat("blendColor", setting.blendColor ? 1 : 0);
    this.godRaySetting.setFloat("scatteringExponent", setting.scatteringExponent);
    this.godRaySetting.apply();
    GPUContext.computeCommand(command, [this.godRayCompute]);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
}

class OutlinePost extends PostBase {
  /**
   * @internal
   */
  outlineTex;
  /**
    * @internal
    */
  lowTex;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  calcWeightCompute;
  /**
   * @internal
   */
  outlineCompute;
  /**
  * @internal
  */
  blendCompute;
  /**
   * @internal
   */
  outlineSetting;
  /**
   * @internal
   */
  slotsBuffer;
  /**
   * @internal
   */
  slotsArray;
  /**
   * @internal
   */
  entitiesArray;
  /**
   * @internal
   */
  entitiesBuffer;
  /**
   * @internal
   */
  weightBuffer;
  /**
   * @internal
   */
  lowTexSize;
  /**
   * @internal
   */
  oldOutlineColor;
  /**
   * @internal
   */
  rtFrame;
  view;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    this.view = view;
    Engine3D.setting.render.postProcessing.outline.enable = true;
  }
  /**
   * @internal
   */
  onDetach(view) {
    Engine3D.setting.render.postProcessing.outline.enable = false;
  }
  set outlinePixel(value) {
    value = clamp(value, 0, 8);
    let cfg = Engine3D.setting.render.postProcessing.outline;
    if (cfg.outlinePixel != value) {
      cfg.outlinePixel = value;
    }
  }
  get outlinePixel() {
    return Engine3D.setting.render.postProcessing.outline.outlinePixel;
  }
  set fadeOutlinePixel(value) {
    let cfg = Engine3D.setting.render.postProcessing.outline;
    value = clamp(value, 0, 8);
    if (cfg.fadeOutlinePixel != value) {
      cfg.fadeOutlinePixel = value;
    }
  }
  get fadeOutlinePixel() {
    return Engine3D.setting.render.postProcessing.outline.fadeOutlinePixel;
  }
  set strength(value) {
    value = clamp(value, 0, 1);
    let cfg = Engine3D.setting.render.postProcessing.outline;
    if (cfg.strength != value) {
      cfg.strength = value;
    }
  }
  get strength() {
    return Engine3D.setting.render.postProcessing.outline.strength;
  }
  set useAddMode(value) {
    Engine3D.setting.render.postProcessing.outline.useAddMode = value;
  }
  get useAddMode() {
    return Engine3D.setting.render.postProcessing.outline.useAddMode;
  }
  createGUI() {
  }
  createCompute() {
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    this.calcWeightCompute = new ComputeShader(OutlineCalcOutline_cs);
    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);
    this.calcWeightCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    this.calcWeightCompute.setStorageBuffer("outlineSetting", this.outlineSetting);
    this.calcWeightCompute.setStorageBuffer("slotsBuffer", this.slotsBuffer);
    this.calcWeightCompute.setStorageBuffer(`weightBuffer`, this.weightBuffer);
    this.calcWeightCompute.setStorageBuffer(`entitiesBuffer`, this.entitiesBuffer);
    this.calcWeightCompute.setSamplerTexture(`gBufferTexture`, rtFrame.getCompressGBufferTexture());
    this.calcWeightCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.calcWeightCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.calcWeightCompute.workerSizeZ = 1;
    this.outlineCompute = new ComputeShader(Outline_cs);
    this.outlineCompute.setStorageBuffer("outlineSetting", this.outlineSetting);
    this.outlineCompute.setStorageBuffer("slotsBuffer", this.slotsBuffer);
    this.outlineCompute.setStorageBuffer(`weightBuffer`, this.weightBuffer);
    this.outlineCompute.setStorageBuffer(`oldOutlineColor`, this.oldOutlineColor);
    this.outlineCompute.setStorageTexture(`lowTex`, this.lowTex);
    this.outlineCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.outlineCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.outlineCompute.workerSizeZ = 1;
    this.blendCompute = new ComputeShader(OutLineBlendColor_cs);
    this.blendCompute.setStorageBuffer("outlineSetting", this.outlineSetting);
    this.autoSetColorTexture("inTex", this.blendCompute);
    this.blendCompute.setSamplerTexture(`lowTex`, this.lowTex);
    this.blendCompute.setStorageTexture(`outlineTex`, this.outlineTex);
    this.blendCompute.workerSizeX = Math.ceil(this.outlineTex.width / 8);
    this.blendCompute.workerSizeY = Math.ceil(this.outlineTex.height / 8);
    this.blendCompute.workerSizeZ = 1;
  }
  createResource() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    let textureScale = Engine3D.setting.render.postProcessing.outline.textureScale;
    this.lowTexSize = new Vector2(Math.ceil(w * textureScale), Math.ceil(h * textureScale));
    this.lowTex = new VirtualTexture(this.lowTexSize.x, this.lowTexSize.y, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.lowTex.name = "lowTex";
    let lowDec = new RTDescriptor();
    lowDec.clearValue = [0, 0, 0, 1];
    lowDec.loadOp = `clear`;
    this.outlineTex = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.outlineTex.name = "outlineTex";
    let outDec = new RTDescriptor();
    outDec.clearValue = [0, 0, 0, 1];
    outDec.loadOp = `clear`;
    this.rtFrame = new RTFrame([this.outlineTex], [outDec]);
    this.outlineSetting = new UniformGPUBuffer(8);
    this.weightBuffer = new StorageGPUBuffer(this.lowTexSize.x * this.lowTexSize.y * 4, GPUBufferUsage.COPY_SRC);
    this.oldOutlineColor = new StorageGPUBuffer(this.lowTexSize.x * this.lowTexSize.y * 4, GPUBufferUsage.COPY_SRC);
    this.slotsArray = new Float32Array(outlinePostData.SlotCount * 4);
    this.slotsBuffer = new StorageGPUBuffer(this.slotsArray.length);
    this.slotsBuffer.setFloat32Array("slotsArray", this.slotsArray);
    this.slotsBuffer.apply();
    this.entitiesArray = new Float32Array(outlinePostData.SlotCount * outlinePostData.MaxEntities);
    this.entitiesBuffer = new StorageGPUBuffer(this.entitiesArray.length);
    this.entitiesBuffer.setFloat32Array("entitiesArray", this.entitiesArray);
    this.slotsBuffer.apply();
    this.fetchData ||= { dirty: false, slots: [] };
  }
  fetchData;
  fetchOutlineData() {
    outlinePostData.fetchData(this.fetchData);
    if (this.fetchData.dirty) {
      let slotCount = outlinePostData.SlotCount;
      let maxEntities = outlinePostData.MaxEntities;
      for (let i = 0; i < slotCount; i++) {
        let offset = 4 * i;
        let slot = this.fetchData.slots[i];
        this.slotsArray[offset + 0] = slot.color.r;
        this.slotsArray[offset + 1] = slot.color.g;
        this.slotsArray[offset + 2] = slot.color.b;
        this.slotsArray[offset + 3] = slot.count;
        offset = maxEntities * i;
        this.entitiesArray.set(slot.indexList, offset);
      }
      this.slotsBuffer.setFloat32Array("slotsArray", this.slotsArray);
      this.slotsBuffer.apply();
      this.entitiesBuffer.setFloat32Array("entitiesArray", this.entitiesArray);
      this.entitiesBuffer.apply();
    }
  }
  computeList;
  /**
   * @internal
   */
  render(view, command) {
    if (!this.calcWeightCompute) {
      this.createResource();
      this.createCompute();
      this.createGUI();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
    }
    this.computeList ||= [this.calcWeightCompute, this.outlineCompute, this.blendCompute];
    let cfg = Engine3D.setting.render.postProcessing.outline;
    this.outlineSetting.setFloat("strength", cfg.strength);
    this.outlineSetting.setFloat("useAddMode", cfg.useAddMode ? 1 : 0);
    this.outlineSetting.setFloat("outlinePixel", cfg.outlinePixel);
    this.outlineSetting.setFloat("fadeOutlinePixel", cfg.fadeOutlinePixel);
    this.outlineSetting.setFloat("lowTexWidth", this.lowTexSize.x);
    this.outlineSetting.setFloat("lowTexHeight", this.lowTexSize.y);
    this.outlineSetting.apply();
    this.fetchOutlineData();
    GPUContext.computeCommand(command, this.computeList);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    let textureScale = Engine3D.setting.render.postProcessing.outline.textureScale;
    this.lowTexSize = new Vector2(Math.ceil(w * textureScale), Math.ceil(h * textureScale));
    this.lowTex.resize(this.lowTexSize.x, this.lowTexSize.y);
    this.outlineTex.resize(w, h);
    this.weightBuffer.resizeBuffer(this.lowTexSize.x * this.lowTexSize.y * 4);
    this.oldOutlineColor.resizeBuffer(this.lowTexSize.x * this.lowTexSize.y * 4);
    this.calcWeightCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.calcWeightCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.calcWeightCompute.workerSizeZ = 1;
    this.outlineCompute.workerSizeX = Math.ceil(this.lowTex.width / 8);
    this.outlineCompute.workerSizeY = Math.ceil(this.lowTex.height / 8);
    this.outlineCompute.workerSizeZ = 1;
    this.blendCompute.workerSizeX = Math.ceil(this.outlineTex.width / 8);
    this.blendCompute.workerSizeY = Math.ceil(this.outlineTex.height / 8);
    this.blendCompute.workerSizeZ = 1;
  }
}

class SSGIPost extends PostBase {
  /**
   * @internal
   */
  outTexture;
  newTexture;
  oldTexture;
  combineTexture;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  ssgiCompute;
  delayCompute;
  combineCompute;
  rtFrame;
  textureScaleSmallCompute;
  textureScaleBigCompute;
  view;
  colorTexture;
  posTexture;
  normalTexture;
  gBufferTexture;
  lastPosTexture;
  downSampleCofe = 1;
  // public downSampleCofe: number = 0.5;
  debugChanal = "0";
  updateBuffer;
  constructor() {
    super();
    this.updateBuffer = new StorageGPUBuffer(8 * 4);
    this.updateBuffer.setFloat("frameCount", 10);
    this.updateBuffer.setFloat("indirectIns", 1.5);
    this.updateBuffer.setFloat("delay", 0.02);
    this.updateBuffer.setFloat("colorIns", 1);
    this.updateBuffer.setFloat("d1", 0.03);
    this.updateBuffer.apply();
  }
  /**
   * @internal
   */
  onAttach(view) {
    this.view = view;
    view.camera.transform.onPositionChange = view.camera.transform.onPositionChange ? mergeFunctions(view.camera.transform.onPositionChange, (a, b) => this.onCameraChange(a, b)) : (a, b) => this.onCameraChange(a, b);
  }
  onCameraChange(oldPos, newPos) {
    console.log("a");
    let p = Vector3.distance(oldPos, newPos);
    p = Math.min(0.45, p) + 0.01;
    this.updateBuffer.setFloat("delay", p);
  }
  /**
   * @internal
   */
  Render;
  onDetach(view) {
  }
  set ins(v) {
    this.updateBuffer.setFloat("indirectIns", v);
    this.updateBuffer.apply();
  }
  get ins() {
    return this.updateBuffer.getFloat("indirectIns");
  }
  set delay(v) {
    this.updateBuffer.setFloat("delay", v);
    this.updateBuffer.apply();
  }
  get delay() {
    return this.updateBuffer.getFloat("delay");
  }
  set colorIns(v) {
    this.updateBuffer.setFloat("colorIns", v);
    this.updateBuffer.apply();
  }
  get colorIns() {
    return this.updateBuffer.getFloat("colorIns");
  }
  set frameCount(v) {
    this.updateBuffer.setFloat("frameCount", v);
    this.updateBuffer.apply();
  }
  get frameCount() {
    return this.updateBuffer.getFloat("frameCount");
  }
  set d1(v) {
    this.updateBuffer.setFloat("d1", v);
    this.updateBuffer.apply();
  }
  get d1() {
    return this.updateBuffer.getFloat("d1");
  }
  createResource() {
    let rtFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
    this.gBufferTexture = rtFrame.getCompressGBufferTexture();
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    this.lastPosTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.lastPosTexture.name = "lastPosTexture";
    this.outTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.outTexture.name = "outTexture";
    let inW = Math.floor(w * this.downSampleCofe);
    let inH = Math.floor(h * this.downSampleCofe);
    this.newTexture = new VirtualTexture(inW, inH, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.newTexture.name = "newTexture";
    this.oldTexture = new VirtualTexture(inW, inH, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.oldTexture.name = "oldTexture";
    this.combineTexture = new VirtualTexture(inW, inH, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.combineTexture.name = "combineTexture";
    let ssgiDec = new RTDescriptor();
    ssgiDec.loadOp = `load`;
    this.rtFrame = new RTFrame([
      this.outTexture
    ], [
      ssgiDec
    ]);
  }
  createCompute() {
    this.ssgiCompute = new ComputeShader(SSGI2_cs);
    this.delayCompute = new ComputeShader(Denoising_cs);
    this.combineCompute = new ComputeShader(Combine_cs);
    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);
    {
      this.ssgiCompute.setSamplerTexture(`gBufferTexture`, this.gBufferTexture);
      this.ssgiCompute.setSamplerTexture(`combineTexture`, this.combineTexture);
      this.ssgiCompute.setSamplerTexture(`oldTexture`, this.oldTexture);
      this.ssgiCompute.setStorageTexture(`newTexture`, this.newTexture);
      this.ssgiCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
      this.ssgiCompute.setStorageBuffer("updateBuffer", this.updateBuffer);
      this.autoSetColorTexture("inTex", this.ssgiCompute);
    }
    {
      this.delayCompute.setSamplerTexture(`newTexture`, this.newTexture);
      this.delayCompute.setSamplerTexture(`oldTexture`, this.oldTexture);
      this.delayCompute.setStorageTexture(`combineTexture`, this.combineTexture);
      this.delayCompute.setStorageBuffer("updateBuffer", this.updateBuffer);
    }
    {
      this.combineCompute.setSamplerTexture(`inputBTexture`, this.combineTexture);
      this.combineCompute.setSamplerTexture(`gBufferTexture`, this.gBufferTexture);
      this.combineCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
      this.combineCompute.setStorageTexture(`outTexture`, this.outTexture);
      this.combineCompute.setStorageBuffer(`updateBuffer`, this.updateBuffer);
    }
    {
      this.textureScaleBigCompute = new TextureScaleCompute();
      this.textureScaleBigCompute.setInputes(
        null,
        // this.colorTexture,
        [this.combineTexture],
        [this.outTexture]
      );
    }
  }
  render(view, command) {
  }
  frame = 0;
  compute(view) {
    if (!this.ssgiCompute) {
      this.createResource();
      this.createCompute();
      this.onResize();
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      this.rendererPassState.label = "SSGI";
    }
    this.frameCount = this.frame;
    this.frame++;
    let command = GPUContext.beginCommandEncoder();
    switch (parseInt(this.debugChanal)) {
      case 0:
        GPUContext.copyTexture(command, this.combineTexture, this.oldTexture);
        GPUContext.computeCommand(command, [this.ssgiCompute, this.delayCompute, this.combineCompute]);
        break;
      case 1:
        GPUContext.copyTexture(command, this.posTexture, this.lastPosTexture);
        GPUContext.copyTexture(command, this.lastPosTexture, this.outTexture);
        break;
      case 2:
        GPUContext.copyTexture(command, this.normalTexture, this.outTexture);
        break;
      case 3:
        GPUContext.copyTexture(command, this.posTexture, this.outTexture);
        break;
      case 4:
        GPUContext.copyTexture(command, this.colorTexture, this.outTexture);
        break;
      case 5:
        GPUContext.copyTexture(command, this.gBufferTexture, this.outTexture);
        break;
    }
    GPUContext.lastRenderPassState = this.rendererPassState;
    this.updateBuffer.setFloat("delay", 0.01);
  }
  onResize() {
    let presentationSize = webGPUContext.presentationSize;
    let w = presentationSize[0];
    let h = presentationSize[1];
    this.outTexture.resize(w, h);
    this.ssgiCompute.workerSizeX = Math.ceil(this.newTexture.width / 16);
    this.ssgiCompute.workerSizeY = Math.ceil(this.newTexture.height / 16);
    this.ssgiCompute.workerSizeZ = 1;
    this.delayCompute.workerSizeX = Math.ceil(this.combineTexture.width / 16);
    this.delayCompute.workerSizeY = Math.ceil(this.combineTexture.height / 16);
    this.delayCompute.workerSizeZ = 1;
    this.combineCompute.workerSizeX = Math.ceil(this.outTexture.width / 16);
    this.combineCompute.workerSizeY = Math.ceil(this.outTexture.height / 16);
    this.combineCompute.workerSizeZ = 1;
  }
}

class SSRPost extends PostBase {
  SSR_RayTraceCompute;
  SSR_IS_Compute;
  SSR_Blend_Compute;
  /**
   * @internal
   */
  isRetTexture;
  /**
   * @internal
   */
  finalTexture;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  ssrUniformBuffer;
  /**
   * @internal
   */
  rayTraceData;
  /**
   * @internal
   */
  ssrColorData;
  /**
   * @internal
   */
  rtFrame;
  historyPosition;
  view;
  /**
   * @internal
   */
  onAttach(view) {
    this.view = view;
    Engine3D.setting.render.postProcessing.ssr.enable = true;
  }
  /**
   * @internal
   */
  onDetach(view) {
    Engine3D.setting.render.postProcessing.ssr.enable = false;
  }
  reflectionRatio = 0.5;
  //sqrt
  get fadeEdgeRatio() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.fadeEdgeRatio;
  }
  set fadeEdgeRatio(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.fadeEdgeRatio = value;
  }
  get rayMarchRatio() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.rayMarchRatio;
  }
  set rayMarchRatio(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.rayMarchRatio = value;
  }
  get roughnessThreshold() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.roughnessThreshold;
  }
  set roughnessThreshold(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.roughnessThreshold = value;
  }
  get fadeDistanceMin() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.fadeDistanceMin;
  }
  set fadeDistanceMin(value) {
    value = clamp(value, 0, 1e4);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.fadeDistanceMin = value;
  }
  get fadeDistanceMax() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.fadeDistanceMax;
  }
  set fadeDistanceMax(value) {
    value = clamp(value, 0, 1e4);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.fadeDistanceMax = value;
  }
  get powDotRN() {
    let setting = Engine3D.setting.render.postProcessing.ssr;
    return setting.powDotRN;
  }
  set powDotRN(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.ssr;
    setting.powDotRN = value;
  }
  createRayTraceShader() {
    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);
    this.SSR_RayTraceCompute = new ComputeShader(SSR_RayTrace_cs);
    this.SSR_RayTraceCompute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    this.SSR_RayTraceCompute.setUniformBuffer("ssrUniform", this.ssrUniformBuffer);
    this.SSR_RayTraceCompute.setStorageBuffer(`rayTraceBuffer`, this.rayTraceData);
    this.SSR_RayTraceCompute.setStorageBuffer(`historyPosition`, this.historyPosition);
    let rtFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
    let gBufferTexture = rtFrame.getCompressGBufferTexture();
    this.SSR_RayTraceCompute.setSamplerTexture("gBufferTexture", gBufferTexture);
    if (EntityCollect.instance.sky instanceof SkyRenderer)
      this.SSR_RayTraceCompute.setSamplerTexture(`prefilterMap`, EntityCollect.instance.sky.map);
    this.SSR_RayTraceCompute.workerSizeX = Math.ceil(this.isRetTexture.width / 8);
    this.SSR_RayTraceCompute.workerSizeY = Math.ceil(this.isRetTexture.height / 8);
    this.SSR_RayTraceCompute.workerSizeZ = 1;
  }
  createISShader() {
    this.SSR_IS_Compute = new ComputeShader(SSR_IS_cs);
    this.SSR_IS_Compute.setStorageBuffer("ssrUniform", this.ssrUniformBuffer);
    this.SSR_IS_Compute.setStorageBuffer(`rayTraceBuffer`, this.rayTraceData);
    this.SSR_IS_Compute.setStorageBuffer(`ssrColorData`, this.ssrColorData);
    this.SSR_IS_Compute.setStorageBuffer(`historyPosition`, this.historyPosition);
    this.SSR_IS_Compute.setSamplerTexture(`colorMap`, this.getOutTexture());
    this.SSR_IS_Compute.setStorageTexture(`outTex`, this.isRetTexture);
    this.SSR_IS_Compute.workerSizeX = Math.ceil(this.isRetTexture.width / 8);
    this.SSR_IS_Compute.workerSizeY = Math.ceil(this.isRetTexture.height / 8);
    this.SSR_IS_Compute.workerSizeZ = 1;
  }
  createBlendShader(input) {
    let globalUniform = GlobalBindGroup.getCameraGroup(this.view.camera);
    this.SSR_Blend_Compute = new ComputeShader(SSR_BlendColor_cs);
    this.SSR_Blend_Compute.setStorageBuffer(`rayTraceBuffer`, this.rayTraceData);
    this.SSR_Blend_Compute.setUniformBuffer("globalUniform", globalUniform.uniformGPUBuffer);
    let rtFrame = GBufferFrame.getGBufferFrame("ColorPassGBuffer");
    let gBufferTexture = rtFrame.getCompressGBufferTexture();
    this.SSR_Blend_Compute.setSamplerTexture("gBufferTexture", gBufferTexture);
    this.SSR_Blend_Compute.setSamplerTexture("colorMap", this.getOutTexture());
    this.SSR_Blend_Compute.setSamplerTexture(`ssrMap`, input);
    this.SSR_Blend_Compute.setStorageTexture(`outTex`, this.finalTexture);
    this.SSR_Blend_Compute.workerSizeX = Math.ceil(this.finalTexture.width / 8);
    this.SSR_Blend_Compute.workerSizeY = Math.ceil(this.finalTexture.height / 8);
    this.SSR_Blend_Compute.workerSizeZ = 1;
  }
  createResource() {
    let [w, h] = webGPUContext.presentationSize;
    this.finalTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
    this.finalTexture.name = "ssrOutTex";
    let rtDec = new RTDescriptor();
    rtDec.clearValue = [0, 0, 0, 0];
    rtDec.loadOp = `clear`;
    let ssrWidth = Math.ceil(w * Engine3D.setting.render.postProcessing.ssr.pixelRatio);
    let ssrHeight = Math.ceil(h * Engine3D.setting.render.postProcessing.ssr.pixelRatio);
    this.isRetTexture = new VirtualTexture(ssrWidth, ssrHeight, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING);
    this.isRetTexture.name = "ssrTextureIn";
    let isRetDec = new RTDescriptor();
    isRetDec.clearValue = [0, 0, 0, 0];
    isRetDec.loadOp = `clear`;
    this.rtFrame = new RTFrame([
      this.finalTexture,
      this.isRetTexture
    ], [
      rtDec,
      isRetDec
    ]);
    this.rayTraceData = new StorageGPUBuffer(ssrWidth * ssrHeight * 8, GPUBufferUsage.COPY_SRC);
    this.ssrColorData = new StorageGPUBuffer(ssrWidth * ssrHeight * 4, GPUBufferUsage.COPY_SRC);
    this.historyPosition = new StorageGPUBuffer(ssrWidth * ssrHeight * 4, GPUBufferUsage.COPY_SRC);
    this.ssrUniformBuffer = new UniformGPUBuffer(4 * 8);
    this.ssrUniformBuffer.setFloat("ssrBufferSizeX", this.isRetTexture.width);
    this.ssrUniformBuffer.setFloat("ssrBufferSizeY", this.isRetTexture.height);
    this.ssrUniformBuffer.setFloat("colorMapSizeX", this.finalTexture.width);
    this.ssrUniformBuffer.setFloat("colorMapSizeY", this.finalTexture.height);
    this.ssrUniformBuffer.apply();
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.SSR_RayTraceCompute) {
      this.createResource();
      this.createISShader();
      this.createRayTraceShader();
      this.createBlendShader(this.isRetTexture);
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
      let standUniform = GlobalBindGroup.getCameraGroup(view.camera);
      this.SSR_RayTraceCompute.setUniformBuffer("standUniform", standUniform.uniformGPUBuffer);
    }
    let setting = Engine3D.setting.render.postProcessing.ssr;
    this.ssrUniformBuffer.setFloat("fadeEdgeRatio", setting.fadeEdgeRatio);
    this.ssrUniformBuffer.setFloat("rayMarchRatio", setting.rayMarchRatio);
    this.ssrUniformBuffer.setFloat("fadeDistanceMin", setting.fadeDistanceMin);
    this.ssrUniformBuffer.setFloat("fadeDistanceMax", setting.fadeDistanceMax);
    this.ssrUniformBuffer.setFloat("mixThreshold", setting.mixThreshold);
    this.ssrUniformBuffer.setFloat("roughnessThreshold", setting.roughnessThreshold);
    this.ssrUniformBuffer.setFloat("reflectionRatio", this.reflectionRatio);
    this.ssrUniformBuffer.setFloat("powDotRN", setting.powDotRN);
    this.ssrUniformBuffer.setFloat("randomSeedX", Math.random());
    this.ssrUniformBuffer.setFloat("randomSeedY", Math.random());
    this.ssrUniformBuffer.apply();
    let computes = [this.SSR_RayTraceCompute, this.SSR_IS_Compute, this.SSR_Blend_Compute];
    GPUContext.computeCommand(command, computes);
    GPUContext.lastRenderPassState = this.rendererPassState;
  }
  onResize() {
    let [w, h] = webGPUContext.presentationSize;
    let ssrWidth = Math.ceil(w * Engine3D.setting.render.postProcessing.ssr.pixelRatio);
    let ssrHeight = Math.ceil(h * Engine3D.setting.render.postProcessing.ssr.pixelRatio);
    this.finalTexture.resize(w, h);
    this.isRetTexture.resize(ssrWidth, ssrHeight);
    this.rayTraceData.resizeBuffer(ssrWidth * ssrHeight * 8);
    this.ssrColorData.resizeBuffer(ssrWidth * ssrHeight * 4);
    this.historyPosition.resizeBuffer(ssrWidth * ssrHeight * 4);
    this.ssrUniformBuffer.setFloat("ssrBufferSizeX", this.isRetTexture.width);
    this.ssrUniformBuffer.setFloat("ssrBufferSizeY", this.isRetTexture.height);
    this.ssrUniformBuffer.setFloat("colorMapSizeX", this.finalTexture.width);
    this.ssrUniformBuffer.setFloat("colorMapSizeY", this.finalTexture.height);
    this.SSR_RayTraceCompute.workerSizeX = Math.ceil(this.isRetTexture.width / 8);
    this.SSR_RayTraceCompute.workerSizeY = Math.ceil(this.isRetTexture.height / 8);
    this.SSR_RayTraceCompute.workerSizeZ = 1;
    this.SSR_IS_Compute.workerSizeX = Math.ceil(this.isRetTexture.width / 8);
    this.SSR_IS_Compute.workerSizeY = Math.ceil(this.isRetTexture.height / 8);
    this.SSR_IS_Compute.workerSizeZ = 1;
    this.SSR_Blend_Compute.workerSizeX = Math.ceil(this.finalTexture.width / 8);
    this.SSR_Blend_Compute.workerSizeY = Math.ceil(this.finalTexture.height / 8);
    this.SSR_Blend_Compute.workerSizeZ = 1;
  }
}
class SSR_IS_Kernel {
  static createSeeds() {
    let scaler = 20;
    let count = 32;
    let list = [new Vector3(0, 0, scaler)];
    let angle = 0;
    let radius = 0.02;
    for (let i = 1; i < count; i++) {
      let pt = new Vector3();
      list.push(pt);
      angle += 1 - (1 - 0.618) * i / count;
      radius += i * 0.01;
      pt.x = Math.sin(angle) * radius;
      pt.y = Math.cos(angle) * radius;
      pt.z = 1 - i / count;
      pt.multiplyScalar(scaler);
    }
    return list;
  }
}

class TAAPost extends PostBase {
  /**
   * @internal
   */
  taaTexture;
  outTexture;
  /**
   * @internal
   */
  rendererPassState;
  /**
   * @internal
   */
  taaCompute;
  copyTexCompute;
  sharpCompute;
  /**
   * @internal
   */
  taaSetting;
  /**
   * @internal
   */
  preColorBuffer;
  preColorTex;
  /**
   * @internal
   */
  preProjMatrix;
  preViewMatrix;
  rtFrame;
  constructor() {
    super();
  }
  /**
   * @internal
   */
  onAttach(view) {
    Engine3D.setting.render.postProcessing.taa.enable = true;
    view.camera.enableJitterProjection(true);
    this.createGUI();
  }
  /**
   * @internal
   */
  onDetach(view) {
    Engine3D.setting.render.postProcessing.taa.enable = false;
    view.camera.enableJitterProjection(false);
  }
  get jitterSeedCount() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    return setting.jitterSeedCount;
  }
  set jitterSeedCount(value) {
    value = clamp(value, 2, 32);
    value = Math.round(value);
    let setting = Engine3D.setting.render.postProcessing.taa;
    setting.jitterSeedCount = value;
  }
  get blendFactor() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    return setting.blendFactor;
  }
  set blendFactor(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.taa;
    setting.blendFactor = value;
  }
  get sharpFactor() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    return setting.sharpFactor;
  }
  set sharpFactor(value) {
    value = clamp(value, 0.1, 0.99);
    let setting = Engine3D.setting.render.postProcessing.taa;
    setting.sharpFactor = value;
  }
  get sharpPreBlurFactor() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    return setting.sharpPreBlurFactor;
  }
  set sharpPreBlurFactor(value) {
    value = clamp(value, 0.1, 0.99);
    let setting = Engine3D.setting.render.postProcessing.taa;
    setting.sharpPreBlurFactor = value;
  }
  get temporalJitterScale() {
    let setting = Engine3D.setting.render.postProcessing.taa;
    return setting.temporalJitterScale;
  }
  set temporalJitterScale(value) {
    value = clamp(value, 0, 1);
    let setting = Engine3D.setting.render.postProcessing.taa;
    setting.temporalJitterScale = value;
  }
  createGUI() {
  }
  createCompute(view) {
    let computeShader = new ComputeShader(TAA_cs);
    let taaSetting = new UniformGPUBuffer(16 * 2 + 4 * 3);
    let standUniform = GlobalBindGroup.getCameraGroup(view.camera);
    computeShader.setUniformBuffer("globalUniform", standUniform.uniformGPUBuffer);
    computeShader.setUniformBuffer("taaData", taaSetting);
    computeShader.setStorageBuffer(`preColorBuffer`, this.preColorBuffer);
    let rtFrame = GBufferFrame.getGBufferFrame(GBufferFrame.colorPass_GBuffer);
    computeShader.setSamplerTexture(`preColorTex`, this.preColorTex);
    computeShader.setSamplerTexture(`gBufferTexture`, rtFrame.getCompressGBufferTexture());
    this.autoSetColorTexture("inTex", computeShader);
    computeShader.setStorageTexture(`outTex`, this.taaTexture);
    computeShader.workerSizeX = Math.ceil(this.taaTexture.width / 8);
    computeShader.workerSizeY = Math.ceil(this.taaTexture.height / 8);
    computeShader.workerSizeZ = 1;
    this.taaCompute = computeShader;
    this.taaSetting = taaSetting;
    this.copyTexCompute = new ComputeShader(TAACopyTex_cs);
    this.copyTexCompute.setStorageBuffer(`preColor`, this.preColorBuffer);
    this.copyTexCompute.setStorageTexture(`preColorTex`, this.preColorTex);
    this.copyTexCompute.workerSizeX = Math.ceil(this.taaTexture.width / 8);
    this.copyTexCompute.workerSizeY = Math.ceil(this.taaTexture.height / 8);
    this.copyTexCompute.workerSizeZ = 1;
    this.sharpCompute = new ComputeShader(TAASharpTex_cs);
    this.sharpCompute.setUniformBuffer("taaData", taaSetting);
    this.sharpCompute.setSamplerTexture(`inTex`, this.taaTexture);
    this.sharpCompute.setStorageTexture(`outTex`, this.outTexture);
    this.sharpCompute.workerSizeX = Math.ceil(this.outTexture.width / 8);
    this.sharpCompute.workerSizeY = Math.ceil(this.outTexture.height / 8);
    this.sharpCompute.workerSizeZ = 1;
  }
  createResource() {
    this.preProjMatrix = new Matrix4().identity();
    this.preViewMatrix = new Matrix4().identity();
    let [w, h] = webGPUContext.presentationSize;
    this.preColorBuffer = new StorageGPUBuffer(w * h * 4, GPUBufferUsage.COPY_SRC);
    this.preColorTex = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.preColorTex.name = "taaTex";
    let preColorDec = new RTDescriptor();
    preColorDec.clearValue = [0, 0, 0, 1];
    preColorDec.loadOp = `clear`;
    this.taaTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.taaTexture.name = "taaTex";
    let taaDec = new RTDescriptor();
    taaDec.clearValue = [0, 0, 0, 1];
    taaDec.loadOp = `clear`;
    this.outTexture = new VirtualTexture(w, h, GPUTextureFormat.rgba16float, false, GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING);
    this.outTexture.name = "sharpTaaTex";
    let outDec = new RTDescriptor();
    outDec.clearValue = [0, 0, 0, 1];
    outDec.loadOp = `clear`;
    this.rtFrame = new RTFrame([
      this.preColorTex,
      this.taaTexture,
      this.outTexture
    ], [
      preColorDec,
      taaDec,
      outDec
    ]);
  }
  /**
   * @internal
   */
  render(view, command) {
    if (!this.taaCompute) {
      this.createResource();
      this.createCompute(view);
      this.rendererPassState = WebGPUDescriptorCreator.createRendererPassState(this.rtFrame, null);
    }
    let cfg = Engine3D.setting.render.postProcessing.taa;
    this.taaSetting.setMatrix("preProjMatrix", this.preProjMatrix);
    this.taaSetting.setMatrix("preViewMatrix", this.preViewMatrix);
    this.taaSetting.setFloat("jitterFrameIndex", view.camera.jitterFrameIndex);
    this.taaSetting.setFloat("blendFactor", cfg.blendFactor);
    this.taaSetting.setFloat("sharpFactor", cfg.sharpFactor);
    this.taaSetting.setFloat("sharpPreBlurFactor", cfg.sharpPreBlurFactor);
    this.taaSetting.setFloat("jitterX", view.camera.jitterX);
    this.taaSetting.setFloat("jitterY", view.camera.jitterY);
    this.taaSetting.apply();
    GPUContext.computeCommand(command, [this.copyTexCompute, this.taaCompute, this.sharpCompute]);
    GPUContext.lastRenderPassState = this.rendererPassState;
    this.preProjMatrix.copyFrom(view.camera.projectionMatrix);
    this.preViewMatrix.copyFrom(view.camera.viewMatrix);
  }
  onResize() {
    let [w, h] = webGPUContext.presentationSize;
    this.preColorBuffer.resizeBuffer(w * h * 4);
    this.taaTexture.resize(w, h);
    this.outTexture.resize(w, h);
    this.preColorTex.resize(w, h);
    this.taaCompute.workerSizeX = Math.ceil(this.taaTexture.width / 8);
    this.taaCompute.workerSizeY = Math.ceil(this.taaTexture.height / 8);
    this.taaCompute.workerSizeZ = 1;
    this.copyTexCompute.workerSizeX = Math.ceil(this.taaTexture.width / 8);
    this.copyTexCompute.workerSizeY = Math.ceil(this.taaTexture.height / 8);
    this.copyTexCompute.workerSizeZ = 1;
    this.sharpCompute.workerSizeX = Math.ceil(this.outTexture.width / 8);
    this.sharpCompute.workerSizeY = Math.ceil(this.outTexture.height / 8);
    this.sharpCompute.workerSizeZ = 1;
  }
}

class OutlinePostManager {
  _tempIndexArray = [];
  /**
   * config outline manager.
   * Specify specific 3D objects to use the specified color for display outline
   * @param objectList A set of 3D objects
   * @param color Specified color for outline
   */
  setOutline(objectList, color) {
    this.setOutlineList([objectList], color ? [color] : null);
  }
  /**
   * config outline manager.
   * The first set of objects uses the first color to display outline, and so on
   * @param groupList A group of 3D objects set
   * @param colorList Specified color list for outline
   */
  setOutlineList(groupList, colorList) {
    groupList ||= [];
    let defaultColor = outlinePostData.defaultColor;
    let maxGroup = outlinePostData.SlotCount;
    for (let i = 0; i < maxGroup; i++) {
      this._tempIndexArray.length = 0;
      let group = groupList[i];
      let color = (colorList ? colorList[i] : null) || defaultColor;
      if (group) {
        for (const item of group) {
          this.getEntityIdList(item, this._tempIndexArray);
        }
      }
      outlinePostData.fillDataAt(i, this._tempIndexArray, color);
    }
  }
  /**
   * clear outline effect
   */
  clearOutline() {
    outlinePostData.clear();
    return this;
  }
  _rendererList = [];
  getEntityIdList(item, target) {
    this._rendererList.length = 0;
    let renderers = item.getComponents(MeshRenderer, this._rendererList);
    for (const render of renderers) {
      target.push(render.object3D.transform._worldMatrix.index);
    }
  }
}
let outlinePostManager = new OutlinePostManager();

class PickResult {
  /**
   * the intersection point (local coordinates) on the model.
   */
  localPosition = new Vector3();
  /**
   * the intersection point (world coordinates) on the model.
   */
  worldPosition = new Vector3();
  /**
   * the uv on the model.
   * Only when the PickType of the object is UVPick and the model has UV will it be valid
   * @see PickType
   */
  uv = new Vector2();
  /**
   * the triangle index at the intersection position of mesh
   */
  faceIndex;
  isIn = false;
  t = 0;
  u = 0;
  v = 0;
  /**
   * the triangle at the intersection position of mesh
   */
  triangle;
  /**
   * @internal
   * the uv0 at the intersection position of mesh
   */
  v0;
  /**
   * @internal
   * the uv1 at the intersection position of mesh
   */
  v1;
  /**
   * @internal
   */
  v2;
  /**
   * @internal
   */
  pickList;
  /**
  * @internal
  */
  color;
  //= new Color();
}

class RayCastMeshDetail {
  /**
   * define a tiny number
   */
  static EPS = 1e-4;
  /**
   * define a maximum float
   */
  static FLT_MAX = 3402823466e29;
  /**
   * calculate the distance between a point and a plane(defined by point a, point b, point c)
   */
  static distPtTri(p, a, b, c) {
    let v0 = new Vector3();
    let v1 = new Vector3();
    let v2 = new Vector3();
    c.subtract(a, v0);
    b.subtract(a, v1);
    p.subtract(a, v2);
    let dot00 = dot(v0, v0);
    let dot01 = dot(v0, v1);
    let dot02 = dot(v0, v2);
    let dot11 = dot(v1, v1);
    let dot12 = dot(v1, v2);
    let invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    let u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    let v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    if (u >= -RayCastMeshDetail.EPS && v >= -RayCastMeshDetail.EPS && u + v <= 1 + RayCastMeshDetail.EPS) {
      let y = a[1] + v0[1] * u + v1[1] * v;
      return Math.abs(y - p[1]);
    }
    return RayCastMeshDetail.FLT_MAX;
  }
  static _info = new PickResult();
  // Determine whether a ray intersect with a triangle
  // Parameters
  // orig: origin of the ray
  // dir: direction of the ray
  // v0, v1, v2: vertices of triangle
  // t(out): weight of the intersection for the ray
  // u(out), v(out): barycentric coordinate of intersection
  static IntersectTriangle(ray, face, backfaceCulling) {
    let v0 = face.v1;
    let v1 = face.v2;
    let v2 = face.v3;
    let E1 = v1.subtract(v0, Vector3.HELP_3);
    let E2 = v2.subtract(v0, Vector3.HELP_4);
    let P = ray.direction.crossProduct(E2, Vector3.HELP_5);
    let det = dot(E1, P);
    let T;
    if (det > 0) {
      if (backfaceCulling) {
        return null;
      }
      T = ray.origin.subtract(v0, Vector3.HELP_2);
    } else {
      T = v0.subtract(ray.origin, Vector3.HELP_2);
      det = -det;
    }
    if (det < 1e-4) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }
    let u = dot(T, P);
    if (u < 0 || u > det) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }
    let Q = T.crossProduct(E1, Vector3.HELP_1);
    let v = dot(ray.direction, Q);
    if (v < 0 || u + v > det) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }
    let t = dot(E2, Q);
    let fInvDet = 1 / det;
    t *= fInvDet;
    u *= fInvDet;
    v *= fInvDet;
    this._info.isIn = true;
    this._info.t = t;
    this._info.u = u;
    this._info.v = v;
    let d = 1 - u - v;
    this._u0.copyFrom(face.u1);
    this._u0.scale(d);
    this._u1.copyFrom(face.u2);
    this._u1.scale(u);
    this._u2.copyFrom(face.u3);
    this._u2.scale(v);
    this._info.uv.copyFrom(this._u0);
    this._info.uv.add(this._u1, this._info.uv);
    this._info.uv.add(this._u2, this._info.uv);
    this._info.localPosition.copyFrom(ray.direction).multiplyScalar(t);
    this._info.localPosition.add(ray.origin, this._info.localPosition);
    return this._info;
  }
  static _u0 = new Vector2();
  static _u1 = new Vector2();
  static _u2 = new Vector2();
}

class LoaderManager extends CEventDispatcher {
  static _instance;
  _maxRetry = 3;
  /**
   * Load multiple resources of the same type simultaneously
   * @param urls URL list
   * @param c Type of resource parser
   * @returns
   */
  loadAll(urls, c) {
    return new Promise((succ, fail) => {
      let count = urls.length;
      let ret = [];
      urls.forEach((url, index) => {
        let parser = new c();
        this.load(url, c).then((data) => {
          parser.parse(data);
          ret.push(parser);
          count--;
          if (count === 0) {
            succ(ret);
          }
        });
      });
    });
  }
  constructor() {
    super();
    if (LoaderManager._instance) {
      throw new Error("LoadManager is singleton class...");
    }
  }
  static getInstance() {
    return this._instance || (this._instance = new LoaderManager());
  }
  loadUrls(urls, c) {
    return new Promise((succ, fail) => {
      let count = urls.length;
      let ret = [];
      urls.forEach((url, index) => {
        this.load(url, c).then((data) => {
          ret.push(data);
          count--;
          if (count === 0) {
            succ(ret);
          }
          if (count < 0) {
            console.error(`loadUrls ${urls} error`);
          }
        });
      });
    });
  }
  get maxRetry() {
    return this._maxRetry;
  }
  set maxRetry(value) {
    this._maxRetry = value;
  }
  // public set retry(value: number) {
  //   this._maxRetry = value;
  // }
  // public get retry():number {
  //   return this._maxRetry;
  // }
  load(url, c) {
    return new Promise((succ, fail) => {
      switch (c[`format`]) {
              }
    });
  }
}

class GLTFMaterial {
  name;
  defines;
  doubleSided;
  baseColorFactor;
  emissiveFactor;
  metallicFactor;
  roughnessFactor;
  alphaCutoff;
  enableBlend;
  baseColorTexture;
  metallicRoughnessTexture;
  normalTexture;
  occlusionTexture;
  emissiveTexture;
  extensions;
  baseMapOffsetSize;
  normalMapOffsetSize;
  emissiveMapOffsetSize;
  roughnessMapOffsetSize;
  metallicMapOffsetSize;
  aoMapOffsetSize;
}

class KHR_lights_punctual {
}

class KHR_materials_ior {
}

class KHR_materials_sheen {
}

class KHR_materials_specular {
}

class KHR_materials_transmission {
}

class KHR_materials_variants {
}

class KHR_materials_volume {
}

class KHR_mesh_quantization {
}

class KHR_texture_basisu {
}

class KHR_texture_transform {
}

class PrefabStringUtil {
  static getNumber(st) {
    let v = parseFloat(st);
    return v;
  }
  static getInt(st) {
    let v = parseInt(st);
    return v;
  }
  static getBoolean(st) {
    let v = st == "true" ? true : false;
    return v;
  }
  static getNumberArray(st) {
    let v = st.replaceAll("[", "");
    v = v.replaceAll("]", "");
    let list = v.split(",");
    for (let i = 0; i < list.length; i++) {
      parseFloat(list[i]);
    }
    return v;
  }
  static getStringArray(st) {
    let v = st.replaceAll("[", "");
    v = v.replaceAll("]", "");
    let list = v.split(",");
    let ret = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      ret.push(element);
    }
    return ret;
  }
  static getVector2(st) {
  }
  static getVector3(st) {
  }
  static getVector4(st) {
  }
  static getQuaternion(st) {
  }
  static getColor(st) {
  }
}

class BlendShapeFrameData {
  weight;
  // public deltaVertices: Vector3[];
  // public deltaNormals: Vector3[];
  // public deltaTangents: Vector3[];
  deltaVertices;
  deltaNormals;
  deltaTangents;
  formBytes(byteArray) {
    let bytes = byteArray.readBytesArray();
    this.weight = bytes.readFloat32();
    let len = 0;
    len = bytes.readInt32();
    this.deltaVertices = bytes.readFloat32Array(len * 3);
    len = bytes.readInt32();
    this.deltaNormals = bytes.readFloat32Array(len * 3);
    len = bytes.readInt32();
    this.deltaTangents = bytes.readFloat32Array(len * 3);
  }
}

class TileSet {
  asset;
  extras;
  geometricError;
  properties;
  refine;
  root;
}
class TileSetRoot {
  boundingVolume;
  children;
  geometricError;
  transform;
}
class TileSetChild {
  boundingVolume;
  geometricError;
  refine;
  content;
  contents;
}
class TileSetChildContent {
  uri;
  group;
  metadata;
}
class TileSetChildContentMetaData {
  class;
  properties;
}

class TilesRenderer {
  group;
  _modelList;
  _tileSet;
  _rootPath;
  constructor() {
    this.group = new Object3D();
  }
  async loadTileSet(rootPath, file) {
    this._modelList = [];
    this._rootPath = rootPath;
    let combinePath = rootPath + "/" + file;
    this._tileSet = await Engine3D.res.loadJSON(combinePath);
    if (this._tileSet.root.transform) {
      let rootMatrix = new Matrix4();
      for (let i = 0; i < 16; i++) {
        rootMatrix.rawData[i] = this._tileSet.root.transform[i];
      }
    }
    let adjustmentTransform = new Matrix4();
    const upAxis = this._tileSet.asset && this._tileSet.asset.gltfUpAxis || "y";
    switch (upAxis.toLowerCase()) {
      case "x":
        adjustmentTransform.makeRotationAxis(Vector3.Y_AXIS, -Math.PI / 2);
        break;
      case "y":
        adjustmentTransform.makeRotationAxis(Vector3.X_AXIS, Math.PI / 2);
        break;
      case "z":
        adjustmentTransform.identity();
        break;
    }
    let invertMatrix = adjustmentTransform.clone();
    invertMatrix.invert();
    this.applyTransform(this.group.transform, invertMatrix);
    for (let item of this._tileSet.root.children) {
      let uriList = [];
      if (item.content && item.content.uri) {
        uriList.push(item.content.uri);
      }
      if (item.contents) {
        for (let c of item.contents) {
          uriList.push(c.uri);
        }
      }
      for (let uriPath of uriList) {
        let url = this._rootPath + "/" + uriPath;
        let functions = {
          onProgress: (e) => this.onLoadProgress(e),
          onComplete: (e) => this.onComplete(e)
        };
        let tileObject3D;
        if (url.endsWith(".glb")) {
          tileObject3D = await Engine3D.res.loadGltf(url, functions);
          this.applyTransform(tileObject3D.transform, adjustmentTransform);
        } else if (url.endsWith("tileset.json")) {
          let childTilesetUrl = url.replace("/tileset.json", "");
          let tilesRenderer = new TilesRenderer();
          await tilesRenderer.loadTileSet(childTilesetUrl, "tileset.json");
          tileObject3D = tilesRenderer.group;
        } else if (url.endsWith(".i3dm")) {
          tileObject3D = await Engine3D.res.loadI3DM(url, functions, adjustmentTransform);
        } else if (url.endsWith(".b3dm")) {
          tileObject3D = await Engine3D.res.loadB3DM(url, functions, adjustmentTransform);
        }
        if (tileObject3D) {
          this._modelList.push(tileObject3D);
          this.group.addChild(tileObject3D);
        }
      }
    }
  }
  onLoadProgress(e) {
  }
  onComplete(e) {
  }
  applyTransform(transform, matrix) {
    let prs = matrix.decompose(Orientation3D.QUATERNION);
    transform.localRotQuat.copyFrom(prs[1]);
    transform.localRotQuat = transform.localRotQuat;
    transform.localPosition.copyFrom(prs[0]);
    transform.localPosition = transform.localPosition;
    transform.localScale.copyFrom(prs[2]);
    transform.localScale = transform.localScale;
  }
}

class ColorLitMaterial extends Material {
  static count = 0;
  /**
   * @constructor
   */
  constructor() {
    super();
    ShaderLib.register("ColorLitShader", ColorLitShader);
    this.shader = new Shader();
    let renderShader = new RenderShaderPass(`ColorLitShader`, `ColorLitShader`);
    renderShader.passType = PassType.COLOR;
    this.shader.addRenderPass(renderShader);
    renderShader.setDefine("USE_BRDF", true);
    renderShader.setShaderEntry(`VertMain`, `FragMain`);
    renderShader.setUniformColor(`baseColor`, new Color());
    renderShader.setUniformColor(`emissiveColor`, new Color());
    renderShader.setUniformFloat(`envIntensity`, 1);
    renderShader.setUniformFloat(`normalScale`, 1);
    renderShader.setUniformFloat(`roughness`, 0);
    renderShader.setUniformFloat(`metallic`, 0);
    renderShader.setUniformFloat(`ao`, 1);
    renderShader.setUniformFloat(`alphaCutoff`, 0);
    let shaderState = renderShader.shaderState;
    shaderState.acceptShadow = true;
    shaderState.receiveEnv = true;
    shaderState.acceptGI = true;
    shaderState.useLight = true;
    renderShader.setTexture("normalMap", Engine3D.res.normalTexture);
    renderShader.setTexture("emissiveMap", Engine3D.res.blackTexture);
  }
  clone() {
    return null;
  }
  debug() {
  }
}

class GlassMaterial extends Material {
  /**
   * @constructor
   */
  constructor() {
    super();
    ShaderLib.register("GlassShader", GlassShader);
    this.shader = new Shader();
    let colorShader = new RenderShaderPass("GlassShader", "GlassShader");
    colorShader.passType = PassType.COLOR;
    colorShader.setDefine("USE_BRDF", true);
    colorShader.setShaderEntry(`VertMain`, `FragMain`);
    let shaderState = colorShader.shaderState;
    shaderState.acceptShadow = true;
    shaderState.castShadow = true;
    shaderState.receiveEnv = true;
    shaderState.acceptGI = true;
    shaderState.useLight = true;
    this.shader.setTexture("baseMap", Engine3D.res.whiteTexture);
    this.shader.setTexture("normalMap", Engine3D.res.normalTexture);
    this.shader.setTexture("emissiveMap", Engine3D.res.blackTexture);
  }
  // clone(): this {
  //     console.log(`clone material ${this.name}`);
  //     let ret = new GlassMaterial();
  //     ret.baseMap = this.baseMap;
  //     ret.normalMap = this.normalMap;
  //     ret.aoMap = this.aoMap;
  //     if (this.maskMap) ret.maskMap = this.maskMap;
  //     ret.emissiveMap = this.emissiveMap;
  //     this.transformUV1 && (ret.transformUV1 = new Vector4().copyFrom(this.transformUV1));
  //     this.uvTransform_2 && (ret.uvTransform_2 = new Vector4().copyFrom(this.uvTransform_2));
  //     ret.baseColor = this.baseColor.clone();
  //     ret.emissiveColor = this.emissiveColor.clone();
  //     this.materialF0 && (ret.materialF0 = new Vector4().copyFrom(this.materialF0));
  //     ret.envIntensity = this.envIntensity;
  //     ret.normalScale = this.normalScale;
  //     ret.roughness = this.roughness;
  //     ret.metallic = this.metallic;
  //     ret.ao = this.ao;
  //     ret.roughness_min = this.roughness_min;
  //     ret.roughness_max = this.roughness_max;
  //     ret.metallic_min = this.metallic_min;
  //     ret.metallic_max = this.metallic_max;
  //     ret.emissiveIntensity = this.emissiveIntensity;
  //     ret.alphaCutoff = this.alphaCutoff;
  //     ret.ior = this.ior;
  //     ret.clearcoatFactor = this.clearcoatFactor;
  //     ret.clearcoatRoughnessFactor = this.clearcoatRoughnessFactor;
  //     return ret as this;
  // }
}

function registerMaterial(name, cls) {
}

class UnLitMaterial extends Material {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.shader = new UnLitShader();
    this.baseMap = Engine3D.res.whiteTexture;
  }
  set baseMap(texture) {
    this.shader.setTexture(`baseMap`, texture);
  }
  get baseMap() {
    return this.shader.getTexture(`baseMap`);
  }
  /**
   * set base color (tint color)
   */
  set baseColor(color) {
    this.shader.setUniformColor(`baseColor`, color);
  }
  /**
   * get base color (tint color)
   */
  get baseColor() {
    return this.shader.getUniformColor("baseColor");
  }
  /**
   * set environment texture, usually referring to cubemap
   */
  set envMap(texture) {
  }
  /**
   * @internal
   * set shadow map
   */
  set shadowMap(texture) {
  }
}

class UnLitTexArrayMaterial extends Material {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.shader = new UnLitTexArrayShader();
    this.baseMap = Engine3D.res.whiteTexture;
  }
  set baseMap(texture) {
    this.shader.setTexture(`baseMap`, texture);
  }
  get baseMap() {
    return this.shader.getTexture(`baseMap`);
  }
  /**
   * set base color (tint color)
   */
  set baseColor(color) {
    this.shader.setUniformColor(`baseColor`, color);
  }
  /**
   * get base color (tint color)
   */
  get baseColor() {
    return this.shader.getUniformColor("baseColor");
  }
  // /**
  //  * set environment texture, usually referring to cubemap
  //  */
  // public set envMap(texture: Texture) {
  //     //not need env texture
  // }
  /**
   * @internal
   * set shadow map
   */
  set shadowMap(texture) {
  }
}

class Bezier2D {
  _points;
  _cacheValue;
  /**
   * instance bezier class
   */
  constructor(vec2Ds = []) {
    this.points = vec2Ds;
    this._cacheValue = new Vector2();
  }
  /**
   * get all bezier 2d points
   */
  get points() {
    return this._points;
  }
  /**
   * set bezier 2d point[x,y] list must great 4
   */
  set points(value) {
    this._points = value;
  }
  /**
   * get point2d at curve
   * @param v 0.0 ~ 1.0 
   * @returns return point2D at curve 
   */
  getValue(v) {
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    let len = this.points.length - 1;
    let ci = Math.floor(len * v);
    let ni = ci + 1;
    let w = MathUtil.fract((len + 1) * v);
    if (ni >= len) {
      ni = ci;
      w = 0;
    }
    this._cacheValue.x = this.points[ci].x + (this.points[ni].x - this.points[ci].x) * w;
    this._cacheValue.y = this.points[ci].y + (this.points[ni].y - this.points[ci].y) * w;
    return this._cacheValue;
  }
  /**
   * caclute bezier curve points at line [ 0.0 , 1.0 ]
   * @param anchorpoints bezier anchor
   * @param pointsAmount point count 
   * @returns get a bezier curve [Bezier2D]
   */
  static createBezierPoints(anchorpoints, pointsAmount) {
    var bezier2d = new Bezier2D();
    for (var i = 0; i < pointsAmount; i++) {
      var point = Bezier2D.multiPointBezier(anchorpoints, i / pointsAmount);
      bezier2d.points.push(point);
    }
    return bezier2d;
  }
  static multiPointBezier(points, t) {
    var len = points.length;
    var x = 0, y = 0;
    var erxiangshi = function(start, end) {
      var cs = 1, bcs = 1;
      while (end > 0) {
        cs *= start;
        bcs *= end;
        start--;
        end--;
      }
      return cs / bcs;
    };
    for (var i = 0; i < len; i++) {
      var point = points[i];
      x += point.x * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * erxiangshi(len - 1, i);
      y += point.y * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * erxiangshi(len - 1, i);
    }
    return new Vector2(x, y);
  }
}

class Bezier3D {
  static tmp_points = [];
  /**
   * get cubic curve point value from t at bezier data 
   * @param t interval value
   * @param p0 start point
   * @param c1 left control point
   * @param c2 right control point
   * @param p3 end point
   * @returns cubic curve point
   */
  static calculateCubicBezierPoint(t, p0, c1, c2, p3) {
    if (t > 1) t = 1;
    if (t < 0) t = 0;
    let u = 1 - t;
    let uu = u * u;
    let uuu = u * u * u;
    let tt = t * t;
    let ttt = t * t * t;
    let p = p0.mul(uuu);
    let tp1 = c1.mul(3);
    tp1 = tp1.mul(t);
    tp1 = tp1.mul(uu);
    let tp2 = c2.mul(3);
    tp2 = tp2.mul(tt);
    tp2 = tp2.mul(u);
    let tp3 = p3.mul(ttt);
    p = p.add(tp1);
    p = p.add(tp2);
    p = p.add(tp3);
    return p;
  }
  /**
   * get curve point from three point bezier curve 
   * @param t interval value
   * @param p0 start point
   * @param c1 contrl point 
   * @param p1 end point
   * @returns get bezier point at curve 
   */
  static bezierPoint(t, p0, c1, p1) {
    if (t > 1) t = 1;
    if (t < 0) t = 0;
    let u = 1 - t;
    let uu = u * u;
    let tt = t * t;
    let pp0 = p0.mul(uu);
    let cc1 = c1.mul(2);
    cc1.scaleBy(u);
    cc1.scaleBy(t);
    let pp1 = p1.mul(tt);
    pp0 = pp0.add(cc1);
    pp0 = pp0.add(pp1);
    return pp0;
  }
  static calculateCubicBezierPoints(t, ps, skip) {
    if (t > 1) t = 1;
    if (t < 0) t = 0;
    let u = 1 - t;
    let uu = u * u;
    let uuu = u * u * u;
    let tt = t * t;
    let ttt = t * t * t;
    let p = ps[skip].mul(uuu);
    let tp1 = ps[skip + 1].mul(3);
    tp1 = tp1.mul(t);
    tp1 = tp1.mul(uu);
    let tp2 = ps[skip + 2].mul(3);
    tp2 = tp2.mul(tt);
    tp2 = tp2.mul(u);
    let tp3 = ps[skip + 3].mul(ttt);
    p = p.add(tp1);
    p = p.add(tp2);
    p = p.add(tp3);
    return p;
  }
  static bezierPathValue(t, points) {
    if (t > 1) t = 1;
    if (t < 0) t = 0;
    let count = points.length;
    let tmp_points = this.tmp_points;
    tmp_points.length = 0;
    for (let i = 1; i < count; ++i) {
      for (let j = 0; j < count - i; ++j) {
        if (i == 1) {
          let v = new Vector3();
          v.x = points[j].x * (1 - t) + points[j + 1].x * t;
          v.y = points[j].y * (1 - t) + points[j + 1].y * t;
          v.z = points[j].z * (1 - t) + points[j + 1].z * t;
          this.tmp_points.push(v);
          continue;
        }
        let v2 = new Vector3();
        v2.x = tmp_points[j].x * (1 - t) + tmp_points[j + 1].x * t;
        v2.y = tmp_points[j].y * (1 - t) + tmp_points[j + 1].y * t;
        v2.z = tmp_points[j].z * (1 - t) + tmp_points[j + 1].z * t;
        tmp_points.push(v2);
      }
    }
    return tmp_points[0];
  }
}

class BiMap extends Map {
  negtive;
  constructor(iterable) {
    super(iterable);
    this.negtive = /* @__PURE__ */ new Map();
    if (iterable) {
      for (let item of iterable) {
        this.negtive.set(item[1], item[0]);
      }
    }
  }
  delete(key) {
    if (this.has(key)) {
      let value = this.get(key);
      this.negtive.delete(value);
      return super.delete(key);
    }
    return false;
  }
  getKey(value) {
    return this.negtive.get(value);
  }
  deleteValue(value) {
    let k = this.negtive.get(value);
    k && this.delete(k);
    return this.negtive.delete(value);
  }
  set(key, value) {
    super.set(key, value);
    this.negtive.set(value, key);
    return this;
  }
  clear() {
    this.negtive.clear();
    super.clear();
  }
}

class ColorGradient {
  colorArray;
  constructor(array) {
    this.colorArray = array;
  }
  getColor(p) {
    let s = p * this.colorArray.length;
    let i = Math.floor(s);
    let k = Math.min(i + 1, this.colorArray.length - 1);
    let c1 = this.colorArray[i];
    let c2 = this.colorArray[k];
    return Color.lerp(s - i, c1, c2);
  }
}

class CubicBezierCurve {
  controlVertices;
  /**
   * @constructor
   * @param cvs controller points
   */
  constructor(cvs) {
    this.setControlVertices(cvs);
  }
  /**
   * update controller points
   * @param cvs controller points
   */
  setControlVertices(cvs) {
    if (cvs.length == 4) {
      this.controlVertices = cvs.concat();
    }
  }
  /**
   * get position by calc from curve
   * @param t a position in range [0-1]
   * @returns Vector3
   */
  getPoint(t) {
    if (!(t >= 0 && t <= 1)) {
      return Vector3.ZERO;
    }
    let c = 1 - t;
    let bb0 = c * c * c;
    let bb1 = 3 * t * c * c;
    let bb2 = 3 * t * t * c;
    let bb3 = t * t * t;
    let point = this.controlVertices[0].mul(bb0).add(this.controlVertices[1].mul(bb1)).add(this.controlVertices[2].mul(bb2)).add(this.controlVertices[3].mul(bb3));
    return point;
  }
  /**
   * get tagent by calc from curve
   * @param t a position in range [0-1]
   * @returns tagent direction
   * See: http://bimixual.org/AnimationLibrary/beziertangents.html
   */
  getTangent(t) {
    if (!(t >= 0 && t <= 1)) {
      return Vector3.ZERO;
    }
    let controlVerts = this.controlVertices;
    let q0 = controlVerts[0].add(controlVerts[1].add(controlVerts[0]).mul(t));
    let q1 = controlVerts[1].add(controlVerts[2].add(controlVerts[1]).mul(t));
    let q2 = controlVerts[2].add(controlVerts[3].add(controlVerts[2]).mul(t));
    let r0 = q0.add(q1.subtract(q0).mul(t));
    let r1 = q1.add(q2.subtract(q1).mul(t));
    let tangent = r1.subtract(r0);
    return tangent;
  }
  /**
   * get adjacent coordinates
   * @param pos position
   * @param paramThreshold threshold value
   * @returns a position in range [0-1]
   */
  getClosestParam(pos, paramThreshold = 1e-6) {
    return this.getClosestParamRec(pos, 0, 1, paramThreshold);
  }
  /**
   * get adjacent coordinates by given range
   * @param pos position
   * @param beginT range from
   * @param endT range end
   * @param thresholdT threshold value
   * @returns 
   */
  getClosestParamRec(pos, beginT, endT, thresholdT) {
    let mid = (beginT + endT) / 2;
    if (endT - beginT < thresholdT) {
      return mid;
    }
    let paramA = (beginT + mid) / 2;
    let paramB = (mid + endT) / 2;
    let posA = this.getPoint(paramA);
    let posB = this.getPoint(paramB);
    let distASq = posA.subtract(pos).lengthSquared;
    let distBSq = posB.subtract(pos).lengthSquared;
    if (distASq < distBSq) {
      endT = mid;
    } else {
      beginT = mid;
    }
    return this.getClosestParamRec(pos, beginT, endT, thresholdT);
  }
}

var CubicBezierType = /* @__PURE__ */ ((CubicBezierType2) => {
  CubicBezierType2[CubicBezierType2["Open"] = 0] = "Open";
  CubicBezierType2[CubicBezierType2["Closed"] = 1] = "Closed";
  return CubicBezierType2;
})(CubicBezierType || {});
class CubicBezierPath {
  type = 0 /* Open */;
  numCurveSegments = 0;
  numControlVertices = 0;
  controlVertices = [];
  // The term 'knot' is another name for a point right on the path (an interpolated point). With this constructor the
  // knots are supplied and interpolated. knots.length (the number of knots) must be >= 2. Interior Cvs are generated
  // transparently and automatically.
  constructor(controlVertices, t = 0 /* Open */) {
    this.setControlVertices(controlVertices, t);
  }
  getPathType() {
    return this.type;
  }
  isClosed() {
    return this.type == 1 /* Closed */ ? true : false;
  }
  /**
   * @returns 
   */
  isValid() {
    return this.numCurveSegments > 0 ? true : false;
  }
  clear() {
    this.controlVertices.length = 0;
    this.type = 0 /* Open */;
    this.numCurveSegments = 0;
    this.numControlVertices = 0;
  }
  computeApproxLength() {
    if (!this.isValid()) return 0;
    let numInterpolatedPoints = this.numCurveSegments + 1;
    if (numInterpolatedPoints < 2) return 0;
    let totalDist = 0;
    let controlVertices = this.controlVertices;
    for (let n = 1; n < numInterpolatedPoints; n++) {
      let a = controlVertices[(n - 1) * 3];
      let b = controlVertices[n * 3];
      totalDist += a.subtract(b).lengthSquared;
    }
    if (totalDist == 0) return 0;
    return totalDist;
  }
  computeApproxParamPerUnitLength() {
    let length = this.computeApproxLength();
    return this.numCurveSegments / length;
  }
  computeApproxNormParamPerUnitLength() {
    let length = this.computeApproxLength();
    return 1 / length;
  }
  interpolatePoints(knots, t) {
    let numKnots = knots.length;
    if (numKnots < 2) console.error("point count must great 1");
    this.clear();
    this.type = t;
    let controlVertices = this.controlVertices;
    switch (t) {
      case 0 /* Open */: {
        this.numCurveSegments = numKnots - 1;
        this.numControlVertices = 3 * numKnots - 2;
        controlVertices.length = this.numControlVertices;
        for (let n = 0; n < numKnots; n++) controlVertices[n * 3] = knots[n];
        let initialPoint = knots[1].subtract(knots[0]).mul(0.25);
        controlVertices[1] = knots[0].add(initialPoint);
        let finalPoint = knots[numKnots - 2].subtract(knots[numKnots - 1]).mul(0.25);
        controlVertices[this.numControlVertices - 2] = knots[numKnots - 1].add(finalPoint);
        for (let k = 1; k < this.numCurveSegments; k++) {
          let a = knots[k - 1].subtract(knots[k]);
          let b = knots[k + 1].subtract(knots[k]);
          let aLen = a.lengthSquared;
          let bLen = b.lengthSquared;
          if (aLen > 0 && bLen > 0) {
            let abLen = (aLen + bLen) / 8;
            let ab = b.div(bLen).subtract(a.div(aLen));
            ab.normalize();
            ab = ab.mul(abLen);
            controlVertices[k * 3 - 1] = knots[k].subtract(ab);
            controlVertices[k * 3 + 1] = knots[k].add(ab);
          } else {
            controlVertices[k * 3 - 1] = knots[k];
            controlVertices[k * 3 + 1] = knots[k];
          }
        }
        break;
      }
      case 1 /* Closed */: {
        this.numCurveSegments = numKnots;
        this.numControlVertices = 3 * numKnots + 1;
        controlVertices.length = this.numControlVertices;
        for (let n = 0; n < numKnots; n++) controlVertices[n * 3] = knots[n];
        controlVertices[this.numControlVertices - 1] = knots[0];
        for (let k = 1; k <= this.numCurveSegments; k++) {
          let modkm1 = k - 1;
          let modkp1 = (k + 1) % this.numCurveSegments;
          let modk = k % this.numCurveSegments;
          let a = knots[modkm1].subtract(knots[modk]);
          let b = knots[modkp1].subtract(knots[modk]);
          let aLen = a.lengthSquared;
          let bLen = b.lengthSquared;
          let mod3km1 = 3 * k - 1;
          let mod3kp1 = (3 * k + 1) % (this.numControlVertices - 1);
          if (aLen > 0 && bLen > 0) {
            let abLen = (aLen + bLen) / 8;
            let ab = b.div(bLen).subtract(a.div(aLen));
            ab.normalize();
            ab = ab.mul(abLen);
            controlVertices[mod3km1] = knots[modk].subtract(ab);
            controlVertices[mod3kp1] = knots[modk].add(ab);
          } else {
            controlVertices[mod3km1] = knots[modk];
            controlVertices[mod3kp1] = knots[modk];
          }
        }
        break;
      }
    }
  }
  // For a closed path the last CV must match the first.
  setControlVertices(cvs, t) {
    let numCVs = cvs.length;
    if (numCVs <= 0) return;
    if (t == 0 /* Open */ && numCVs < 4) return;
    if (t == 1 /* Closed */ && numCVs < 7) return;
    if (!((numCVs - 1) % 3 == 0)) return;
    this.clear();
    this.type = t;
    this.numControlVertices = numCVs;
    this.numCurveSegments = (numCVs - 1) / 3;
    this.controlVertices = cvs;
  }
  // t E [0, numSegments]. If the type is closed, the number of segments is one more than the equivalent open path.
  getPoint(t) {
    if (this.type == 1 /* Closed */) {
      while (t < 0) t += this.numCurveSegments;
      while (t > this.numCurveSegments) t -= this.numCurveSegments;
    } else {
      t = MathUtil.clampf(t, 0, this.numCurveSegments);
    }
    if (!(t >= 0) && t <= this.numCurveSegments) return;
    let segment = Math.floor(t);
    if (segment >= this.numCurveSegments) segment = this.numCurveSegments - 1;
    let curveCVs = [];
    let controlVerts = this.controlVertices;
    curveCVs[0] = controlVerts[3 * segment + 0];
    curveCVs[1] = controlVerts[3 * segment + 1];
    curveCVs[2] = controlVerts[3 * segment + 2];
    curveCVs[3] = controlVerts[3 * segment + 3];
    let bc = new CubicBezierCurve(curveCVs);
    return bc.getPoint(t - segment);
  }
  // Does the same as GetPoint except that t is normalized to be E [0, 1] over all segments. The beginning of the curve
  // is at t = 0 and the end at t = 1. Closed paths allow a value bigger than 1 in which case they loop.
  getPointNorm(t) {
    return this.getPoint(t * this.numCurveSegments);
  }
  // Similar to GetPoint but returns the tangent at the specified point on the path. The tangent is not normalized.
  // The longer the tangent the 'more influence' it has pulling the path in that direction.
  getTangent(t) {
    if (this.type == 1 /* Closed */) {
      while (t < 0) t += this.numCurveSegments;
      while (t > this.numCurveSegments) t -= this.numCurveSegments;
    } else {
      t = MathUtil.clampf(t, 0, this.numCurveSegments);
    }
    if (!(t >= 0) && t <= this.numCurveSegments) return;
    let segment = Math.floor(t);
    if (segment >= this.numCurveSegments) segment = this.numCurveSegments - 1;
    let controlVerts = this.controlVertices;
    let curveCVs = [];
    curveCVs[0] = controlVerts[3 * segment + 0];
    curveCVs[1] = controlVerts[3 * segment + 1];
    curveCVs[2] = controlVerts[3 * segment + 2];
    curveCVs[3] = controlVerts[3 * segment + 3];
    let bc = new CubicBezierCurve(curveCVs);
    return bc.getTangent(t - segment);
  }
  getTangentNorm(t) {
    return this.getTangent(t * this.numCurveSegments);
  }
  // This function returns a single closest point. There may be more than one point on the path at the same distance.
  // Use ComputeApproxParamPerUnitLength to determine a good paramThreshold. eg. Say you want a 15cm threshold,
  // use: paramThreshold = ComputeApproxParamPerUnitLength() * 0.15f.
  computeClosestParam(pos, paramThreshold) {
    let minDistSq = Number.MAX_SAFE_INTEGER;
    let closestParam = 0;
    let curveCVs = [];
    let curve = new CubicBezierCurve(curveCVs);
    for (let startIndex = 0; startIndex < this.controlVertices.length - 1; startIndex += 3) {
      for (let i = 0; i < 4; i++) curveCVs[i] = this.controlVertices[startIndex + i];
      curve.setControlVertices(curveCVs);
      let curveClosestParam = curve.getClosestParam(pos, paramThreshold);
      let curvePos = curve.getPoint(curveClosestParam);
      let distSq = curvePos.subtract(pos).lengthSquared;
      if (distSq < minDistSq) {
        minDistSq = distSq;
        let startParam = startIndex / 3;
        closestParam = startParam + curveClosestParam;
      }
    }
    return closestParam;
  }
  // Same as above but returns a t value E [0, 1]. You'll need to use a paramThreshold like
  // ComputeApproxParamPerUnitLength() * 0.15f if you want a 15cm tolerance.
  computeClosestNormParam(pos, paramThreshold) {
    return this.computeClosestParam(pos, paramThreshold * this.numCurveSegments);
  }
}

class OrderMap extends Map {
  valueList;
  keyList;
  isChange = true;
  constructor(iterable, recordKey, recordValue) {
    super(iterable);
    if (recordKey) this.keyList = [];
    if (recordValue) this.valueList = [];
    if (iterable) {
      for (let item of iterable) {
        this.valueList?.push(item[1]);
        this.keyList?.push(item[0]);
      }
    }
  }
  delete(key) {
    if (this.has(key)) {
      let value = this.get(key);
      this.valueList && this.deleteValue(value);
      this.keyList && this.deleteKey(key);
      this.isChange = true;
      return super.delete(key);
    }
    return false;
  }
  deleteValue(value) {
    let index = this.valueList.indexOf(value);
    if (index >= 0) {
      this.valueList.splice(index, 1);
    }
    return this;
  }
  deleteKey(key) {
    let index = this.keyList.indexOf(key);
    if (index >= 0) {
      this.keyList.splice(index, 1);
    }
    return this;
  }
  set(key, value) {
    this.delete(key);
    this.keyList?.push(key);
    this.valueList?.push(value);
    super.set(key, value);
    this.isChange = true;
    return this;
  }
  clear() {
    if (this.valueList) this.valueList.length = 0;
    if (this.keyList) this.keyList.length = 0;
    this.isChange = true;
    super.clear();
  }
}

var ParticleSystemRandomnessIds = /* @__PURE__ */ ((ParticleSystemRandomnessIds2) => {
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemClampVelocityCurveId"] = 322376503] = "kParticleSystemClampVelocityCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemForceCurveId"] = 306581307] = "kParticleSystemForceCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemRotationCurveId"] = 1793934638] = "kParticleSystemRotationCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemRotationBySpeedCurveId"] = 3737431713] = "kParticleSystemRotationBySpeedCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemStartSpeedCurveId"] = 2527743459] = "kParticleSystemStartSpeedCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemSizeCurveId"] = 2368504881] = "kParticleSystemSizeCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemSizeBySpeedCurveId"] = 4085612399] = "kParticleSystemSizeBySpeedCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemVelocityCurveId"] = 3774601268] = "kParticleSystemVelocityCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemUVCurveId"] = 326370691] = "kParticleSystemUVCurveId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemColorGradientId"] = 1494990940] = "kParticleSystemColorGradientId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemColorByVelocityGradientId"] = 1089181156] = "kParticleSystemColorByVelocityGradientId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemMeshSelectionId"] = 3159510623] = "kParticleSystemMeshSelectionId";
  ParticleSystemRandomnessIds2[ParticleSystemRandomnessIds2["kParticleSystemUVRowSelectionId"] = 2941263940] = "kParticleSystemUVRowSelectionId";
  return ParticleSystemRandomnessIds2;
})(ParticleSystemRandomnessIds || {});
const kPI = 3.141592653589793;

class Polynomials {
}
function cubicPolynomialRoot(p, q, r) {
  let rcp3 = 1 / 3;
  let half = 0.5;
  let po3 = p * rcp3;
  let po3_2 = po3 * po3;
  let po3_3 = po3_2 * po3;
  let b = po3_3 - po3 * q * half + r * half;
  let a = -po3_2 + q * rcp3;
  let a3 = a * a * a;
  let det = a3 + b * b;
  if (det >= 0) {
    let r0 = Math.sqrt(det) - b;
    r0 = r0 > 0 ? Math.pow(r0, rcp3) : -Math.pow(-r0, rcp3);
    return -po3 - a / r0 + r0;
  }
  let abs = Math.sqrt(-a3);
  let arg = Math.acos(-b / abs);
  abs = Math.pow(abs, rcp3);
  abs = abs - a / abs;
  arg = -po3 + abs * Math.cos(arg * rcp3);
  return arg;
}
function quadraticPolynomialRootsGeneric(a, b, c, out) {
  let eps = 1e-5;
  if (Math.abs(a) < eps) {
    if (Math.abs(b) > eps) {
      out.r0 = -c / b;
      return 1;
    } else {
      return 0;
    }
  }
  let disc = b * b - 4 * a * c;
  if (disc < 0) {
    return 0;
  }
  let halfRcpA = 0.5 / a;
  let sqrtDisc = Math.sqrt(disc);
  out.r0 = (sqrtDisc - b) * halfRcpA;
  out.r1 = (-sqrtDisc - b) * halfRcpA;
  return 2;
}
function cubicPolynomialRootsGeneric(roots, a, b, c, d) {
  let numRoots = 0;
  if (Math.abs(a) >= 1e-4) {
    let p = b / a;
    let q = c / a;
    let r = d / a;
    roots[0] = cubicPolynomialRoot(p, q, r);
    numRoots++;
    let la = a;
    let lb = b + a * roots[0];
    let lc = c + b * roots[0] + a * roots[0] * roots[0];
    numRoots += quadraticPolynomialRootsGeneric(la, lb, lc, { r0: roots[1], r1: roots[2] });
  } else {
    numRoots += quadraticPolynomialRootsGeneric(b, c, d, { r0: roots[1], r1: roots[2] });
  }
  return numRoots;
}

class Polynomial {
  coeff = [];
  static EvalSegment(t, coeff) {
    return t * (t * (t * coeff[0] + coeff[1]) + coeff[2]) + coeff[3];
  }
}
class PolynomialCurve {
  static kMaxNumSegments = 8;
  segments = [];
  integrationCache = [];
  doubleIntegrationCache = [];
  times = [];
  segmentCount;
  constructor() {
    this.segments[PolynomialCurve.kMaxNumSegments] = new Polynomial();
    this.integrationCache[PolynomialCurve.kMaxNumSegments] = 0;
    this.doubleIntegrationCache[PolynomialCurve.kMaxNumSegments] = 0;
    this.times[PolynomialCurve.kMaxNumSegments] = 0;
  }
  calculateMinMax(minmax, value) {
    minmax.x = Math.min(minmax.x, value);
    minmax.y = Math.max(minmax.y, value);
  }
  findMinMaxDoubleIntegrated() {
    let result = Vector2.ZERO.clone();
    let numSteps = 20;
    let delta = 1 / numSteps;
    let acc = delta;
    for (let i = 0; i < numSteps; i++) {
      this.calculateMinMax(result, this.evaluateDoubleIntegrated(acc));
      acc += delta;
    }
    return result;
  }
  // Find the maximum of the integrated curve (x: min, y: max)
  findMinMaxIntegrated() {
    let result = Vector2.ZERO.clone();
    let start = [];
    let end = [];
    for (let i = 0; i < this.segmentCount; i++) {
      let a = 4 * this.segments[i].coeff[0];
      let b = 3 * this.segments[i].coeff[1];
      let c = 2 * this.segments[i].coeff[2];
      let d = 1 * this.segments[i].coeff[3];
      let roots = [];
      let numRoots = cubicPolynomialRootsGeneric(roots, a, b, c, d);
      for (let r = 0; r < numRoots; r++) {
        let root = roots[r] + start[i];
        if (root >= start[i] && root < end[i]) {
          this.calculateMinMax(result, this.evaluateIntegrated(root));
        }
      }
      this.calculateMinMax(result, this.evaluateIntegrated(end[i]));
      this.times[i];
    }
    return result;
  }
  generateIntegrationCache(curve) {
    curve.integrationCache[0] = 0;
    let prevTimeValue0 = curve.times[0];
    let prevTimeValue1 = 0;
    for (let i = 1; i < curve.segmentCount; i++) {
      let coeff = curve.segments[i - 1].coeff;
      integrateSegment(coeff);
      let time = prevTimeValue0 - prevTimeValue1;
      curve.integrationCache[i] = curve.integrationCache[i - 1] + Polynomial.EvalSegment(time, coeff) * time;
      prevTimeValue1 = prevTimeValue0;
      prevTimeValue0 = curve.times[i];
    }
  }
  generateDoubleIntegrationCache(curve) {
    let sum = 0;
    let prevTimeValue = 0;
    for (let i = 0; i < curve.segmentCount; i++) {
      curve.doubleIntegrationCache[i] = sum;
      let time = curve.times[i] - prevTimeValue;
      time = Math.max(time, 0);
      sum += Polynomial.EvalSegment(time, curve.segments[i].coeff) * time * time + curve.integrationCache[i] * time;
      prevTimeValue = curve.times[i];
    }
  }
  // Integrates a velocity curve to be a position curve.
  // You have to call EvaluateIntegrated to evaluate the curve
  integrate() {
    this.generateIntegrationCache(this);
    for (let i = 0; i < this.segmentCount; i++) {
      integrateSegment(this.segments[i].coeff);
    }
  }
  // Integrates a velocity curve to be a position curve.
  // You have to call EvaluateDoubleIntegrated to evaluate the curve
  doubleIntegrate() {
    this.generateIntegrationCache(this);
    for (let i = 0; i < this.segmentCount; i++) {
      doubleIntegrateSegment(this.segments[i].coeff);
    }
    this.generateDoubleIntegrationCache(this);
  }
  // Evaluates if it is possible to represent animation curve as PolynomialCurve
  static isValidCurve(editorCurve) {
    let keyCount = editorCurve.getKeyCount();
    let segmentCount = keyCount - 1;
    if (editorCurve.getKey(0).time != 0) {
      segmentCount++;
    }
    if (editorCurve.getKey(keyCount - 1).time != 1) {
      segmentCount++;
    }
    return segmentCount <= PolynomialCurve.kMaxNumSegments;
  }
  evaluateDoubleIntegrated(t) {
    let prevTimeValue = 0;
    for (let i = 0; i < this.segmentCount; i++) {
      if (t <= this.times[i]) {
        let time = t - prevTimeValue;
        return this.doubleIntegrationCache[i] + this.integrationCache[i] * time + Polynomial.EvalSegment(time, this.segments[i].coeff) * time * time;
      }
      prevTimeValue = this.times[i];
    }
    return 1;
  }
  // Evaluate integrated Polynomial curve.
  // Example: position = EvaluateIntegrated (normalizedTime) * startEnergy
  // Use Integrate function to for example turn a velocity curve into a position curve.
  // Expects that t is in the 0...1 range.
  evaluateIntegrated(t) {
    let prevTimeValue = 0;
    for (let i = 0; i < this.segmentCount; i++) {
      if (t <= this.times[i]) {
        let time = t - prevTimeValue;
        return this.integrationCache[i] + Polynomial.EvalSegment(time, this.segments[i].coeff) * time;
      }
      prevTimeValue = this.times[i];
    }
    return 1;
  }
  // Evaluate the curve
  // extects that t is in the 0...1 range
  evaluate(t) {
    let prevTimeValue = 0;
    for (let i = 0; i < this.segmentCount; i++) {
      if (t <= this.times[i]) {
        return Polynomial.EvalSegment(t - prevTimeValue, this.segments[i].coeff);
      }
      prevTimeValue = this.times[i];
    }
    return 1;
  }
  buildCurve(editorCurve, scale) {
    let keyCount = editorCurve.getKeyCount();
    this.segmentCount = 1;
    let kMaxTime = 1.01;
    this.segments.length = 0;
    this.integrationCache.length = 0;
    this.doubleIntegrationCache.length = 0;
    this.times.length = 0;
    this.times[0] = kMaxTime;
    if (keyCount == 0) ; else if (keyCount == 1) {
      this.segments[0] = new Polynomial();
      this.segments[0].coeff[3] = editorCurve.getKey(0).value * scale;
    } else {
      this.segmentCount = keyCount - 1;
      let segmentOffset = 0;
      if (editorCurve.getKey(0).time != 0) {
        this.segments[0].coeff[3] = editorCurve.getKey(0).value;
        this.times[0] = editorCurve.getKey(0).time;
        segmentOffset = 1;
      }
      for (let i = 0; i < this.segmentCount; i++) {
        let cache;
        editorCurve.calculateCacheData(cache, i, i + 1, 0);
        this.segments[i + segmentOffset].coeff = cache.coeff.concat();
        this.times[i + segmentOffset] = editorCurve.getKey(i + 1).time;
      }
      this.segmentCount += segmentOffset;
      if (editorCurve.getKey(keyCount - 1).time != 1) {
        this.segments[this.segmentCount].coeff[3] = editorCurve.getKey(keyCount - 1).value;
        this.segmentCount++;
      }
      this.times[this.segmentCount - 1] = kMaxTime;
      for (let i = 0; i < this.segmentCount; i++) {
        this.segments[i].coeff[0] *= scale;
        this.segments[i].coeff[1] *= scale;
        this.segments[i].coeff[2] *= scale;
        this.segments[i].coeff[3] *= scale;
      }
    }
    return true;
  }
}
function doubleIntegrateSegment(coeff) {
  coeff[0] /= 20;
  coeff[1] /= 12;
  coeff[2] /= 6;
  coeff[3] /= 2;
}
function integrateSegment(coeff) {
  coeff[0] /= 4;
  coeff[1] /= 3;
  coeff[2] /= 2;
  coeff[3] /= 1;
}

var ParticleSystemCurveEvalMode = /* @__PURE__ */ ((ParticleSystemCurveEvalMode2) => {
  ParticleSystemCurveEvalMode2[ParticleSystemCurveEvalMode2["kEMScalar"] = 0] = "kEMScalar";
  ParticleSystemCurveEvalMode2[ParticleSystemCurveEvalMode2["kEMOptimized"] = 1] = "kEMOptimized";
  ParticleSystemCurveEvalMode2[ParticleSystemCurveEvalMode2["kEMOptimizedMinMax"] = 2] = "kEMOptimizedMinMax";
  ParticleSystemCurveEvalMode2[ParticleSystemCurveEvalMode2["kEMSlow"] = 3] = "kEMSlow";
  return ParticleSystemCurveEvalMode2;
})(ParticleSystemCurveEvalMode || {});
var MinMaxCurveState = /* @__PURE__ */ ((MinMaxCurveState2) => {
  MinMaxCurveState2[MinMaxCurveState2["kMMCScalar"] = 0] = "kMMCScalar";
  MinMaxCurveState2[MinMaxCurveState2["kMMCCurve"] = 1] = "kMMCCurve";
  MinMaxCurveState2[MinMaxCurveState2["kMMCTwoCurves"] = 2] = "kMMCTwoCurves";
  MinMaxCurveState2[MinMaxCurveState2["kMMCTwoConstants"] = 3] = "kMMCTwoConstants";
  return MinMaxCurveState2;
})(MinMaxCurveState || {});
class MinMaxAnimationCurves {
  // public SupportsProcedural ();
  max;
  min;
}
class MinMaxPolyCurves {
  max;
  min;
  integrate() {
    this.max.integrate();
    this.min.integrate();
  }
  doubleIntegrate() {
    this.max.doubleIntegrate();
    this.min.doubleIntegrate();
  }
  findMinMaxIntegrated() {
    return null;
  }
  findMinMaxDoubleIntegrated() {
    return null;
  }
}
class MinMaxCurve {
  minMaxState;
  // see enum MinMaxCurveState
  minCurve;
  maxCurve;
  _scalar = 1;
  // Since scalar is baked into the optimized curve we use the setter function to modify it.
  _minScalar;
  constructor(scalarValue = 1) {
    this._scalar = scalarValue;
    this.minMaxState = 0 /* kMMCScalar */;
    this.minCurve = new AnimationCurve();
    this.maxCurve = new AnimationCurve();
  }
  setScalar(value) {
    this._scalar = value;
  }
  getScalar() {
    return this._scalar;
  }
  static evaluateSlow(curve, t, factor) {
    let v = curve.maxCurve.getValue(t) * curve.getScalar();
    if (curve.minMaxState == 2 /* kMMCTwoCurves */) {
      return lerp(curve.minCurve.getValue(t) * curve.getScalar(), v, factor);
    } else return v;
  }
  static evaluate(curve, t, randomValue = 1) {
    if (curve.minMaxState == 0 /* kMMCScalar */) {
      return curve.getScalar();
    }
    let v = curve.maxCurve.getValue(t) * curve.getScalar();
    if (curve.minMaxState == 1 /* kMMCCurve */) {
      return lerp(curve.minCurve.getValue(t) * curve.getScalar(), v, randomValue);
    }
    if (curve.minMaxState == 3 /* kMMCTwoConstants */) {
      return lerp(curve._minScalar, curve._scalar, randomValue);
    }
    if (curve.minMaxState == 2 /* kMMCTwoCurves */) {
      return lerp(curve.minCurve.getValue(t) * curve.getScalar(), v, 1 * Math.random());
    }
    return this.evaluateSlow(curve, t, 1);
  }
  unSerialized(data) {
    this.minMaxState = data["minMaxState"];
    this._scalar = data["scalar"];
    this._minScalar = data["minScalar"];
    this.maxCurve.unSerialized(data["maxCurve"]);
    this.minCurve.unSerialized(data["minCurve"]);
  }
}
class ValueSpread {
  value = 0;
  mode = 0;
  spread = 0;
  speed = new MinMaxCurve();
  unSerialized(data) {
    this.value = data["value"];
    this.mode = data["mode"];
    this.spread = data["spread"];
    this.speed.unSerialized(data["speed"]);
  }
}
function curvesSupportProcedural(editorCurves, minMaxState) {
  let isValid = PolynomialCurve.isValidCurve(editorCurves.max);
  if (minMaxState != 2 /* kMMCTwoCurves */ && minMaxState != 3 /* kMMCTwoConstants */) {
    return isValid;
  } else {
    return isValid && PolynomialCurve.isValidCurve(editorCurves.min);
  }
}
function buildCurves(polyCurves, editorCurves, scalar, minMaxState) {
  polyCurves.max.buildCurve(editorCurves.max, scalar);
  if (minMaxState != 2 /* kMMCTwoCurves */ && minMaxState != 3 /* kMMCTwoConstants */) {
    polyCurves.min.buildCurve(editorCurves.max, scalar);
  } else {
    polyCurves.min.buildCurve(editorCurves.min, scalar);
  }
}
function calculateCurveRangesValue(minMaxValue, curve) {
  let keyCount = curve.getKeyCount();
  if (keyCount == 0) {
    return;
  }
  if (keyCount == 1) {
    calculateMinMax(minMaxValue, curve.getKey(0).value);
  } else {
    let segmentCount = keyCount - 1;
    calculateMinMax(minMaxValue, curve.getKey(0).value);
    for (let i = 0; i < segmentCount; i++) {
      let cache = new FrameCache();
      curve.calculateCacheData(cache, i, i + 1, 0);
      let a = 3 * cache.coeff[0];
      let b = 2 * cache.coeff[1];
      let c = 1 * cache.coeff[2];
      let start = curve.getKey(i).time;
      let end = curve.getKey(i + 1).time;
      let roots = [];
      let numRoots = quadraticPolynomialRootsGeneric(a, b, c, { r0: roots[0], r1: roots[1] });
      for (let r = 0; r < numRoots; r++) {
        if (roots[r] >= 0 && roots[r] + start < end) {
          calculateMinMax(minMaxValue, Polynomial.EvalSegment(roots[r], cache.coeff));
        }
      }
      calculateMinMax(minMaxValue, Polynomial.EvalSegment(end - start, cache.coeff));
    }
  }
}
function calculateMinMax(minmax, value) {
  minmax.x = Math.min(minmax.x, value);
  minmax.y = Math.max(minmax.y, value);
}

class Plane {
  /**
   * Center position of plane
   */
  point = new Vector3();
  /**
   * Plane normal vector
   */
  normal = Vector3.UP;
  /**
   * @internal
   */
  _tmpVecA = new Vector3();
  /**
   * Constructs a new plane object
   * @param pos Plane position
   * @param normal Plane normal quantity
   */
  constructor(pos, normal) {
    this.point = pos;
    this.normal = normal;
  }
  /**
   * Clones the current plane object
   * @returns New plane object
   */
  clone() {
    let plane = new Plane(this.point.clone(), this.normal.clone());
    return plane;
  }
  /**
   * Determine whether the plane intersects a line segment and calculate the intersection point
   * @param start Starting point of line segment
   * @param end End point of line segment
   * @param point Point of output intersection
   * @returns Returns whether it intersects
   */
  intersectsLine(start, end, point) {
    var d = -this.normal.dotProduct(this.point);
    var d0 = this.normal.dotProduct(start) + d;
    var d1 = this.normal.dotProduct(end) + d;
    var t = d0 / (d0 - d1);
    var intersects = t >= 0 && t <= 1;
    if (intersects && point) {
      point.lerp(start, end, t);
    }
    return intersects;
  }
  /**
   * Determine whether the plane intersects a ray and calculate the intersection point
   * @param ray Ray of input
   * @param outPoint Point of output intersection
   * @returns Returns whether it intersects
   */
  intersectsRay(ray, targetPoint) {
    targetPoint ||= this._tmpVecA;
    targetPoint.copy(this.point).subtract(ray.origin, targetPoint);
    var t = this.normal.dotProduct(targetPoint) / this.normal.dotProduct(ray.direction);
    var intersects = t >= 0;
    if (intersects) {
      targetPoint.copyFrom(ray.direction).multiplyScalar(t).add(ray.origin, targetPoint);
    }
    return intersects;
  }
}

class Plane3D {
  /**
   * @language en_US
   * The A coefficient of this plane. (Also the x dimension of the plane normal)
   */
  /**
  * @language zh_CN
  * 平面中的a分量
  * @platform Web,Native
  */
  a;
  /**
   * @language en_US
   * The B coefficient of this plane. (Also the y dimension of the plane normal)
   */
  /**
  * @language zh_CN
  * 平面中的b分量
  * @platform Web,Native
  */
  b;
  /**
   * @language en_US
   * The C coefficient of this plane. (Also the z dimension of the plane normal)
   */
  /**
  * @language zh_CN
  * 平面中的c分量
  * @platform Web,Native
  */
  c;
  /**
   * @language en_US
   * The D coefficient of this plane. (Also the inverse dot product between normal and point)
   */
  /**
  * @language zh_CN
  * 平面中的d分量
  * @platform Web,Native
  */
  d;
  // indicates the alignment of the plane
  /**
   * @private
   */
  static ALIGN_ANY = 0;
  /**
   * @private
   */
  static ALIGN_XY_AXIS = 1;
  /**
   * @private
   */
  static ALIGN_YZ_AXIS = 2;
  /**
   * @private
   */
  static ALIGN_XZ_AXIS = 3;
  /**
   * @language en_US
   * Create a Plane3D with ABCD coefficients
   */
  /**
  * @language zh_CN
  * 创建一个平面实例
  * @param a
  * @param b
  * @param c
  * @param d
  * @platform Web,Native
  */
  constructor(a = 0, b = 0, c = 0, d = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  /**
  * @language zh_CN
  * 填充平面的各分量的值
  * @param a
  * @param b
  * @param c
  * @param d
  * @platform Web,Native
  */
  setTo(a = 0, b = 0, c = 0, d = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
  /**
   * @language en_US
   * Fills this Plane3D with the coefficients from 3 points in 3d space.
   * @param p0 Vector3
   * @param p1 Vector3
   * @param p2 Vector3
   */
  /**
  * @language zh_CN
  * 由3个坐标来创建一个3d平面
  * @param p0 Vector3
  * @param p1 Vector3
  * @param p2 Vector3
  * @platform Web,Native
  */
  fromPoints(p0, p1, p2) {
    var d1x = p1.x - p0.x;
    var d1y = p1.y - p0.y;
    var d1z = p1.z - p0.z;
    var d2x = p2.x - p0.x;
    var d2y = p2.y - p0.y;
    var d2z = p2.z - p0.z;
    this.a = d1y * d2z - d1z * d2y;
    this.b = d1z * d2x - d1x * d2z;
    this.c = d1x * d2y - d1y * d2x;
    this.d = -(this.a * p0.x + this.b * p0.y + this.c * p0.z);
  }
  /**
   * @language en_US
   * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
   * @param normal Vector3
   * @param point  Vector3
   */
  /**
  * @language zh_CN
  * 由一条normal向量和一个坐标创建一个3d平面
  * @param normal Vector3
  * @param point  Vector3
  * @platform Web,Native
  */
  fromNormalAndPoint(normal, point) {
    this.a = normal.x;
    this.b = normal.y;
    this.c = normal.z;
    this.d = -(this.a * point.x + this.b * point.y + this.c * point.z);
  }
  /**
   * @language en_US
   * Normalize this Plane3D
   * @returns Plane3D This Plane3D.
   */
  /**
  * @language zh_CN
  * 单位化3d平面
  * @returns number 返回平面长度
  * @platform Web,Native
  */
  normalize() {
    var len = Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
    if (len > 0) {
      var invLength = 1 / len;
      this.a *= invLength;
      this.b *= invLength;
      this.c *= invLength;
      this.d *= invLength;
    }
    return len;
  }
  /**
   * @language en_US
   * Returns the signed distance between this Plane3D and the point p.
   * @param p Vector3
   * @returns Number
   */
  /**
  * @language zh_CN
  * 计算3d平面到点p的距离
  * @param p Vector3
  * @returns number 返回计算后的距离
  * @platform Web,Native
  */
  distance(p) {
    return this.a * p.x + this.b * p.y + this.c * p.z + this.d;
  }
  /**
   * @language en_US
   * Classify a point against this Plane3D. (in front, back or intersecting)
   * @param p Vector3
   * @param epsilon
   * @returns PlaneClassification.FRONT在平面正面 
   * PlaneClassification.BACK在平面背面面 
   * PlaneClassification.INTERSECT在平面上
   */
  /**
  * @language zh_CN
  * 计算3d平面和点p的空间关系
  * @param p Vector3
  * @param epsilon 相对偏移值
  * @returns number int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
  * @platform Web,Native
  */
  classifyPoint(p, epsilon = 0.01) {
    var dis = this.distance(p);
    if (dis < -epsilon) {
      return PlaneClassification.BACK;
    } else if (dis > epsilon) {
      return PlaneClassification.FRONT;
    }
    return PlaneClassification.INTERSECT;
  }
  /**
  * @language zh_CN
  * 当前Plane3D以字符串形式返回
  * @returns string
  * @platform Web,Native
  */
  toString() {
    return "Plane3D [a:" + this.a + ", b:" + this.b + ", c:" + this.c + ", d:" + this.d + "]";
  }
}

function uniform_real_distribution(min, max) {
  return Math.random() * max + Math.random() * min + (max - min) * Math.random();
}
function uniform_real_distribution2(min, max, rng) {
  let rd = rng * Math.random();
  return Math.random() * max * rd + Math.random() * min * rd + (max - min) * Math.random() * rd;
}
function normal_distribution(min, max, skew) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  num = num / 10 + 0.5;
  if (num > 1 || num < 0) num = normal_distribution(min, max, skew);
  num = Math.pow(num, skew);
  num *= max - min;
  num += min;
  return num;
}
function FASTFLOOR(x) {
  return x > 0 ? Math.floor(x) : Math.floor(x) - 1;
}
let perm = [
  151,
  160,
  137,
  91,
  90,
  15,
  131,
  13,
  201,
  95,
  96,
  53,
  194,
  233,
  7,
  225,
  140,
  36,
  103,
  30,
  69,
  142,
  8,
  99,
  37,
  240,
  21,
  10,
  23,
  190,
  6,
  148,
  247,
  120,
  234,
  75,
  0,
  26,
  197,
  62,
  94,
  252,
  219,
  203,
  117,
  35,
  11,
  32,
  57,
  177,
  33,
  88,
  237,
  149,
  56,
  87,
  174,
  20,
  125,
  136,
  171,
  168,
  68,
  175,
  74,
  165,
  71,
  134,
  139,
  48,
  27,
  166,
  77,
  146,
  158,
  231,
  83,
  111,
  229,
  122,
  60,
  211,
  133,
  230,
  220,
  105,
  92,
  41,
  55,
  46,
  245,
  40,
  244,
  102,
  143,
  54,
  65,
  25,
  63,
  161,
  1,
  216,
  80,
  73,
  209,
  76,
  132,
  187,
  208,
  89,
  18,
  169,
  200,
  196,
  135,
  130,
  116,
  188,
  159,
  86,
  164,
  100,
  109,
  198,
  173,
  186,
  3,
  64,
  52,
  217,
  226,
  250,
  124,
  123,
  5,
  202,
  38,
  147,
  118,
  126,
  255,
  82,
  85,
  212,
  207,
  206,
  59,
  227,
  47,
  16,
  58,
  17,
  182,
  189,
  28,
  42,
  223,
  183,
  170,
  213,
  119,
  248,
  152,
  2,
  44,
  154,
  163,
  70,
  221,
  153,
  101,
  155,
  167,
  43,
  172,
  9,
  129,
  22,
  39,
  253,
  19,
  98,
  108,
  110,
  79,
  113,
  224,
  232,
  178,
  185,
  112,
  104,
  218,
  246,
  97,
  228,
  251,
  34,
  242,
  193,
  238,
  210,
  144,
  12,
  191,
  179,
  162,
  241,
  81,
  51,
  145,
  235,
  249,
  14,
  239,
  107,
  49,
  192,
  214,
  31,
  181,
  199,
  106,
  157,
  184,
  84,
  204,
  176,
  115,
  121,
  50,
  45,
  127,
  4,
  150,
  254,
  138,
  236,
  205,
  93,
  222,
  114,
  67,
  29,
  24,
  72,
  243,
  141,
  128,
  195,
  78,
  66,
  215,
  61,
  156,
  180,
  151,
  160,
  137,
  91,
  90,
  15,
  131,
  13,
  201,
  95,
  96,
  53,
  194,
  233,
  7,
  225,
  140,
  36,
  103,
  30,
  69,
  142,
  8,
  99,
  37,
  240,
  21,
  10,
  23,
  190,
  6,
  148,
  247,
  120,
  234,
  75,
  0,
  26,
  197,
  62,
  94,
  252,
  219,
  203,
  117,
  35,
  11,
  32,
  57,
  177,
  33,
  88,
  237,
  149,
  56,
  87,
  174,
  20,
  125,
  136,
  171,
  168,
  68,
  175,
  74,
  165,
  71,
  134,
  139,
  48,
  27,
  166,
  77,
  146,
  158,
  231,
  83,
  111,
  229,
  122,
  60,
  211,
  133,
  230,
  220,
  105,
  92,
  41,
  55,
  46,
  245,
  40,
  244,
  102,
  143,
  54,
  65,
  25,
  63,
  161,
  1,
  216,
  80,
  73,
  209,
  76,
  132,
  187,
  208,
  89,
  18,
  169,
  200,
  196,
  135,
  130,
  116,
  188,
  159,
  86,
  164,
  100,
  109,
  198,
  173,
  186,
  3,
  64,
  52,
  217,
  226,
  250,
  124,
  123,
  5,
  202,
  38,
  147,
  118,
  126,
  255,
  82,
  85,
  212,
  207,
  206,
  59,
  227,
  47,
  16,
  58,
  17,
  182,
  189,
  28,
  42,
  223,
  183,
  170,
  213,
  119,
  248,
  152,
  2,
  44,
  154,
  163,
  70,
  221,
  153,
  101,
  155,
  167,
  43,
  172,
  9,
  129,
  22,
  39,
  253,
  19,
  98,
  108,
  110,
  79,
  113,
  224,
  232,
  178,
  185,
  112,
  104,
  218,
  246,
  97,
  228,
  251,
  34,
  242,
  193,
  238,
  210,
  144,
  12,
  191,
  179,
  162,
  241,
  81,
  51,
  145,
  235,
  249,
  14,
  239,
  107,
  49,
  192,
  214,
  31,
  181,
  199,
  106,
  157,
  184,
  84,
  204,
  176,
  115,
  121,
  50,
  45,
  127,
  4,
  150,
  254,
  138,
  236,
  205,
  93,
  222,
  114,
  67,
  29,
  24,
  72,
  243,
  141,
  128,
  195,
  78,
  66,
  215,
  61,
  156,
  180
];
function grad1(hash, x) {
  let h = hash & 15;
  let grad = 1 + (h & 7);
  if (h & 8) grad = -grad;
  return grad * x;
}
function grad2(hash, x, y) {
  let h = hash & 7;
  let u = h < 4 ? x : y;
  let v = h < 4 ? y : x;
  return (h & 1 ? -u : u) + (h & 2 ? -2 * v : 2 * v);
}
function grad3(hash, x, y, z) {
  let h = hash & 15;
  let u = h < 8 ? x : y;
  let v = h < 4 ? y : h == 12 || h == 14 ? x : z;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}
function grad4(hash, x, y, z, t) {
  let h = hash & 31;
  let u = h < 24 ? x : y;
  let v = h < 16 ? y : z;
  let w = h < 8 ? z : t;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v) + (h & 4 ? -w : w);
}
let simplex = [
  [0, 1, 2, 3],
  [0, 1, 3, 2],
  [0, 0, 0, 0],
  [0, 2, 3, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 3, 0],
  [0, 2, 1, 3],
  [0, 0, 0, 0],
  [0, 3, 1, 2],
  [0, 3, 2, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 3, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 2, 0, 3],
  [0, 0, 0, 0],
  [1, 3, 0, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 3, 0, 1],
  [2, 3, 1, 0],
  [1, 0, 2, 3],
  [1, 0, 3, 2],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 3, 1],
  [0, 0, 0, 0],
  [2, 1, 3, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [2, 0, 1, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 0, 1, 2],
  [3, 0, 2, 1],
  [0, 0, 0, 0],
  [3, 1, 2, 0],
  [2, 1, 0, 3],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [3, 1, 0, 2],
  [0, 0, 0, 0],
  [3, 2, 0, 1],
  [3, 2, 1, 0]
];
function snoise1(x) {
  let i0 = FASTFLOOR(x);
  let i1 = i0 + 1;
  let x0 = x - i0;
  let x1 = x0 - 1;
  let n0, n1;
  let t0 = 1 - x0 * x0;
  t0 *= t0;
  n0 = t0 * t0 * grad1(perm[i0 & 255], x0);
  let t1 = 1 - x1 * x1;
  t1 *= t1;
  n1 = t1 * t1 * grad1(perm[i1 & 255], x1);
  return 0.25 * (n0 + n1);
}
function snoise2(x, y) {
  const F2 = 0.366025403;
  const G2 = 0.211324865;
  let n0, n1, n2;
  let s = (x + y) * F2;
  let xs = x + s;
  let ys = y + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);
  let t = (i + j) * G2;
  let X0 = i - t;
  let Y0 = j - t;
  let x0 = x - X0;
  let y0 = y - Y0;
  let i1, j1;
  if (x0 > y0) {
    i1 = 1;
    j1 = 0;
  } else {
    i1 = 0;
    j1 = 1;
  }
  let x1 = x0 - i1 + G2;
  let y1 = y0 - j1 + G2;
  let x2 = x0 - 1 + 2 * G2;
  let y2 = y0 - 1 + 2 * G2;
  let ii = i & 255;
  let jj = j & 255;
  let t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0) n0 = 0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * grad2(perm[ii + perm[jj]], x0, y0);
  }
  let t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0) n1 = 0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * grad2(perm[ii + i1 + perm[jj + j1]], x1, y1);
  }
  let t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0) n2 = 0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * grad2(perm[ii + 1 + perm[jj + 1]], x2, y2);
  }
  return 40 * (n0 + n1 + n2);
}
function snoise3(x, y, z) {
  const F3 = 0.333333333;
  const G3 = 0.166666667;
  let n0, n1, n2, n3;
  let s = (x + y + z) * F3;
  let xs = x + s;
  let ys = y + s;
  let zs = z + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);
  let k = FASTFLOOR(zs);
  let t = (i + j + k) * G3;
  let X0 = i - t;
  let Y0 = j - t;
  let Z0 = k - t;
  let x0 = x - X0;
  let y0 = y - Y0;
  let z0 = z - Z0;
  let i1, j1, k1;
  let i2, j2, k2;
  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    }
  }
  let x1 = x0 - i1 + G3;
  let y1 = y0 - j1 + G3;
  let z1 = z0 - k1 + G3;
  let x2 = x0 - i2 + 2 * G3;
  let y2 = y0 - j2 + 2 * G3;
  let z2 = z0 - k2 + 2 * G3;
  let x3 = x0 - 1 + 3 * G3;
  let y3 = y0 - 1 + 3 * G3;
  let z3 = z0 - 1 + 3 * G3;
  let ii = i & 255;
  let jj = j & 255;
  let kk = k & 255;
  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 < 0) n0 = 0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * grad3(perm[ii + perm[jj + perm[kk]]], x0, y0, z0);
  }
  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t1 < 0) n1 = 0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * grad3(perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]], x1, y1, z1);
  }
  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t2 < 0) n2 = 0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * grad3(perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]], x2, y2, z2);
  }
  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t3 < 0) n3 = 0;
  else {
    t3 *= t3;
    n3 = t3 * t3 * grad3(perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]], x3, y3, z3);
  }
  return 32 * (n0 + n1 + n2 + n3);
}
function snoise4(x, y, z, w) {
  const F4 = 0.309016994;
  const G4 = 0.138196601;
  let n0, n1, n2, n3, n4;
  let s = (x + y + z + w) * F4;
  let xs = x + s;
  let ys = y + s;
  let zs = z + s;
  let ws = w + s;
  let i = FASTFLOOR(xs);
  let j = FASTFLOOR(ys);
  let k = FASTFLOOR(zs);
  let l = FASTFLOOR(ws);
  let t = (i + j + k + l) * G4;
  let X0 = i - t;
  let Y0 = j - t;
  let Z0 = k - t;
  let W0 = l - t;
  let x0 = x - X0;
  let y0 = y - Y0;
  let z0 = z - Z0;
  let w0 = w - W0;
  let c1 = x0 > y0 ? 32 : 0;
  let c2 = x0 > z0 ? 16 : 0;
  let c3 = y0 > z0 ? 8 : 0;
  let c4 = x0 > w0 ? 4 : 0;
  let c5 = y0 > w0 ? 2 : 0;
  let c6 = z0 > w0 ? 1 : 0;
  let c = c1 + c2 + c3 + c4 + c5 + c6;
  let i1, j1, k1, l1;
  let i2, j2, k2, l2;
  let i3, j3, k3, l3;
  i1 = simplex[c][0] >= 3 ? 1 : 0;
  j1 = simplex[c][1] >= 3 ? 1 : 0;
  k1 = simplex[c][2] >= 3 ? 1 : 0;
  l1 = simplex[c][3] >= 3 ? 1 : 0;
  i2 = simplex[c][0] >= 2 ? 1 : 0;
  j2 = simplex[c][1] >= 2 ? 1 : 0;
  k2 = simplex[c][2] >= 2 ? 1 : 0;
  l2 = simplex[c][3] >= 2 ? 1 : 0;
  i3 = simplex[c][0] >= 1 ? 1 : 0;
  j3 = simplex[c][1] >= 1 ? 1 : 0;
  k3 = simplex[c][2] >= 1 ? 1 : 0;
  l3 = simplex[c][3] >= 1 ? 1 : 0;
  let x1 = x0 - i1 + G4;
  let y1 = y0 - j1 + G4;
  let z1 = z0 - k1 + G4;
  let w1 = w0 - l1 + G4;
  let x2 = x0 - i2 + 2 * G4;
  let y2 = y0 - j2 + 2 * G4;
  let z2 = z0 - k2 + 2 * G4;
  let w2 = w0 - l2 + 2 * G4;
  let x3 = x0 - i3 + 3 * G4;
  let y3 = y0 - j3 + 3 * G4;
  let z3 = z0 - k3 + 3 * G4;
  let w3 = w0 - l3 + 3 * G4;
  let x4 = x0 - 1 + 4 * G4;
  let y4 = y0 - 1 + 4 * G4;
  let z4 = z0 - 1 + 4 * G4;
  let w4 = w0 - 1 + 4 * G4;
  let ii = i & 255;
  let jj = j & 255;
  let kk = k & 255;
  let ll = l & 255;
  let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
  if (t0 < 0) n0 = 0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * grad4(perm[ii + perm[jj + perm[kk + perm[ll]]]], x0, y0, z0, w0);
  }
  let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
  if (t1 < 0) n1 = 0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * grad4(perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]], x1, y1, z1, w1);
  }
  let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
  if (t2 < 0) n2 = 0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * grad4(perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]], x2, y2, z2, w2);
  }
  let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
  if (t3 < 0) n3 = 0;
  else {
    t3 *= t3;
    n3 = t3 * t3 * grad4(perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]], x3, y3, z3, w3);
  }
  let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
  if (t4 < 0) n4 = 0;
  else {
    t4 *= t4;
    n4 = t4 * t4 * grad4(perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]], x4, y4, z4, w4);
  }
  return 27 * (n0 + n1 + n2 + n3 + n4);
}

class ValueOp {
  static sub(v1, v2) {
    let t = v1.constructor.name;
    switch (t) {
      case `number`:
        return v1 - v2;
      case "Vector2": {
        let vv1 = v1;
        let vv2 = v2;
        return new Vector2(vv1.x - vv2.x, vv1.y - vv2.y);
      }
      case "Vector3": {
        let vv1 = v1;
        let vv2 = v2;
        return new Vector3(vv1.x - vv2.x, vv1.y - vv2.y, vv1.z - vv2.z);
      }
      case "Vector4": {
        let vv1 = v1;
        let vv2 = v2;
        return new Vector4(vv1.x - vv2.x, vv1.y - vv2.y, vv1.z - vv2.z, vv1.w - vv2.w);
      }
      case "Quaternion": {
        let vv1 = v1;
        let vv2 = v2;
        return new Quaternion(vv1.x - vv2.x, vv1.y - vv2.y, vv1.z - vv2.z, vv1.w - vv2.w);
      }
    }
  }
}

class DoubleArray {
  _keys = new Array();
  _values = new Array();
  getIndexByKey(key) {
    return this._keys.indexOf(key);
  }
  getValueByKey(key) {
    var index = this.getIndexByKey(key);
    if (index > -1) {
      return this._values[index];
    }
    return null;
  }
  put(key, value) {
    if (key == null)
      return null;
    var old = this.remove(key);
    this._keys.push(key);
    this._values.push(value);
    return old;
  }
  remove(key) {
    var index = this._keys.indexOf(key);
    var item;
    if (index > -1) {
      item = this._values[index];
      this._keys.splice(index, 1);
      this._values.splice(index, 1);
    }
    return item;
  }
  getValues() {
    return this._values;
  }
  getKeys() {
    return this._keys;
  }
  clear() {
    this._values.length = 0;
    this._keys.length = 0;
  }
}

class Navi3DAstar {
  _openedList;
  _closedList;
  _endNode;
  _startNode;
  _triangleChannel;
  _navMesh;
  _findIndex = 0;
  constructor() {
    this._openedList = new Array();
    this._closedList = new Array();
  }
  findPath(navMesh, startTriangle, endTriangle) {
    this._findIndex++;
    this._navMesh = navMesh;
    this._startNode = startTriangle;
    this._endNode = endTriangle;
    this._openedList.length = 0;
    this._closedList.length = 0;
    if (this._startNode && this._endNode) {
      this._startNode.gg = 0;
      this._startNode.h = 0;
      this._startNode.f = 0;
      this._startNode.parent = null;
      return this.search();
    }
    return false;
  }
  search() {
    var node = this._startNode;
    var neibours = [];
    var test;
    while (node != this._endNode) {
      neibours = node.getNeibourTriangles(neibours, Navi3DMaskType.WalkAble, Navi3DMaskType.WalkAble);
      for (test of neibours) {
        if (test.closeId == this._findIndex)
          continue;
        if (test == node || !test.walkAble) {
          continue;
        }
        var g = node.gg + Navi3DPoint.calcDistance(test, node) * test.costMultiplier;
        var h = Navi3DPoint.calcDistance(test, this._endNode);
        var f = g + h;
        if (test.openId == this._findIndex) {
          if (test.f > f) {
            test.f = f;
            test.gg = g;
            test.h = h;
            test.parent = node;
          }
        } else {
          test.f = f;
          test.gg = g;
          test.h = h;
          test.parent = node;
          test.openId = this._findIndex;
          this._openedList.push(test);
        }
      }
      node.closeId = this._findIndex;
      this._closedList.push(node);
      if (this._openedList.length == 0) {
        return false;
      }
      this._openedList.sort(function(a, b) {
        return a.f - b.f;
      });
      node = this._openedList.shift();
    }
    this.buildPath();
    return true;
  }
  buildPath() {
    this._triangleChannel = [];
    var node = this._endNode;
    this._triangleChannel.push(node);
    while (node != this._startNode) {
      node = node.parent;
      this._triangleChannel.unshift(node);
    }
  }
  get channel() {
    return this._triangleChannel;
  }
}

class Navi3DMergeVertex {
  vertex;
  indices;
  merge(geometry, threshould = 0.1) {
    let vertex = geometry.getAttribute(VertexAttributeName.position).data;
    this.makeOriginVertex(vertex);
    let sameVertexIndex = /* @__PURE__ */ new Map();
    let redirectionIndex = [];
    let mergePointCount = 0;
    for (let i = 0, c = this.vertex.length; i < c; i++) {
      let item = this.vertex[i];
      let samePointIndex = -1;
      sameVertexIndex.forEach((v, i2) => {
        let distance = Vector3.distance(v, item);
        if (distance < threshould) {
          samePointIndex = i2;
        }
      });
      if (samePointIndex > -1) {
        redirectionIndex[i] = samePointIndex;
        mergePointCount++;
      } else {
        sameVertexIndex.set(i, item);
        redirectionIndex[i] = i;
      }
    }
    console.log("mergePointCount：", mergePointCount);
    this.indices = [];
    let indices = geometry.getAttribute(VertexAttributeName.indices).data;
    for (const i of indices) {
      this.indices.push(redirectionIndex[i]);
    }
    return this;
  }
  parse(geometry) {
    let vertex = geometry.getAttribute(VertexAttributeName.position).data;
    this.makeOriginVertex(vertex);
    this.indices = [];
    let indices = geometry.getAttribute(VertexAttributeName.indices).data;
    for (const i of indices) {
      this.indices.push(i);
    }
    return this;
  }
  makeOriginVertex(source) {
    this.vertex = [];
    for (let i = 0, c = source.length / 3; i < c; i++) {
      let v = new Vector3(source[i * 3], source[i * 3 + 1], source[i * 3 + 2]);
      this.vertex.push(v);
    }
  }
}

class Navi3DTriangle extends Vector3 {
  _id = 0;
  _plane;
  _points = new Array();
  _edges = new Array();
  _neibourTriangles = new DoubleArray();
  _pointAgainstEdge = new DoubleArray();
  _edgeAgainstPoint = new DoubleArray();
  _mask = 0;
  _aabbBox;
  f = 0;
  gg = 0;
  h = 0;
  parent;
  costMultiplier = 1;
  openId = 0;
  closeId = 0;
  get aabb() {
    return this._aabbBox;
  }
  initAABB() {
    this._aabbBox = new QuadAABB();
    this._aabbBox.addPoint(this._points[0]);
    this._aabbBox.addPoint(this._points[1]);
    this._aabbBox.addPoint(this._points[2]);
  }
  calcGlobalQuadAABB() {
  }
  get isTriangle() {
    return true;
  }
  constructor(Id, edgeA, edgeB, edgeC) {
    super(0, 0, 0, 0);
    this._id = Id;
    this._mask = Navi3DMaskType.WalkAble;
    this._edges.push(edgeA, edgeB, edgeC);
    var edge;
    for (edge of this._edges) {
      if (this._points.indexOf(edge.pointA) == -1) {
        this._points.push(edge.pointA);
      }
      if (this._points.indexOf(edge.pointB) == -1) {
        this._points.push(edge.pointB);
      }
    }
    this.x = (this._points[0].x + this._points[1].x + this._points[2].x) / 3;
    this.y = (this._points[0].y + this._points[1].y + this._points[2].y) / 3;
    this.z = (this._points[0].z + this._points[1].z + this._points[2].z) / 3;
    this._plane = new Plane3D();
    this._plane.fromPoints(this._points[0], this._points[1], this._points[2]);
    this._plane.normalize();
    this.genarateAgainstData();
    this.initAABB();
  }
  genarateAgainstData() {
    var edge;
    var point;
    for (edge of this._edges) {
      for (point of this._points) {
        if (edge.pointA != point && edge.pointB != point) {
          this._edgeAgainstPoint.put(edge, point);
          this._pointAgainstEdge.put(point, edge);
        }
      }
    }
  }
  get id() {
    return this._id;
  }
  get plane() {
    return this._plane;
  }
  get points() {
    return this._points;
  }
  addNeibour(edge, triangle) {
    if (this._edges.indexOf(edge) >= 0) {
      this._neibourTriangles.put(edge, triangle);
    } else {
      throw new Error("the edge is not in triangle!!!");
    }
  }
  getNeibourTriangles(list = null, edgeMask = 1, triangleMask = 1) {
    list = list || new Array();
    list.length = 0;
    var neibour;
    var edge;
    var keys = this._neibourTriangles.getKeys();
    for (edge of keys) {
      if (edge.testMask(edgeMask)) {
        neibour = this._neibourTriangles.getValueByKey(edge);
        if (neibour.testMask(triangleMask)) {
          list.push(neibour);
        }
      }
    }
    return list;
  }
  getEdges(list = null, edgeMask = 1) {
    list = list || new Array();
    list.length = 0;
    var edge;
    for (edge of this._edges) {
      if (edge.testMask(edgeMask)) {
        list.push(edge);
      }
    }
    return list;
  }
  get walkAble() {
    return this.testMask(Navi3DMaskType.WalkAble);
  }
  get edges() {
    return this._edges;
  }
  testMask(value) {
    return (this._mask & value) == value;
  }
  getEdgeAgainstPoint(edge) {
    return this._edgeAgainstPoint.getValueByKey(edge);
  }
  getPointAgainstEdge(point) {
    return this._pointAgainstEdge.getValueByKey(point);
  }
  getPublicEdge(triangle) {
    if (triangle && triangle != this) {
      var keys = this._neibourTriangles.getKeys();
      for (var edge of keys) {
        if (this._neibourTriangles.getValueByKey(edge) == triangle)
          return edge;
      }
    }
    return null;
  }
  loopPublicEdge(triangle) {
    var edgeA;
    var edgeB;
    if (triangle && triangle != this) {
      for (edgeA of this._edges) {
        for (edgeB of triangle._edges) {
          if (edgeA == edgeB)
            return edgeA;
        }
      }
    }
    return null;
  }
  randomPoint() {
    var pt0 = this._points[2].subtract(this._points[0]);
    {
      pt0.scaleBy(Math.random());
    }
    pt0.incrementBy(this._points[0]);
    var pt1 = this._points[1].subtract(pt0);
    {
      pt1.scaleBy(Math.random());
    }
    pt1.incrementBy(pt0);
    return pt1;
  }
}

class Navi3DMesh {
  _nav3dPoints;
  _nav3dEdges;
  _nav3dTriangles;
  _path;
  _edgesDict;
  _nav3dAstar;
  _nav3dFunnel;
  _terrainQuad;
  _triangleList;
  get edges() {
    return this._nav3dEdges;
  }
  get points() {
    return this._nav3dPoints;
  }
  get path() {
    return this._path;
  }
  get triangles() {
    return this._nav3dTriangles;
  }
  constructor(pointList, triangleIndexList) {
    this._nav3dPoints = new Array();
    this._nav3dEdges = new Array();
    this._nav3dTriangles = new Array();
    this._edgesDict = new DoubleArray();
    this.initPoints(pointList);
    this.initEdgesAndTriangles(triangleIndexList);
    this.createConnections();
    this._nav3dAstar = new Navi3DAstar();
    this._nav3dFunnel = new Navi3DFunnel();
    this._terrainQuad = new QuadRoot(8, 128);
    this._terrainQuad.createQuadTree(this._nav3dTriangles);
  }
  getTriangleAtPoint(point, threshold = 5) {
    return this._terrainQuad.getTriangleAtPoint(point, threshold);
  }
  findPath(startPt, endPt, aiRadius = 5) {
    this._path = null;
    this._triangleList = null;
    var startNode = this.getTriangleAtPoint(startPt, 10);
    var endNode = this.getTriangleAtPoint(endPt, 10);
    var success = this._nav3dAstar.findPath(this, startNode, endNode);
    if (success) {
      this._triangleList = this._nav3dAstar.channel;
      success = this._nav3dFunnel.searchPath(startPt, endPt, this._triangleList, aiRadius);
      this._path = this._nav3dFunnel.path;
      return success;
    }
    return false;
  }
  initPoints(pointList) {
    var point;
    var nevPoint;
    var count = pointList.length;
    for (var i = 0; i < count; i++) {
      point = pointList[i];
      nevPoint = new Navi3DPoint(i, point.x, point.y, point.z);
      this._nav3dPoints.push(nevPoint);
    }
  }
  initEdgesAndTriangles(triangleIndexList) {
    var indexOrderList;
    var edge0;
    var edge1;
    var edge2;
    var triangle;
    var count = triangleIndexList.length;
    for (var i = 0; i < count; i++) {
      indexOrderList = triangleIndexList[i];
      edge0 = this.tryCreateEdge(indexOrderList[0], indexOrderList[1]);
      edge1 = this.tryCreateEdge(indexOrderList[1], indexOrderList[2]);
      edge2 = this.tryCreateEdge(indexOrderList[2], indexOrderList[0]);
      if (edge0 == null || edge1 == null || edge2 == null)
        continue;
      triangle = new Navi3DTriangle(i, edge0, edge1, edge2);
      this._nav3dTriangles.push(triangle);
    }
  }
  tryCreateEdge(pointAId, pointBId) {
    if (pointAId == pointBId) {
      throw new Error("edge point index error!!!");
    }
    if (pointAId > pointBId) {
      var tempId = pointAId;
      pointAId = pointBId;
      pointBId = tempId;
    }
    var edge = this._edgesDict.getValueByKey(pointAId + "_" + pointBId);
    if (edge == null) {
      edge = new Navi3DEdge(this._nav3dPoints[pointAId], this._nav3dPoints[pointBId]);
      this._nav3dEdges.push(edge);
      this._edgesDict.put(pointAId + "_" + pointBId, edge);
    }
    return edge;
  }
  createConnections() {
    var triangleACount = this._nav3dTriangles.length;
    var triangleBCount = this._nav3dTriangles.length;
    var triangleA;
    var triangleB;
    var edge;
    var publicEdge;
    for (var i = 0; i < triangleACount; i++) {
      triangleA = this._nav3dTriangles[i];
      for (edge of triangleA.edges) {
        edge.addTriangleOwners(triangleA);
      }
      for (var j = 0; j < triangleBCount; j++) {
        triangleB = this._nav3dTriangles[j];
        if (triangleA == triangleB)
          continue;
        publicEdge = triangleA.loopPublicEdge(triangleB);
        if (publicEdge) {
          triangleA.addNeibour(publicEdge, triangleB);
          triangleB.addNeibour(publicEdge, triangleA);
        }
      }
    }
  }
}

class Navi3DPoint2D {
  x;
  y;
  setTo(X, Y) {
    this.x = X;
    this.y = Y;
  }
  equals(X, Y) {
    return X == this.x && Y == this.y;
  }
  equalPoint(pt) {
    return this.equals(pt.x, pt.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  clone() {
    var point = new Navi3DPoint2D();
    point.setTo(this.x, this.y);
    return point;
  }
  normalize() {
    var size = length;
    if (size == 0)
      return;
    this.setTo(this.x / size, this.y / size);
  }
}

class BoxGeometry extends GeometryBase {
  /**
   * box width
   */
  width;
  /**
   * box height
   */
  height;
  /**
   * box depth
   */
  depth;
  /**
   *
   * @constructor
   * @param width {number} box width, default value is 1
   * @param height {number} box height, default value is 1
   * @param depth {number} box depth, default value is 1
   */
  constructor(width = 1, height = 1, depth = 1) {
    super();
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.initVertex();
  }
  initVertex() {
    let halfW = this.width / 2;
    let halfH = this.height / 2;
    let halfD = this.depth / 2;
    this.bounds = new BoundingBox(Vector3.ZERO.clone(), new Vector3(this.width, this.height, this.depth));
    let position_arr = new Float32Array([
      //up
      -halfW,
      halfH,
      halfD,
      halfW,
      halfH,
      halfD,
      halfW,
      halfH,
      -halfD,
      -halfW,
      halfH,
      -halfD,
      -halfW,
      halfH,
      halfD,
      halfW,
      halfH,
      -halfD,
      //buttom
      halfW,
      -halfH,
      halfD,
      -halfW,
      -halfH,
      halfD,
      -halfW,
      -halfH,
      -halfD,
      halfW,
      -halfH,
      -halfD,
      halfW,
      -halfH,
      halfD,
      -halfW,
      -halfH,
      -halfD,
      //left
      -halfW,
      -halfH,
      halfD,
      -halfW,
      halfH,
      halfD,
      -halfW,
      halfH,
      -halfD,
      -halfW,
      -halfH,
      -halfD,
      -halfW,
      -halfH,
      halfD,
      -halfW,
      halfH,
      -halfD,
      //right
      halfW,
      halfH,
      halfD,
      halfW,
      -halfH,
      halfD,
      halfW,
      -halfH,
      -halfD,
      halfW,
      halfH,
      -halfD,
      halfW,
      halfH,
      halfD,
      halfW,
      -halfH,
      -halfD,
      //front
      halfW,
      halfH,
      halfD,
      -halfW,
      halfH,
      halfD,
      -halfW,
      -halfH,
      halfD,
      -halfW,
      -halfH,
      halfD,
      halfW,
      -halfH,
      halfD,
      halfW,
      halfH,
      halfD,
      //back
      halfW,
      -halfH,
      -halfD,
      -halfW,
      -halfH,
      -halfD,
      -halfW,
      halfH,
      -halfD,
      halfW,
      halfH,
      -halfD,
      halfW,
      -halfH,
      -halfD,
      -halfW,
      halfH,
      -halfD
    ]);
    let normal_arr = new Float32Array([
      //up
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      //buttom
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      //left
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      //right
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      //front
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      //back
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1,
      0,
      0,
      -1
    ]);
    let uv_arr = new Float32Array([1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0]);
    let indices_arr = [0, 2, 1, 3, 5, 4, 6, 8, 7, 9, 11, 10, 12, 14, 13, 15, 17, 16, 18, 20, 19, 21, 23, 22, 24, 26, 25, 27, 29, 28, 30, 32, 31, 33, 35, 34];
    let indicesData = new Uint16Array(indices_arr.reverse());
    this.setIndices(indicesData);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
  }
}

class CylinderGeometry extends GeometryBase {
  /**
   * The radius of the top of the cylinder
   */
  radiusTop;
  /**
   * The radius of the bottom of the cylinder
   */
  radiusBottom;
  /**
   * The height of the cylinder
   */
  height;
  /**
   * Number of segments around the side of the cylinder
   */
  radialSegments;
  /**
   * The number of segments along the height of the cylindrical side
   */
  heightSegments;
  /**
   * Indicate whether the bottom surface of the cone is open or capped. The default value is false, which means that the bottom surface is capped by default.
   */
  openEnded;
  /**
   * Starting angle of the first segment
   */
  thetaStart;
  /**
   * The center angle of the circular sector on the bottom of the cylinder, with a default value of 2 * PI, makes it a complete cylinder.
   */
  thetaLength;
  /**
   *
   * @constructor
   * @param radiusTop 
   * @param radiusBottom 
   * @param height 
   * @param radialSegments 
   * @param heightSegments 
   * @param openEnded 
   * @param thetaStart 
   * @param thetaLength
   */
  constructor(radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 8, heightSegments = 8, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2) {
    super();
    this.radiusTop = radiusTop;
    this.radiusBottom = radiusBottom;
    this.height = height;
    this.radialSegments = radialSegments;
    this.heightSegments = heightSegments;
    this.openEnded = openEnded;
    this.thetaStart = thetaStart;
    this.thetaLength = thetaLength;
    this.instanceID = UUID();
    this.buildGeometry();
  }
  /**
   * @internal
   * @param start 
   * @param count 
   * @param index 
   */
  addGroup(start, count, index) {
    this.addSubGeometry({
      indexStart: start,
      indexCount: count,
      vertexStart: start,
      vertexCount: 0,
      firstStart: 0,
      index,
      topology: 0
    });
  }
  buildGeometry() {
    const that = this;
    this.radialSegments = Math.floor(this.radialSegments);
    this.heightSegments = Math.floor(this.heightSegments);
    const vertices = [];
    const normals = [];
    const uvs = [];
    const indices = [];
    let index = 0;
    const indexArray = [];
    const halfHeight = this.height / 2;
    let groupStart = 0;
    generateTorso();
    if (this.openEnded === false) {
      if (this.radiusTop > 0) generateCap(true);
      if (this.radiusBottom > 0) generateCap(false);
    }
    let position_arr = new Float32Array(vertices);
    let normal_arr = new Float32Array(normals);
    let uv_arr = new Float32Array(uvs);
    let indices_arr = new Uint16Array(indices);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.setIndices(indices_arr);
    function generateTorso() {
      const normal = new Vector3();
      const vertex = new Vector3();
      let groupCount = 0;
      const slope = (that.radiusBottom - that.radiusTop) / that.height;
      for (let y = 0; y <= that.heightSegments; y++) {
        const indexRow = [];
        const v = y / that.heightSegments;
        const radius = v * (that.radiusBottom - that.radiusTop) + that.radiusTop;
        for (let x = 0; x <= that.radialSegments; x++) {
          const u = x / that.radialSegments;
          let theta = u * that.thetaLength + that.thetaStart;
          if (x == that.radialSegments && Math.abs(that.thetaLength - that.thetaStart) == Math.PI * 2) {
            theta = 0;
          }
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          vertex.x = radius * sinTheta;
          vertex.y = -v * that.height + halfHeight;
          vertex.z = radius * cosTheta;
          vertices.push(vertex.x, vertex.y, vertex.z);
          normal.set(sinTheta, slope, cosTheta).normalize();
          normals.push(normal.x, normal.y, normal.z);
          uvs.push(u, 1 - v);
          indexRow.push(index++);
        }
        indexArray.push(indexRow);
      }
      for (let x = 0; x < that.radialSegments; x++) {
        for (let y = 0; y < that.heightSegments; y++) {
          const a = indexArray[y][x];
          const b = indexArray[y + 1][x];
          const c = indexArray[y + 1][x + 1];
          const d = indexArray[y][x + 1];
          indices.push(a, b, d);
          indices.push(b, c, d);
          groupCount += 6;
        }
      }
      that.addGroup(groupStart, groupCount, 0);
      groupStart += groupCount;
    }
    function generateCap(top) {
      const centerIndexStart = index;
      const uv = new Vector2();
      const vertex = new Vector3();
      let groupCount = 0;
      const radius = top === true ? that.radiusTop : that.radiusBottom;
      const sign = top === true ? 1 : -1;
      for (let x = 1; x <= that.radialSegments; x++) {
        vertices.push(0, halfHeight * sign, 0);
        normals.push(0, sign, 0);
        uvs.push(0.5, 0.5);
        index++;
      }
      const centerIndexEnd = index;
      for (let x = 0; x <= that.radialSegments; x++) {
        const u = x / that.radialSegments;
        const theta = u * that.thetaLength + that.thetaStart;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        vertex.x = radius * sinTheta;
        vertex.y = halfHeight * sign;
        vertex.z = radius * cosTheta;
        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(0, sign, 0);
        uv.x = cosTheta * 0.5 + 0.5;
        uv.y = sinTheta * 0.5 * sign + 0.5;
        uvs.push(uv.x, uv.y);
        index++;
      }
      for (let x = 0; x < that.radialSegments; x++) {
        const c = centerIndexStart + x;
        const i = centerIndexEnd + x;
        if (top === true) {
          indices.push(i, i + 1, c);
        } else {
          indices.push(i + 1, i, c);
        }
        groupCount += 3;
      }
      that.addGroup(groupStart, groupCount, top === true ? 1 : 2);
      groupStart += groupCount;
    }
  }
}

class StripeGeometry extends GeometryBase {
  segments;
  /**
   *
   * @constructor
   * @param width Width of the plane
   * @param height Height of the plane
   * @param segmentW Number of width segments of a plane
   * @param segmentH Number of height segments of a plane
   * @param up Define the normal vector of a plane
   */
  constructor(segments) {
    super();
    this.segments = segments;
    this.buildGeometry();
  }
  buildGeometry() {
    this.bounds = new BoundingBox();
    let numIndices = (this.segments.length - 1) * 2 * 3;
    let vertexCount = this.segments.length * 2;
    let position_arr = new Float32Array(vertexCount * 3);
    let normal_arr = new Float32Array(vertexCount * 3);
    let uv_arr = new Float32Array(vertexCount * 2);
    let indices_arr = new Uint16Array(numIndices);
    let index = 0;
    for (let item of this.segments) {
      position_arr[index++] = item[0].x;
      position_arr[index++] = item[0].y;
      position_arr[index++] = item[0].z;
      position_arr[index++] = item[1].x;
      position_arr[index++] = item[1].y;
      position_arr[index++] = item[1].z;
    }
    index = 0;
    let offset = 0;
    while (index < numIndices) {
      indices_arr[index++] = 2 + offset;
      indices_arr[index++] = 1 + offset;
      indices_arr[index++] = 0 + offset;
      indices_arr[index++] = 1 + offset;
      indices_arr[index++] = 2 + offset;
      indices_arr[index++] = 3 + offset;
      offset += 2;
    }
    this.setIndices(indices_arr);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
    this.computeNormals();
  }
}

class TrailGeometry extends GeometryBase {
  /**
   * Number of trail segments of a plane
   */
  segment;
  row = 0;
  /**
   *
   * @constructor
   */
  constructor(segment) {
    super();
    this.segment = segment;
    this.buildGeometry();
  }
  buildGeometry() {
    this.row = this.segment + 1;
    let indices_arr = new Uint32Array(this.segment * 6);
    let position_arr = new Float32Array(this.row * 3 * 2);
    let normal_arr = new Float32Array(this.row * 3 * 2);
    let uv_arr = new Float32Array(this.row * 2 * 2);
    for (let i = 0; i < this.row; i++) {
      position_arr[i * 3 * 2 + 0] = 0;
      position_arr[i * 3 * 2 + 1] = 0;
      position_arr[i * 3 * 2 + 2] = 0;
      position_arr[i * 3 * 2 + 3] = 0;
      position_arr[i * 3 * 2 + 4] = 0;
      position_arr[i * 3 * 2 + 5] = 0;
      normal_arr[i * 3 * 2 + 0] = 0;
      normal_arr[i * 3 * 2 + 1] = 0;
      normal_arr[i * 3 * 2 + 2] = 1;
      normal_arr[i * 3 * 2 + 3] = 0;
      normal_arr[i * 3 * 2 + 4] = 0;
      normal_arr[i * 3 * 2 + 5] = 1;
      uv_arr[i * 2 * 2 + 0] = 0;
      uv_arr[i * 2 * 2 + 1] = i / this.segment;
      uv_arr[i * 2 * 2 + 2] = 1;
      uv_arr[i * 2 * 2 + 3] = i / this.segment;
      let c = i * 2;
      let f0 = c;
      let f1 = c + 1;
      let f2 = c + 2;
      let f3 = c + 3;
      indices_arr[i * 6 + 0] = f0;
      indices_arr[i * 6 + 1] = f1;
      indices_arr[i * 6 + 2] = f2;
      indices_arr[i * 6 + 3] = f1;
      indices_arr[i * 6 + 4] = f3;
      indices_arr[i * 6 + 5] = f2;
    }
    this.setIndices(indices_arr);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
  }
}

class TriGeometry extends GeometryBase {
  faceCount = 0;
  /**
   *
   * @constructor
   */
  constructor(count) {
    super();
    this.faceCount = count;
    this.buildGeometry();
  }
  buildGeometry() {
    let indices_arr = new Uint32Array(this.faceCount * 3);
    let position_arr = new Float32Array(this.faceCount * 3 * 3);
    let normal_arr = new Float32Array(this.faceCount * 3 * 3);
    let uv_arr = new Float32Array(this.faceCount * 3 * 2);
    let meshIndexList = new Float32Array(this.faceCount * 3 * 1);
    for (let index = 0; index < this.faceCount; index++) {
      let i1 = index * 3 + 0;
      let i2 = index * 3 + 1;
      let i3 = index * 3 + 2;
      indices_arr[i1] = i1;
      indices_arr[i2] = i2;
      indices_arr[i3] = i3;
    }
    this.setIndices(indices_arr);
    this.setAttribute(VertexAttributeName.position, position_arr);
    this.setAttribute(VertexAttributeName.normal, normal_arr);
    this.setAttribute(VertexAttributeName.uv, uv_arr);
    this.setAttribute(VertexAttributeName.TEXCOORD_1, uv_arr);
    this.setAttribute(VertexAttributeName.vIndex, meshIndexList);
    this.addSubGeometry({
      indexStart: 0,
      indexCount: indices_arr.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
  }
}

class DepthCubeTexture extends Texture {
  /**
   * texture width, default value is 4
   */
  width = 4;
  /**
   * texture height, default value is 4
   */
  height = 4;
  /**
   * depth or array layers, default value is 6
   */
  depthOrArrayLayers = 6;
  /**
   * GPUShaderStage
   */
  visibility = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE;
  /**
   * @constructor
   */
  constructor(width, height) {
    super(width, height, 6);
    this.format = GPUTextureFormat.depth24plus;
    this.mipmapCount = 1;
    this.init();
  }
  internalCreateBindingLayoutDesc() {
    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `unfilterable-float`;
    this.textureBindingLayout.viewDimension = "cube";
  }
  internalCreateTexture() {
    this.textureDescriptor = {
      format: `depth24plus`,
      size: { width: this.width, height: this.height, depthOrArrayLayers: 6 },
      dimension: "2d",
      usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING
    };
    this.gpuTexture = this.getGPUTexture();
  }
  internalCreateView() {
    this.viewDescriptor = {
      dimension: `cube`
    };
    this.view = this.getGPUView();
  }
  internalCreateSampler() {
    this.gpuSampler = webGPUContext.device.createSampler({});
    this.gpuSampler_comparison = webGPUContext.device.createSampler({
      compare: "less",
      label: "sampler_comparison"
    });
  }
}

class Float16ArrayTexture extends Texture {
  uint16Array;
  floatArray;
  _dataBuffer;
  /**
   * fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]
   * @param width assign the texture width
   * @param height assign the texture height
   * @param numbers color of each pixel
   * @param useMipmap  whether or not gen mipmap
   * @returns
   */
  create(width, height, numbers = null, mipmap = true) {
    if (numbers == null) {
      numbers = [];
      for (let i = 0, c = width * height * 4; i < c; i++) {
        numbers[i] = 0;
      }
    }
    this.updateTexture(width, height, numbers, mipmap);
    return this;
  }
  /**
   * validate the change of this texture
   */
  updateTexture(width, height, numbers, mipmap = true) {
    if (width != this.width || height != this.height) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = null;
      this.gpuTexture && this.gpuTexture.destroy();
      this.gpuTexture = null;
    }
    this.floatArray = numbers;
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 2;
    this.format = GPUTextureFormat.rgba16float;
    this.mipmapCount = Math.floor(mipmap ? Math.log2(width) : 1);
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);
    if (!this.uint16Array || this.uint16Array.length != numbers.length) {
      this.uint16Array = new Uint16Array(numbers.length);
    }
    let uint16Array = this.uint16Array;
    for (let i = 0, c = uint16Array.length; i < c; i++) {
      uint16Array[i] = toHalfFloat(numbers[i]);
    }
    const textureDataBuffer = this._dataBuffer = device.createBuffer({
      size: uint16Array.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
    });
    device.queue.writeBuffer(textureDataBuffer, 0, uint16Array);
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow
      },
      {
        texture: this.getGPUTexture()
      },
      {
        width,
        height,
        depthOrArrayLayers: 1
      }
    );
    if (!this.useMipmap) {
      this.samplerBindingLayout.type = `filtering`;
      this.textureBindingLayout.sampleType = `float`;
    }
    GPUContext.endCommandEncoder(commandEncoder);
    this.gpuSampler = device.createSampler(this);
    this.gpuTexture = this.getGPUTexture();
    if (this.mipmapCount > 1) TextureMipmapGenerator.webGPUGenerateMipmap(this);
  }
}

class Float32ArrayTexture extends Texture {
  /**
   * fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]
   * @param width assign the texture width
   * @param height assign the texture height
   * @param data color of each pixel
   * @param filtering set the sampler type to filtering, else it's non-filtering
   * @returns
   */
  create(width, height, data, filtering = true) {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    this.format = GPUTextureFormat.rgba32float;
    let mipmapCount = 1;
    this.createTextureDescriptor(width, height, mipmapCount, this.format);
    const textureDataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
    });
    device.queue.writeBuffer(textureDataBuffer, 0, data);
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow
      },
      {
        texture: this.getGPUTexture()
      },
      {
        width,
        height,
        depthOrArrayLayers: 1
      }
    );
    GPUContext.endCommandEncoder(commandEncoder);
    if (filtering) {
      this.samplerBindingLayout.type = `non-filtering`;
      this.textureBindingLayout.sampleType = `unfilterable-float`;
    }
    this.gpuSampler = device.createSampler({});
  }
  /**
   * fill this texture GPUBuffer
   * @param width assign the texture width
   * @param height assign the texture height
   * @param textureDataBuffer GPUBuffer
   * @returns
   */
  fromBuffer(width, height, textureDataBuffer) {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    this.format = GPUTextureFormat.rgba32float;
    this.mipmapCount = 1;
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow
      },
      {
        texture: this.getGPUTexture()
      },
      {
        width,
        height,
        depthOrArrayLayers: 1
      }
    );
    GPUContext.endCommandEncoder(commandEncoder);
    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `unfilterable-float`;
    this.gpuSampler = device.createSampler({});
    return this;
  }
}

class SolidColorSky extends LDRTextureCube {
  _internalTexture;
  _minSize = 32;
  _skyColor;
  /**
   * create a cube texture, which filled by solid color.
   * @param color solid color
   * @returns
   */
  constructor(color) {
    super();
    this._skyColor = color;
    this._internalTexture = new Float16ArrayTexture();
    let numbers = [];
    Engine3D.res.fillColor(numbers, this._minSize, this._minSize, this.color.r, this.color.g, this.color.b, this.color.a);
    this._internalTexture.create(this._minSize, this._minSize, numbers, false);
    this.createFromTexture(this._minSize, this._internalTexture);
    return this;
  }
  changeColor(color) {
    this._skyColor = color;
    Engine3D.res.fillColor(this._internalTexture.floatArray, this._minSize, this._minSize, this.color.r, this.color.g, this.color.b, this.color.a);
    this._internalTexture.updateTexture(this._minSize, this._minSize, this._internalTexture.floatArray, false);
    this._faceData.uploadTexture(0, this._internalTexture);
    return this;
  }
  get color() {
    return this._skyColor;
  }
  /**
   * change solid color
   * @param value target color
   * @returns
   */
  set color(value) {
    this.changeColor(value);
  }
}

class Uint16Texture extends Texture {
  /**
   * create texture by number array, which format is uint8
   * @param width width of texture
   * @param height height of texture
   * @param data uint8 array
   * @param useMipmap whether or not gen mipmap
   * @returns
   */
  create(width, height, data, useMiamp = true) {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    this.format = GPUTextureFormat.rgba16float;
    this.mipmapCount = Math.floor(useMiamp ? Math.log2(width) : 1);
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);
    const textureDataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
    });
    device.queue.writeBuffer(textureDataBuffer, 0, data);
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow
      },
      {
        texture: this.getGPUTexture()
      },
      {
        width,
        height,
        depthOrArrayLayers: 1
      }
    );
    GPUContext.endCommandEncoder(commandEncoder);
    this.minFilter = `nearest`;
    this.magFilter = `nearest`;
    this.mipmapFilter = `nearest`;
    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `unfilterable-float`;
    this.minFilter = `linear`;
    this.magFilter = `linear`;
    this.mipmapFilter = `nearest`;
    this.samplerBindingLayout.type = `filtering`;
    this.textureBindingLayout.sampleType = `float`;
    this.gpuSampler = device.createSampler(this);
    if (this.mipmapCount > 1) {
      TextureMipmapGenerator.webGPUGenerateMipmap(this);
    }
  }
}

class AxisObject extends Object3D {
  length = 100;
  thickness = 0.1;
  constructor(length, thickness = 0.1) {
    super();
    this.length = length;
    this.thickness = thickness;
    this.init();
  }
  init() {
    let xAx = new Object3D();
    let yAx = new Object3D();
    let zAx = new Object3D();
    let cubeX = new BoxGeometry(2, 2, 2);
    let cubeY = new BoxGeometry(2, 2, 2);
    let cubeZ = new BoxGeometry(2, 2, 2);
    let matX = new UnLitMaterial();
    matX.baseColor = new Color(1, 0, 0);
    let matY = new UnLitMaterial();
    matY.baseColor = new Color(0, 1, 0);
    let matZ = new UnLitMaterial();
    matZ.baseColor = new Color(0, 0, 1);
    let mrx = xAx.addComponent(MeshRenderer);
    let mry = yAx.addComponent(MeshRenderer);
    let mrz = zAx.addComponent(MeshRenderer);
    mrx.geometry = cubeX;
    mrx.material = matX;
    mrx.castShadow = false;
    mry.geometry = cubeY;
    mry.material = matY;
    mry.castShadow = false;
    mrz.geometry = cubeZ;
    mrz.material = matZ;
    mrz.castShadow = false;
    xAx.localScale = new Vector3(this.length, this.thickness, this.thickness);
    xAx.x = this.length;
    yAx.localScale = new Vector3(this.thickness, this.length, this.thickness);
    yAx.y = this.length;
    zAx.localScale = new Vector3(this.thickness, this.thickness, this.length);
    zAx.z = this.length;
    this.addChild(xAx);
    this.addChild(yAx);
    this.addChild(zAx);
  }
}

let setTimeDelay = async function(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};
let setFrameDelay = async function(frame) {
  return new Promise((resolve, reject) => {
    frame = Math.max(1, frame);
    let callback = function() {
      if (frame < 0) {
        resolve(true);
      } else {
        requestAnimationFrame(callback);
      }
      frame--;
    };
    requestAnimationFrame(callback);
  });
};

class GeometryUtil {
  static merge(geometries, matrixes, target) {
  }
  static mergeNumber(geometries, num, target) {
    let targetGeo = target || new GeometryBase();
    let posLen = geometries.getAttribute(VertexAttributeName.position).data.length / 3;
    let meshIndexList = new Float32Array(posLen * num);
    for (const iterator of geometries.vertexAttributeMap) {
      let attName = iterator[1].attribute;
      if (attName == VertexAttributeName.indices) continue;
      let data = geometries.getAttribute(attName).data;
      let len = data.length;
      let attData = new Float32Array(len * num);
      for (let i = 0; i < num; i++) {
        attData.set(data, len * i);
        for (let ii = 0; ii < posLen; ii++) {
          meshIndexList[posLen * i + ii] = i;
        }
      }
      targetGeo.setAttribute(attName, attData);
    }
    targetGeo.setAttribute(VertexAttributeName.vIndex, meshIndexList);
    let indexArray = geometries.getAttribute(VertexAttributeName.indices).data;
    let indexLen = indexArray.length;
    let newIndexArray = new Uint32Array(indexArray.length * num);
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < indexLen; j++) {
        let skipFace = i * posLen;
        let index = i * indexLen;
        const ii = indexArray[j] + skipFace;
        newIndexArray[index + j] = ii;
      }
    }
    targetGeo.setIndices(newIndexArray);
    targetGeo.addSubGeometry({
      indexStart: 0,
      indexCount: newIndexArray.length,
      vertexStart: 0,
      index: 0,
      vertexCount: 0,
      firstStart: 0,
      topology: 0
    });
    return targetGeo;
  }
  static generateNormal() {
  }
  static generateTangent() {
  }
  static packUV() {
  }
}

class GridObject extends Object3D {
  size = 100;
  divisions = 10;
  constructor(size = 100, divisions = 10) {
    super();
    this.size = size;
    this.divisions = divisions;
    this.buildGeometry();
    this.addAxis();
  }
  buildGeometry() {
    const vertices = [];
    const indices = [];
    const step = this.size / this.divisions;
    const halfSize = this.size / 2;
    const center = this.divisions / 2;
    for (let i = 0, k = -halfSize; i <= this.divisions; i++, k += step) {
      if (i === center)
        continue;
      vertices.push(-halfSize, 0, k, halfSize, 0, k);
      vertices.push(k, 0, -halfSize, k, 0, halfSize);
    }
    for (let i = 0; i < vertices.length / 3; i += 2)
      indices.push(i, i + 1);
    let grid = new GeometryBase();
    grid.setIndices(indices.length > Uint16Array.length ? new Uint32Array(indices) : new Uint16Array(indices));
    grid.setAttribute(VertexAttributeName.position, new Float32Array(vertices));
    grid.addSubGeometry({
      indexStart: 0,
      indexCount: indices.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
    let mat = new UnLitMaterial();
    mat.topology = "line-list";
    mat.baseColor = new Color(1, 1, 1, 0.15);
    mat.blendMode = BlendMode.ADD;
    mat.castReflection = false;
    let mr = this.addComponent(MeshRenderer);
    mr.geometry = grid;
    mr.material = mat;
  }
  addAxis() {
    const halfSize = this.size / 2;
    let vertices = new Float32Array([-halfSize, 0, 0, halfSize, 0, 0]);
    let indexes = new Uint16Array([0, 1, 2, 3]);
    let line = new GeometryBase();
    line.setIndices(indexes);
    line.setAttribute(VertexAttributeName.position, vertices);
    line.addSubGeometry({
      indexStart: 0,
      indexCount: indexes.length,
      vertexStart: 0,
      vertexCount: 0,
      firstStart: 0,
      index: 0,
      topology: 0
    });
    {
      let x = new Object3D();
      let mr = x.addComponent(MeshRenderer);
      mr.geometry = line;
      let mat = mr.material = new UnLitMaterial();
      mat.baseColor = new Color(1, 0, 0, 0.5);
      mat.blendMode = BlendMode.ADD;
      mat.castReflection = false;
      mat.topology = "line-list";
      this.addChild(x);
    }
    {
      let z = new Object3D();
      z.rotationY = 90;
      let mr = z.addComponent(MeshRenderer);
      mr.geometry = line;
      let mat = mr.material = new UnLitMaterial();
      mat.baseColor = new Color(0, 1, 0, 0.5);
      mat.blendMode = BlendMode.ADD;
      mat.castReflection = false;
      mat.topology = "line-list";
      this.addChild(z);
    }
  }
}

class Object3DUtil {
  static boxGeo;
  static planeGeo;
  static sphere;
  static material;
  static materialMap;
  static initHeap() {
    if (!this.boxGeo)
      this.boxGeo = new BoxGeometry();
    if (!this.planeGeo)
      this.planeGeo = new PlaneGeometry(1, 1, 1, 1, Vector3.UP);
    if (!this.sphere)
      this.sphere = new SphereGeometry(1, 35, 35);
    if (!this.material) {
      this.material = new LitMaterial();
    }
    if (!this.materialMap) {
      this.materialMap = /* @__PURE__ */ new Map();
    }
  }
  static get CubeMesh() {
    this.initHeap();
    return this.boxGeo;
  }
  static get SphereMesh() {
    this.initHeap();
    return this.sphere;
  }
  static GetCube() {
    this.initHeap();
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.geometry = this.boxGeo;
    renderer.material = this.material.clone();
    renderer.castShadow = true;
    return obj;
  }
  static GetMaterial(tex) {
    let mat = this.materialMap.get(tex);
    if (!mat) {
      mat = new LitMaterial();
      mat.baseMap = tex;
      this.materialMap.set(tex, mat);
    }
    return mat.clone();
  }
  static GetPlane(tex) {
    this.initHeap();
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.geometry = this.planeGeo;
    let cloneMat = this.GetMaterial(tex);
    cloneMat.blendMode = BlendMode.ADD;
    cloneMat.castShadow = false;
    renderer.material = cloneMat;
    renderer.castGI = false;
    renderer.castReflection = false;
    return obj;
  }
  static GetSingleCube(sizeX, sizeY, sizeZ, r, g, b) {
    this.initHeap();
    let mat = new LitMaterial();
    mat.roughness = 0.5;
    mat.metallic = 0.1;
    mat.baseColor = new Color(r, g, b, 1);
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.castGI = true;
    renderer.geometry = new BoxGeometry(sizeX, sizeY, sizeZ);
    renderer.material = mat;
    return obj;
  }
  static GetSingleSphere(radius, r, g, b) {
    this.initHeap();
    let mat = new LitMaterial();
    mat.baseColor = new Color(r, g, b, 1);
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.castGI = true;
    renderer.geometry = new SphereGeometry(radius, 20, 20);
    renderer.material = mat;
    return obj;
  }
  static get Sphere() {
    this.initHeap();
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.geometry = this.sphere;
    renderer.material = this.material;
    return obj;
  }
  static GetSingleCube2(mat, size = 10) {
    this.initHeap();
    let obj = new Object3D();
    let renderer = obj.addComponent(MeshRenderer);
    renderer.castShadow = false;
    renderer.geometry = new BoxGeometry(size, size, size);
    renderer.material = mat;
    return obj;
  }
  static GetPointLight(pos, rotation, radius, r, g, b, intensity = 1, castShadow = true) {
    let lightObj = new Object3D();
    let light = lightObj.addComponent(PointLight);
    light.lightColor = new Color(r, g, b, 1);
    light.intensity = intensity;
    light.range = radius;
    light.at = 8;
    light.radius = 0;
    light.castShadow = castShadow;
    lightObj.localPosition = pos;
    lightObj.localRotation = rotation;
    let sp = this.GetSingleSphere(0.1, 1, 1, 1);
    lightObj.addChild(sp);
    return light;
  }
}

class StorageUtil {
  static localData;
  static load(dataTable) {
    let jsonData = localStorage.getItem(dataTable);
    if (jsonData) {
      this.localData = JSON.parse(jsonData);
    } else {
      this.localData = {};
      StorageUtil.save(dataTable, this.localData);
    }
    return this.localData;
  }
  static save(table, data) {
    let json = JSON.stringify(data);
    localStorage.setItem(table, json);
  }
}

class f32 extends Number {
}
class i32 extends Number {
}
class u32 extends Number {
}

class Vector3Struct extends Struct {
  x = 0;
  y = 0;
  z = 0;
  w = 0;
}

var TransformAxisEnum = /* @__PURE__ */ ((TransformAxisEnum2) => {
  TransformAxisEnum2[TransformAxisEnum2["X"] = 0] = "X";
  TransformAxisEnum2[TransformAxisEnum2["Y"] = 1] = "Y";
  TransformAxisEnum2[TransformAxisEnum2["Z"] = 2] = "Z";
  TransformAxisEnum2[TransformAxisEnum2["XY"] = 3] = "XY";
  TransformAxisEnum2[TransformAxisEnum2["XZ"] = 4] = "XZ";
  TransformAxisEnum2[TransformAxisEnum2["YZ"] = 5] = "YZ";
  TransformAxisEnum2[TransformAxisEnum2["XYZ"] = 6] = "XYZ";
  TransformAxisEnum2[TransformAxisEnum2["MAX"] = 7] = "MAX";
  TransformAxisEnum2[TransformAxisEnum2["NONE"] = 8] = "NONE";
  return TransformAxisEnum2;
})(TransformAxisEnum || {});

var TransformSpaceMode = /* @__PURE__ */ ((TransformSpaceMode2) => {
  TransformSpaceMode2[TransformSpaceMode2["Local"] = 0] = "Local";
  TransformSpaceMode2[TransformSpaceMode2["Global"] = 1] = "Global";
  return TransformSpaceMode2;
})(TransformSpaceMode || {});

class TransformControllerBaseComponent extends ComponentBase {
  mAxis;
  mAxisColor;
  mContainer;
  mAxisMaterial;
  mAxisCollider;
  constructor() {
    super();
    this._enable = false;
    this.mAxis = new Array(TransformAxisEnum.MAX);
    this.mAxisColor = new Array(TransformAxisEnum.MAX);
    this.mAxisMaterial = new Array(TransformAxisEnum.MAX);
    this.mAxisCollider = new Array(TransformAxisEnum.MAX);
  }
  get target() {
    return this.object3D.target;
  }
  get mX() {
    return this.object3D.mXObj;
  }
  get mY() {
    return this.object3D.mYObj;
  }
  get mZ() {
    return this.object3D.mZObj;
  }
  get transformSpaceMode() {
    return this.object3D.transformSpaceMode;
  }
  init(param) {
    this.mContainer = new Object3D();
    let xAxisMaterial = new UnLitMaterial();
    xAxisMaterial.baseColor = new Color(1, 0, 0);
    xAxisMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.X] = xAxisMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.X] = xAxisMaterial;
    let yAxisMaterial = new UnLitMaterial();
    yAxisMaterial.baseColor = new Color(0, 1, 0);
    yAxisMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.Y] = yAxisMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.Y] = yAxisMaterial;
    let zAxisMaterial = new UnLitMaterial();
    zAxisMaterial.baseColor = new Color(0, 0, 1);
    zAxisMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.Z] = zAxisMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.Z] = zAxisMaterial;
    let axisX = this.createCustomAxis(TransformAxisEnum.X);
    let axisY = this.createCustomAxis(TransformAxisEnum.Y);
    let axisZ = this.createCustomAxis(TransformAxisEnum.Z);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.X] = axisX);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.Y] = axisY);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.Z] = axisZ);
    this.mAxisCollider[TransformAxisEnum.X] = axisX.getComponent(ColliderComponent);
    this.mAxisCollider[TransformAxisEnum.Y] = axisY.getComponent(ColliderComponent);
    this.mAxisCollider[TransformAxisEnum.Z] = axisZ.getComponent(ColliderComponent);
  }
  start() {
  }
  onEnable(view) {
    this.object3D.addChild(this.mContainer);
    this.reset();
  }
  onDisable(view) {
    this.object3D.removeChild(this.mContainer);
  }
  reset() {
    switch (this.transformSpaceMode) {
      case TransformSpaceMode.Local:
        {
          let targetInvWorldMatrix = Matrix4.help_matrix_0.copyFrom(this.mX.transform.worldMatrix);
          let resultTRS = targetInvWorldMatrix.decompose();
          this.object3D.scaleX = 1;
          this.object3D.scaleY = 1;
          this.object3D.scaleZ = 1;
          this.object3D.rotationX = resultTRS[1].x;
          this.object3D.rotationY = resultTRS[1].y;
          this.object3D.rotationZ = resultTRS[1].z;
          this.object3D.x = resultTRS[0].x;
          this.object3D.y = resultTRS[0].y;
          this.object3D.z = resultTRS[0].z;
        }
        break;
      case TransformSpaceMode.Global:
        {
          this.object3D.scaleX = 1;
          this.object3D.scaleY = 1;
          this.object3D.scaleZ = 1;
          this.object3D.rotationX = 0;
          this.object3D.rotationY = 0;
          this.object3D.rotationZ = 0;
          const pos = this.mX.transform.worldPosition;
          this.object3D.x = pos.x;
          this.object3D.y = pos.y;
          this.object3D.z = pos.z;
        }
        break;
    }
  }
  pickAxis() {
    const scene3D = this.object3D.transform.scene3D;
    const camera = scene3D.view.camera;
    let ray = camera.screenPointToRay(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY);
    let intersect;
    let lastResult;
    for (let i = 0; i <= TransformAxisEnum.MAX; i++) {
      let collider = this.mAxisCollider[i];
      if (!collider) {
        continue;
      }
      intersect = collider.rayPick(ray);
      if (intersect) {
        if (!lastResult || lastResult.distance > intersect.distance || i == TransformAxisEnum.XYZ) {
          lastResult = {
            axis: i,
            obj: collider.object3D,
            distance: intersect.distance,
            intersectPoint: intersect.intersectPoint
          };
          if (i == TransformAxisEnum.XYZ) {
            break;
          }
        }
      }
    }
    return lastResult;
  }
  currentAxis = TransformAxisEnum.NONE;
  beginPoint = new Vector3();
  beginMousePos = new Vector3();
  currentPoint = new Vector3();
  onMouseDown(e) {
    if (e.mouseCode != MouseCode.MOUSE_LEFT) {
      return;
    }
    let result = this.pickAxis();
    if (!result) {
      return;
    }
    this.currentAxis = result.axis;
    e.stopImmediatePropagation();
    const scene3D = this.object3D.transform.scene3D;
    const camera = scene3D.view.camera;
    let screenPoint = camera.worldToScreenPoint(this.mX.transform.worldPosition);
    let pos = camera.screenPointToWorld(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, screenPoint.z);
    this.beginPoint.copyFrom(pos);
    this.beginMousePos.x = Engine3D.inputSystem.mouseX;
    this.beginMousePos.y = Engine3D.inputSystem.mouseY;
  }
  lastMoveObj;
  lastMoveAxis;
  onMouseMove(e) {
    if (this.currentAxis == TransformAxisEnum.NONE) {
      let mat = this.lastMoveObj.getComponent(MeshRenderer).material;
      if (this.lastMoveObj && "baseColor" in mat) {
        mat.baseColor = this.mAxisColor[this.lastMoveAxis];
        this.lastMoveObj = null;
        if (this.lastMoveAxis == TransformAxisEnum.XYZ) {
          this.mAxis[TransformAxisEnum.X].getComponent(MeshRenderer).material.setUniformColor("baseColor", this.mAxisColor[TransformAxisEnum.X]);
          this.mAxis[TransformAxisEnum.Y].getComponent(MeshRenderer).material.setUniformColor("baseColor", this.mAxisColor[TransformAxisEnum.Y]);
          this.mAxis[TransformAxisEnum.Z].getComponent(MeshRenderer).material.setUniformColor("baseColor", this.mAxisColor[TransformAxisEnum.Z]);
        }
        this.lastMoveAxis = TransformAxisEnum.NONE;
      }
      let result = this.pickAxis();
      if (!result) {
        return;
      }
      mat.setUniformColor("baseColor", new Color(1, 1, 1));
      this.lastMoveObj = result.obj;
      this.lastMoveAxis = result.axis;
      if (this.lastMoveAxis == TransformAxisEnum.XYZ) {
        this.mAxis[TransformAxisEnum.X].getComponent(MeshRenderer).material.setUniformColor("baseColor", new Color(1, 1, 1));
        this.mAxis[TransformAxisEnum.Y].getComponent(MeshRenderer).material.setUniformColor("baseColor", new Color(1, 1, 1));
        this.mAxis[TransformAxisEnum.Z].getComponent(MeshRenderer).material.setUniformColor("baseColor", new Color(1, 1, 1));
      }
    } else {
      const scene3D = this.object3D.transform.scene3D;
      const camera = scene3D.view.camera;
      let screenPoint = camera.worldToScreenPoint(this.mX.transform.worldPosition);
      let pos = camera.screenPointToWorld(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, screenPoint.z);
      this.currentPoint.copyFrom(pos);
      let offset = pos.subtract(this.beginPoint);
      Vector3.HELP_0.set(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, 0);
      let distance = Vector3.distance(Vector3.HELP_0, this.beginMousePos);
      this.beginMousePos.copyFrom(Vector3.HELP_0);
      switch (this.transformSpaceMode) {
        case TransformSpaceMode.Local:
          this.applyLocalTransform(this.currentAxis, offset, distance);
          break;
        case TransformSpaceMode.Global:
          this.applyGlobalTransform(this.currentAxis, offset, distance);
          break;
      }
      this.beginPoint.copyFrom(pos);
      this.reset();
    }
  }
  onMouseUp(e) {
    if (e.mouseCode != MouseCode.MOUSE_LEFT) {
      return;
    }
    this.currentAxis = TransformAxisEnum.NONE;
    this.reset();
  }
  onUpdate(view) {
    let distance = Vector3.distance(view.camera.transform.worldPosition, this.object3D.transform.worldPosition);
    let scale = distance / 100;
    this.mContainer.scaleX = this.mContainer.scaleY = this.mContainer.scaleZ = scale;
    if (this.mX) {
      const pos = this.mX.transform.worldPosition;
      this.object3D.x = pos.x;
      this.object3D.y = pos.y;
      this.object3D.z = pos.z;
    }
  }
  applyLocalTransform(currentAxis, offset, distance) {
    console.warn("not imp");
  }
  applyGlobalTransform(currentAxis, offset, distance) {
    console.warn("not imp");
  }
  createCustomAxis(axis) {
    let axisObj = this.createAxis(axis);
    return axisObj;
  }
  createAxis(axis) {
    let r = 0, g = 0, b = 0;
    switch (axis) {
      case TransformAxisEnum.X:
        r = 1;
        break;
      case TransformAxisEnum.Y:
        g = 1;
        break;
      case TransformAxisEnum.Z:
        b = 1;
        break;
    }
    let w = 0.4 + r * 20;
    let h = 0.4 + g * 20;
    let d = 0.4 + b * 20;
    let obj = new Object3D();
    obj.x = w * 0.5;
    obj.y = h * 0.5;
    obj.z = d * 0.5;
    let mr = obj.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(w, h, d);
    mr.material = this.mAxisMaterial[axis];
    let collider = obj.addComponent(ColliderComponent);
    let boxShape = new BoxColliderShape();
    boxShape.setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(w + 1, h + 1, d + 1));
    collider.shape = boxShape;
    return obj;
  }
}

class ScaleControlComponents extends TransformControllerBaseComponent {
  init(param) {
    super.init(param);
    let boxXYZMaterial = new UnLitMaterial();
    boxXYZMaterial.doubleSide = true;
    boxXYZMaterial.baseColor = new Color(0.9, 0.9, 0.9);
    boxXYZMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.XYZ] = boxXYZMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.XYZ] = boxXYZMaterial;
    let boxXYZ = new Object3D();
    let mr = boxXYZ.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(2, 2, 2);
    mr.material = this.mAxisMaterial[TransformAxisEnum.XYZ];
    let collider = boxXYZ.addComponent(ColliderComponent);
    let boxShape = new BoxColliderShape();
    boxShape.setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(2, 2, 2));
    collider.shape = boxShape;
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.XYZ] = boxXYZ);
    this.mAxisCollider[TransformAxisEnum.XYZ] = boxXYZ.getComponent(ColliderComponent);
  }
  applyLocalTransform(currentAxis, offset, distance) {
    switch (this.currentAxis) {
      case TransformAxisEnum.XYZ:
        {
          let v = 0;
          if (Math.abs(offset.x) > Math.abs(offset.y)) {
            if (Math.abs(offset.x) > Math.abs(offset.z)) {
              v = offset.x;
            } else {
              v = offset.z;
            }
          } else {
            v = offset.y;
          }
          this.mX.scaleX += v;
          this.mX.scaleY += v;
          this.mX.scaleZ += v;
        }
        break;
      default:
        {
          this.mX.transform.worldMatrix.transformVector(offset, offset);
          if (this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.XZ) {
            this.mX.scaleX = Math.abs(this.mX.scaleX + offset.x);
          }
          if (this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.YZ) {
            this.mX.scaleY = Math.abs(this.mX.scaleY + offset.y);
          }
          if (this.currentAxis == TransformAxisEnum.Z || this.currentAxis == TransformAxisEnum.XZ || this.currentAxis == TransformAxisEnum.YZ) {
            this.mX.scaleZ = Math.abs(this.mX.scaleZ + offset.z);
          }
        }
        break;
    }
  }
  applyGlobalTransform(currentAxis, offset, distance) {
    let value = Vector3.HELP_0;
    value.set(0, 0, 0);
    if (this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.XZ) {
      value.x = offset.x;
    }
    if (this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.YZ) {
      value.y = offset.y;
    }
    if (this.currentAxis == TransformAxisEnum.Z || this.currentAxis == TransformAxisEnum.XZ || this.currentAxis == TransformAxisEnum.YZ) {
      value.z = offset.z;
    }
    this.mX.transform.worldMatrix.transformVector(value, Vector3.HELP_1);
    this.mX.scaleX += Vector3.HELP_1.x;
    this.mX.scaleY += Vector3.HELP_1.y;
    this.mX.scaleZ += Vector3.HELP_1.z;
  }
  createCustomAxis(axis) {
    let axisObj = super.createAxis(axis);
    let arrowsObj = this.createBox(axis);
    axisObj.addChild(arrowsObj);
    return axisObj;
  }
  createBox(axis) {
    let r = 0, g = 0, b = 0;
    let obj = new Object3D();
    switch (axis) {
      case TransformAxisEnum.X:
        r = 1;
        obj.rotationZ = -90;
        break;
      case TransformAxisEnum.Y:
        g = 1;
        break;
      case TransformAxisEnum.Z:
        b = 1;
        obj.rotationX = 90;
        break;
    }
    let w = 0.2 + r * 20;
    let h = 0.2 + g * 20;
    let d = 0.2 + b * 20;
    obj.x = w * 0.5;
    obj.y = h * 0.5;
    obj.z = d * 0.5;
    let mr = obj.addComponent(MeshRenderer);
    mr.geometry = new BoxGeometry(2, 2, 2);
    mr.material = this.mAxisMaterial[axis];
    return obj;
  }
}

var TransformMode = /* @__PURE__ */ ((TransformMode2) => {
  TransformMode2[TransformMode2["Scale"] = 0] = "Scale";
  TransformMode2[TransformMode2["Rotation"] = 1] = "Rotation";
  TransformMode2[TransformMode2["Translation"] = 2] = "Translation";
  TransformMode2[TransformMode2["NONE"] = 3] = "NONE";
  return TransformMode2;
})(TransformMode || {});

class RotationControlComponents extends TransformControllerBaseComponent {
  applyLocalTransform(currentAxis, offset, distance) {
    if (this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.XZ) ;
    if (this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.YZ) {
      Matrix4.help_matrix_0.copyFrom(this.mX.transform.worldMatrix);
      Matrix4.help_matrix_1.identity();
      Matrix4.help_matrix_1.createByRotation(1, Vector3.Y_AXIS);
      Matrix4.help_matrix_2.multiplyMatrices(Matrix4.help_matrix_1, Matrix4.help_matrix_0);
      Matrix4.help_matrix_2.invert();
      Matrix4.help_matrix_1.multiplyMatrices(Matrix4.help_matrix_2, Matrix4.help_matrix_0);
      let trs = Matrix4.help_matrix_1.decompose();
      this.mX.rotationX += trs[1].x;
      this.mY.rotationY += trs[1].y;
      this.mZ.rotationZ += trs[1].z;
    }
    if (this.currentAxis == TransformAxisEnum.Z || this.currentAxis == TransformAxisEnum.XZ || this.currentAxis == TransformAxisEnum.YZ) ;
  }
  getAngle() {
    const scene3D = this.object3D.transform.scene3D;
    const camera = scene3D.view.camera;
    const pos = this.mZ.transform.worldPosition;
    camera.screenPointToRay(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY);
    if (this.currentAxis == TransformAxisEnum.X) {
      let screenPoint = camera.worldToScreenPoint(pos);
      Vector3.HELP_1.set(screenPoint.x, screenPoint.y, 0);
      Vector3.HELP_2.set(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, 0);
      let vec3 = Vector3.HELP_2.subtract(Vector3.HELP_1);
      let angle = Vector3.getAngle(Vector3.X_AXIS, vec3);
      if (vec3.y > 0) {
        angle = 360 - angle;
      }
      if (camera.transform.worldPosition.x - pos.x > 0) {
        angle = 360 - angle;
      }
      return angle;
    }
    if (this.currentAxis == TransformAxisEnum.Y) {
      let screenPoint = camera.worldToScreenPoint(pos);
      Vector3.HELP_1.set(screenPoint.x, screenPoint.y, 0);
      Vector3.HELP_2.set(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, 0);
      let vec3 = Vector3.HELP_2.subtract(Vector3.HELP_1);
      let angle = Vector3.getAngle(Vector3.X_AXIS, vec3);
      if (vec3.y > 0) {
        angle = 360 - angle;
      }
      if (camera.transform.worldPosition.y - pos.y > 0) {
        angle = 360 - angle;
      }
      return angle;
    }
    if (this.currentAxis == TransformAxisEnum.Z) {
      let screenPoint = camera.worldToScreenPoint(pos);
      Vector3.HELP_1.set(screenPoint.x, screenPoint.y, 0);
      Vector3.HELP_2.set(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY, 0);
      let vec3 = Vector3.HELP_2.subtract(Vector3.HELP_1);
      let angle = Vector3.getAngle(Vector3.X_AXIS, vec3);
      if (vec3.y > 0) {
        angle = 360 - angle;
      }
      if (camera.transform.worldPosition.z - pos.z > 0) {
        angle = 360 - angle;
      }
      return angle;
    }
    return 0;
  }
  mLastAngle = 0;
  applyGlobalTransform(currentAxis, offset, distance) {
    if (this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.Z) {
      let angle = this.getAngle();
      Matrix4.help_matrix_0.identity();
      switch (this.currentAxis) {
        case TransformAxisEnum.X:
          Matrix4.help_matrix_0.createByRotation(this.mLastAngle - angle, Vector3.X_AXIS);
          break;
        case TransformAxisEnum.Y:
          Matrix4.help_matrix_0.createByRotation(this.mLastAngle - angle, Vector3.Y_AXIS);
          break;
        case TransformAxisEnum.Z:
          Matrix4.help_matrix_0.createByRotation(this.mLastAngle - angle, Vector3.Z_AXIS);
          break;
      }
      Matrix4.help_matrix_1.copyFrom(this.mX.transform.worldMatrix);
      Matrix4.help_matrix_1.append(Matrix4.help_matrix_0);
      if (this.mX.parent) {
        Matrix4.help_matrix_2.copyFrom(this.mX.parent.worldMatrix);
        Matrix4.help_matrix_2.invert();
        Matrix4.help_matrix_1.multiply(Matrix4.help_matrix_2);
      }
      let trs = Matrix4.help_matrix_1.decompose(Orientation3D.QUATERNION);
      let rot = trs[1];
      Quaternion.HELP_0.set(rot.x, rot.y, rot.z, rot.w);
      this.mLastAngle = angle;
      this.mX.transform.localRotQuat = Quaternion.HELP_0;
    }
  }
  onMouseDown(e) {
    super.onMouseDown(e);
    if (this.currentAxis != TransformAxisEnum.NONE) {
      this.mAxis[TransformAxisEnum.X].getComponent(MeshRenderer).enable = false;
      this.mAxis[TransformAxisEnum.Y].getComponent(MeshRenderer).enable = false;
      this.mAxis[TransformAxisEnum.Z].getComponent(MeshRenderer).enable = false;
      this.mAxis[this.currentAxis].getComponent(MeshRenderer).enable = true;
      this.mLastAngle = this.getAngle();
    }
  }
  onMouseUp(e) {
    super.onMouseUp(e);
    if (this.currentAxis == TransformAxisEnum.NONE) {
      this.mAxis[TransformAxisEnum.X].getComponent(MeshRenderer).enable = true;
      this.mAxis[TransformAxisEnum.Y].getComponent(MeshRenderer).enable = true;
      this.mAxis[TransformAxisEnum.Z].getComponent(MeshRenderer).enable = true;
    }
  }
  createCustomAxis(axis) {
    let axisObj = this.createAxis(axis);
    return axisObj;
  }
  createAxis(axis) {
    let obj = new Object3D();
    switch (axis) {
      case TransformAxisEnum.X:
        obj.rotationZ = 90;
        break;
      case TransformAxisEnum.Y:
        break;
      case TransformAxisEnum.Z:
        obj.rotationX = 90;
        break;
    }
    let mr = obj.addComponent(MeshRenderer);
    mr.geometry = new TorusGeometry(20, 0.4);
    mr.material = this.mAxisMaterial[axis];
    let collider = obj.addComponent(ColliderComponent);
    let colliderShape = new BoxColliderShape();
    colliderShape.setFromCenterAndSize(new Vector3(), new Vector3(40, 0.4, 40));
    collider.shape = colliderShape;
    return obj;
  }
  pickAxis() {
    const scene3D = this.object3D.transform.scene3D;
    const camera = scene3D.view.camera;
    let ray = camera.screenPointToRay(Engine3D.inputSystem.mouseX, Engine3D.inputSystem.mouseY);
    let intersect;
    let lastResult;
    for (let i = 0; i <= TransformAxisEnum.MAX; i++) {
      let collider = this.mAxisCollider[i];
      if (!collider) {
        continue;
      }
      intersect = collider.rayPick(ray);
      if (intersect) {
        let distance = Vector3.distance(intersect.intersectPoint, collider.shape.center);
        if (distance > 20 + 0.8 || distance < 20 - 0.8) {
          continue;
        }
        if (!lastResult || lastResult.distance > intersect.distance) {
          lastResult = {
            axis: i,
            obj: collider.object3D,
            distance: intersect.distance,
            intersectPoint: intersect.intersectPoint
          };
        }
      }
    }
    return lastResult;
  }
}

class TranslationControlComponents extends TransformControllerBaseComponent {
  init(param) {
    super.init(param);
    let xyPlaneMaterial = new UnLitMaterial();
    xyPlaneMaterial.doubleSide = true;
    xyPlaneMaterial.baseColor = new Color(0, 0, 1);
    xyPlaneMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.XY] = xyPlaneMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.XY] = xyPlaneMaterial;
    let xzPlaneMaterial = new UnLitMaterial();
    xzPlaneMaterial.doubleSide = true;
    xzPlaneMaterial.baseColor = new Color(0, 1, 0);
    xzPlaneMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.XZ] = xzPlaneMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.XZ] = xzPlaneMaterial;
    let yzPlaneMaterial = new UnLitMaterial();
    yzPlaneMaterial.doubleSide = true;
    yzPlaneMaterial.baseColor = new Color(1, 0, 0);
    yzPlaneMaterial.depthCompare = GPUCompareFunction.always;
    this.mAxisColor[TransformAxisEnum.YZ] = yzPlaneMaterial.baseColor;
    this.mAxisMaterial[TransformAxisEnum.YZ] = yzPlaneMaterial;
    let planeXY = this.createPlane(TransformAxisEnum.XY);
    let planeXZ = this.createPlane(TransformAxisEnum.XZ);
    let planeYZ = this.createPlane(TransformAxisEnum.YZ);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.XY] = planeXY);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.XZ] = planeXZ);
    this.mContainer.addChild(this.mAxis[TransformAxisEnum.YZ] = planeYZ);
    this.mAxisCollider[TransformAxisEnum.XY] = planeXY.getComponent(ColliderComponent);
    this.mAxisCollider[TransformAxisEnum.XZ] = planeXZ.getComponent(ColliderComponent);
    this.mAxisCollider[TransformAxisEnum.YZ] = planeYZ.getComponent(ColliderComponent);
  }
  applyLocalTransform(currentAxis, offset, distance) {
    Matrix4.help_matrix_0.copyFrom(this.mX.transform.worldMatrix).invert();
    Matrix4.help_matrix_0.transformVector(offset, Vector3.HELP_0);
    if (!(this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.XZ)) {
      Vector3.HELP_0.x = 0;
    }
    if (!(this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.YZ)) {
      Vector3.HELP_0.y = 0;
    }
    if (!(this.currentAxis == TransformAxisEnum.Z || this.currentAxis == TransformAxisEnum.XZ || this.currentAxis == TransformAxisEnum.YZ)) {
      Vector3.HELP_0.z = 0;
    }
    this.mX.transform.worldMatrix.transformVector(Vector3.HELP_0, Vector3.HELP_1);
    this.mX.x += Vector3.HELP_1.x;
    this.mX.y += Vector3.HELP_1.y;
    this.mX.z += Vector3.HELP_1.z;
  }
  applyGlobalTransform(currentAxis, offset, distance) {
    Matrix4.help_matrix_0.identity();
    if (this.currentAxis == TransformAxisEnum.X || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.XZ) {
      Matrix4.help_matrix_0.appendTranslation(offset.x, 0, 0);
    }
    if (this.currentAxis == TransformAxisEnum.Y || this.currentAxis == TransformAxisEnum.XY || this.currentAxis == TransformAxisEnum.YZ) {
      Matrix4.help_matrix_0.appendTranslation(0, offset.y, 0);
    }
    if (this.currentAxis == TransformAxisEnum.Z || this.currentAxis == TransformAxisEnum.XZ || this.currentAxis == TransformAxisEnum.YZ) {
      Matrix4.help_matrix_0.appendTranslation(0, 0, offset.z);
    }
    Matrix4.help_matrix_1.copyFrom(this.mX.transform.worldMatrix);
    Matrix4.help_matrix_1.append(Matrix4.help_matrix_0);
    if (this.mX.parent) {
      Matrix4.help_matrix_2.copyFrom(this.mX.parent.worldMatrix);
      Matrix4.help_matrix_2.invert();
      Matrix4.help_matrix_1.multiply(Matrix4.help_matrix_2);
    }
    let trs = Matrix4.help_matrix_1.decompose(Orientation3D.QUATERNION);
    this.mX.transform.localPosition = trs[0];
    console.log(this.target.localPosition);
  }
  createCustomAxis(axis) {
    let axisObj = super.createAxis(axis);
    let arrowsObj = this.createArrows(axis);
    axisObj.addChild(arrowsObj);
    return axisObj;
  }
  createArrows(axis) {
    let r = 0, g = 0, b = 0;
    let obj = new Object3D();
    switch (axis) {
      case TransformAxisEnum.X:
        r = 1;
        obj.rotationZ = -90;
        break;
      case TransformAxisEnum.Y:
        g = 1;
        obj.rotationY = -90;
        break;
      case TransformAxisEnum.Z:
        b = 1;
        obj.rotationX = 90;
        break;
    }
    let w = 0.2 + r * 20;
    let h = 0.2 + g * 20;
    let d = 0.2 + b * 20;
    obj.x = w * 0.5;
    obj.y = h * 0.5;
    obj.z = d * 0.5;
    let mr = obj.addComponent(MeshRenderer);
    mr.geometry = new CylinderGeometry(0, 1, 4);
    mr.material = this.mAxisMaterial[axis];
    return obj;
  }
  createPlane(axis) {
    let obj = new Object3D();
    let mr = obj.addComponent(MeshRenderer);
    mr.material = this.mAxisMaterial[axis];
    let collider = obj.addComponent(ColliderComponent);
    let boxShape = new BoxColliderShape();
    collider.shape = boxShape;
    switch (axis) {
      case TransformAxisEnum.XY:
        mr.geometry = new PlaneGeometry(4, 4, 1, 1, Vector3.Z_AXIS);
        obj.x = 8;
        obj.y = 8;
        boxShape.setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(4, 4, 0.1));
        break;
      case TransformAxisEnum.XZ:
        mr.geometry = new PlaneGeometry(4, 4, 1, 1, Vector3.Y_AXIS);
        obj.x = 8;
        obj.z = 8;
        boxShape.setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(4, 0.1, 4));
        break;
      case TransformAxisEnum.YZ:
        mr.geometry = new PlaneGeometry(4, 4, 1, 1, Vector3.X_AXIS);
        obj.y = 8;
        obj.z = 8;
        boxShape.setFromCenterAndSize(new Vector3(0, 0, 0), new Vector3(0.1, 4, 4));
        break;
    }
    return obj;
  }
}

class Object3DTransformTools extends Object3D {
  static _instance;
  static get instance() {
    if (!this._instance) {
      this._instance = new Object3DTransformTools();
    }
    return this._instance;
  }
  mTarget;
  mTransformMode = TransformMode.NONE;
  mTransformSpaceType = TransformSpaceMode.Global;
  mControllers;
  mXObj;
  mYObj;
  mZObj;
  constructor() {
    super();
    this.mControllers = [null, null, null];
    this.mControllers[TransformMode.Scale] = this.addComponent(ScaleControlComponents);
    this.mControllers[TransformMode.Rotation] = this.addComponent(RotationControlComponents);
    this.mControllers[TransformMode.Translation] = this.addComponent(TranslationControlComponents);
    this.mControllers[TransformMode.Scale].enable = false;
    this.mControllers[TransformMode.Rotation].enable = false;
    this.mControllers[TransformMode.Translation].enable = false;
    this.mXObj = new Object3D();
    this.mYObj = new Object3D();
    this.mZObj = new Object3D();
    this.mXObj.addChild(this.mYObj);
    this.mYObj.addChild(this.mZObj);
  }
  get transformMode() {
    return this.mTransformMode;
  }
  get transformSpaceMode() {
    return this.mTransformSpaceType;
  }
  active(scene) {
    scene.addChild(this);
    scene.addChild(this.mXObj);
  }
  unActive(scene) {
    scene.removeChild(this);
  }
  get target() {
    return this.mTarget;
  }
  selectObject(obj, transformMode, spaceMode) {
    if (this.mTarget != obj) {
      if (obj) {
        this.activate();
      } else {
        this.unactivate();
      }
      this.mTarget = obj;
      this.mXObj.localPosition = obj.transform.worldPosition.clone();
    }
    if (transformMode != void 0) {
      this.selectTransformMode(transformMode);
    }
    if (spaceMode != void 0) {
      this.selectTransformSpaceMode(spaceMode);
    }
  }
  selectTransformMode(transformMode) {
    if (this.mTransformMode == transformMode)
      return;
    if (this.mTransformMode != TransformMode.NONE)
      this.mControllers[this.mTransformMode].enable = false;
    this.mTransformMode = transformMode;
    if (this.mTransformMode != TransformMode.NONE)
      this.mControllers[this.mTransformMode].enable = true;
  }
  selectTransformSpaceMode(spaceMode) {
    if (this.mTransformSpaceType == spaceMode)
      return;
    this.mTransformSpaceType = spaceMode;
    if (this.mTransformMode != TransformMode.NONE)
      this.mControllers[this.mTransformMode].reset();
  }
  activate() {
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_DOWN, this.onKeyDown, this);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, this.onMouseDown, this, null, 99999);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_MOVE, this.onMouseMove, this, null, 99999);
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_UP, this.onMouseUp, this, null, 99999);
  }
  unactivate() {
    Engine3D.inputSystem.removeEventListener(KeyEvent.KEY_DOWN, this.onKeyDown, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_DOWN, this.onMouseDown, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_MOVE, this.onMouseMove, this);
    Engine3D.inputSystem.removeEventListener(PointerEvent3D.POINTER_UP, this.onMouseUp, this);
  }
  onKeyDown(e) {
    switch (e.keyCode) {
      case KeyCode.Key_R:
        this.selectTransformMode(TransformMode.Scale);
        this.selectTransformSpaceMode(TransformSpaceMode.Local);
        break;
      case KeyCode.Key_E:
        this.selectTransformMode(TransformMode.Rotation);
        this.selectTransformSpaceMode(TransformSpaceMode.Global);
        break;
      case KeyCode.Key_W:
        this.selectTransformMode(TransformMode.Translation);
        this.selectTransformSpaceMode(TransformSpaceMode.Global);
        break;
      case KeyCode.Key_A:
        this.selectTransformSpaceMode(TransformSpaceMode.Local);
        break;
      case KeyCode.Key_S:
        this.selectTransformSpaceMode(TransformSpaceMode.Global);
        break;
    }
  }
  onMouseDown(e) {
    if (this.mTransformMode != TransformMode.NONE)
      this.mControllers[this.mTransformMode].onMouseDown(e);
  }
  onMouseMove(e) {
    if (this.mTransformMode != TransformMode.NONE) {
      this.mControllers[this.mTransformMode].onMouseMove(e);
    }
  }
  onMouseUp(e) {
    if (this.mTransformMode != TransformMode.NONE)
      this.mControllers[this.mTransformMode].onMouseUp(e);
  }
}

export { AnimationCurve, AnimationMonitor, AnimatorEventKeyframe, AttributeAnimCurve, AxisObject, BLUR_CsShader, Bezier2D, Bezier3D, BiMap, BlendMode, BlendShapeFrameData, BloomPost, BoundingBox, BoundingSphere, BoxColliderShape, BoxGeometry, CEvent, CEventDispatcher, Camera3D, CameraControllerBase, CapsuleColliderShape, ColliderComponent, ColliderShape, ColliderShapeType, Color, ColorGradient, ColorLitMaterial, ColorLitShader, ColorPassFragmentOutput, ColorUtil, Combine_cs, ComponentBase, ComponentCollect, ComputeGPUBuffer, ComputeShader, CubicBezierCurve, CubicBezierPath, CubicBezierType, CylinderGeometry, DDGIIrradianceGPUBufferReader, Denoising_cs, DepthCubeTexture, DepthOfFieldPost, DepthOfView_cs, DoubleArray, Engine3D, EntityCollect, ExtrudeGeometry, FASTFLOOR, FirstPersonCameraController, Float16ArrayTexture, Float32ArrayTexture, FlyCameraController, FrameCache, FrustumCulling_cs, GBufferFrame, GBufferPost, GIProbeMaterial, GIProbeMaterialType, GIProbeShader, GIRenderCompleteEvent, GIRenderStartEvent, GLTFMaterial, GPUBufferBase, GPUBufferType, GPUCompareFunction, GPUContext, GPUTextureFormat, GTAOPost, GTAO_cs, GUIPickHelper, GUIQuad, GUISpace, GeometryBase, GeometryUtil, GlassMaterial, GlassShader, GlobalBindGroup, GlobalFog, GlobalFog_shader, GlobalIlluminationComponent, GodRayPost, GodRay_cs, GridObject, Horizontal, IKDTreeUserData, ImageType, IrradianceDataReaderCompleteEvent, KDTreeEntity, KDTreeUUID, KHR_lights_punctual, KHR_materials_ior, KHR_materials_sheen, KHR_materials_specular, KHR_materials_transmission, KHR_materials_variants, KHR_materials_volume, KHR_mesh_quantization, KHR_texture_basisu, KHR_texture_transform, KeyCode, KeyEvent, LDRTextureCube, LUT_glsl, Line, LineClassification, LitMaterial, LoaderEvent, LoaderManager, Material, MaterialUniform, MathUtil, Matrix4, MatrixDO, MemoryDO, MergeRGBACreator, MergeRGBA_cs, MeshColliderShape, MeshRenderer, MinMaxAnimationCurves, MinMaxCurve, MinMaxCurveState, MinMaxPolyCurves, MorePassParser, MorePassShader, MorphTargetBlender, MorphTargetFrame, MorphTargetTransformKey, MouseCode, Navi3DAstar, Navi3DEdge, Navi3DFunnel, Navi3DMaskType, Navi3DMergeVertex, Navi3DMesh, Navi3DPoint, Navi3DPoint2D, Navi3DTriangle, Object3D, Object3DEvent, Object3DTransformTools, Object3DUtil, ObjectAnimClip, OrbitController, OrderMap, Orientation3D, OutLineBlendColor_cs, OutlineCalcOutline_cs, OutlinePass, OutlinePost, OutlinePostManager, Outline_cs, ParticleSystemCurveEvalMode, ParticleSystemRandomnessIds, PassShader, PassType, PavementShader, PickResult, Plane, Plane3D, PlaneClassification, PlaneGeometry, PointClassification, PointLight, PointShadowDebug, PointerEvent3D, Polynomial, PolynomialCurve, Polynomials, PostBase, PrefabStringUtil, Preprocessor, Probe, ProbeEntries, PropertyAnimClip, PropertyAnimTag, PropertyAnimation, PropertyAnimationEvent, PropertyHelp, QuadAABB, QuadRoot, QuadTree, QuadTreeCell, Quaternion, RTDescriptor, RTFrame, RTResourceConfig, RTResourceMap, Ray, RayCastMeshDetail, RenderShaderPass, RendererMask, RendererMaskUtil, RotationControlComponents, SSAO_cs, SSGI2_cs, SSGIPost, SSRPost, SSR_BlendColor_cs, SSR_IS_Kernel, SSR_IS_cs, SSR_RayTrace_cs, ScaleControlComponents, Shader, ShaderLib, SkinnedMeshRenderer2, SkyRenderer, Sky_glsl_fs, Sky_glsl_vs, SolidColorSky, SphereColliderShape, SphereGeometry, StorageGPUBuffer, StorageUtil, StripeGeometry, Struct, StructStorageGPUBuffer, TAACopyTex_cs, TAAPost, TAASharpTex_cs, TAA_cs, TestComputeLoadBuffer, TextAnchor, TextFieldLayout, TextFieldLine, Texture, TextureMipmapCompute, TextureMipmapGenerator, TextureScaleCompute, ThirdPersonCameraController, TileSet, TileSetChild, TileSetChildContent, TileSetChildContentMetaData, TileSetRoot, TilesRenderer, Time, TorusGeometry, TrailGeometry, TransformAxisEnum, TransformControllerBaseComponent, TransformMode, TransformSpaceMode, TranslationControlComponents, TriGeometry, Triangle, UIButton, UIButtonTransition, UIComponentBase, UIEvent, UIImage, UIImageGroup, UIInteractive, UIInteractiveStyle, UIRenderAble, UIShadow, UITextField, UUID, Uint16Texture, UnLitMaterial, UnLitShader, UnLitTexArrayMaterial, UnLitTexArrayShader, UniformGPUBuffer, ValueOp, ValueSpread, Vector2, Vector3, Vector3Ex, Vector3Struct, Vector4, VertexAttribute, VertexAttributeName, VertexAttributeStride, VertexBufferLayout, Vertical, VirtualTexture, WebGPUDescriptorCreator, WrapMode, ZCullingCompute, ZPassShader_cs, buildCurves, calculateCurveRangesValue, calculateMinMax, clamp, cubicPolynomialRoot, cubicPolynomialRootsGeneric, curvesSupportProcedural, dot, doubleIntegrateSegment, downSample, f32, fonts, grad1, grad2, grad3, grad4, i32, integrateSegment, irradianceDataReader, kPI, lerp, mergeFunctions, normal_distribution, outlinePostData, outlinePostManager, perm, post, quadraticPolynomialRootsGeneric, registerMaterial, repeat, setFrameDelay, setTimeDelay, simplex, snoise1, snoise2, snoise3, snoise4, textureCompress, threshold, toHalfFloat, tw, u32, uniform_real_distribution, uniform_real_distribution2, upSample$1 as upSample, webGPUContext };
