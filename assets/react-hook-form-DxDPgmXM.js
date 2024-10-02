import{R as B}from"./react-CEomBadl.js";var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Ze=e=>typeof e=="object";var D=e=>!L(e)&&!Array.isArray(e)&&Ze(e)&&!se(e),gr=e=>D(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,vr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,hr=(e,s)=>e.has(vr(s)),_r=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function M(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(t||D(e)))if(s=t?[]:{},!t&&!_r(e))s=e;else for(const l in e)e.hasOwnProperty(l)&&(s[l]=M(e[l]));else return e;return s}var Ve=e=>Array.isArray(e)?e.filter(Boolean):[],w=e=>e===void 0,d=(e,s,t)=>{if(!s||!D(e))return t;const l=Ve(s.split(/[,[\].]+?/)).reduce((n,u)=>L(n)?n:n[u],e);return w(l)||l===e?w(e[s])?t:e[s]:l},W=e=>typeof e=="boolean",Oe=e=>/^\w*$/.test(e),er=e=>Ve(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let l=-1;const n=Oe(s)?[s]:er(s),u=n.length,g=u-1;for(;++l<u;){const v=n[l];let P=t;if(l!==g){const q=e[v];P=D(q)||Array.isArray(q)?q:isNaN(+n[l+1])?{}:[]}if(v==="__proto__")return;e[v]=P,e=e[v]}return e};const He={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},p={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};B.createContext(null);var br=(e,s,t,l=!0)=>{const n={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(n,u,{get:()=>{const g=u;return s._proxyFormState[g]!==p.all&&(s._proxyFormState[g]=!l||p.all),e[g]}});return n},C=e=>D(e)&&!Object.keys(e).length,Fr=(e,s,t,l)=>{t(e);const{name:n,...u}=e;return C(u)||Object.keys(u).length>=Object.keys(s).length||Object.keys(u).find(g=>s[g]===p.all)},ge=e=>Array.isArray(e)?e:[e];function Vr(e){const s=B.useRef(e);s.current=e,B.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",Ar=(e,s,t,l,n)=>H(e)?(l&&s.watch.add(e),d(t,e,n)):Array.isArray(e)?e.map(u=>(l&&s.watch.add(u),d(t,u))):(l&&(s.watchAll=!0),t),xr=(e,s,t,l,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[l]:n||!0}}:{},$e=e=>({isOnSubmit:!e||e===p.onSubmit,isOnBlur:e===p.onBlur,isOnChange:e===p.onChange,isOnAll:e===p.all,isOnTouch:e===p.onTouched}),je=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const ne=(e,s,t,l)=>{for(const n of t||Object.keys(e)){const u=d(e,n);if(u){const{_f:g,...v}=u;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],n)&&!l)return!0;if(g.ref&&s(g.ref,g.name)&&!l)return!0;if(ne(v,s))break}else if(D(v)&&ne(v,s))break}}};var wr=(e,s,t)=>{const l=ge(d(e,t));return A(l,"root",s[t]),A(e,t,l),e},Le=e=>e.type==="file",z=e=>typeof e=="function",he=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ve=e=>H(e),Ce=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Ye={value:!0,isValid:!0};var rr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!w(e[0].attributes.value)?w(e[0].value)||e[0].value===""?Ye:{value:e[0].value,isValid:!0}:Ye:Ke}return Ke};const ze={isValid:!1,value:null};var tr=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,ze):ze;function Ge(e,s,t="validate"){if(ve(e)||Array.isArray(e)&&e.every(ve)||W(e)&&!e)return{type:t,message:ve(e)?e:"",ref:s}}var te=e=>D(e)&&!_e(e)?e:{value:e,message:""},Je=async(e,s,t,l,n)=>{const{ref:u,refs:g,required:v,maxLength:P,minLength:q,min:x,max:_,pattern:fe,validate:G,name:U,valueAsNumber:Ae,mount:$,disabled:J}=e._f,b=d(s,U);if(!$||J)return{};const j=g?g[0]:u,K=h=>{l&&j.reportValidity&&(j.setCustomValidity(W(h)?"":h||""),j.reportValidity())},m={},ee=Ce(u),ce=oe(u),X=ee||ce,re=(Ae||Le(u))&&w(u.value)&&w(b)||he(u)&&u.value===""||b===""||Array.isArray(b)&&!b.length,N=xr.bind(null,U,t,m),de=(h,F,E,O=Y.maxLength,I=Y.minLength)=>{const R=h?F:E;m[U]={type:h?O:I,message:R,ref:u,...N(h?O:I,R)}};if(n?!Array.isArray(b)||!b.length:v&&(!X&&(re||L(b))||W(b)&&!b||ce&&!rr(g).isValid||ee&&!tr(g).isValid)){const{value:h,message:F}=ve(v)?{value:!!v,message:v}:te(v);if(h&&(m[U]={type:Y.required,message:F,ref:j,...N(Y.required,F)},!t))return K(F),m}if(!re&&(!L(x)||!L(_))){let h,F;const E=te(_),O=te(x);if(!L(b)&&!isNaN(b)){const I=u.valueAsNumber||b&&+b;L(E.value)||(h=I>E.value),L(O.value)||(F=I<O.value)}else{const I=u.valueAsDate||new Date(b),R=ue=>new Date(new Date().toDateString()+" "+ue),ie=u.type=="time",ae=u.type=="week";H(E.value)&&b&&(h=ie?R(b)>R(E.value):ae?b>E.value:I>new Date(E.value)),H(O.value)&&b&&(F=ie?R(b)<R(O.value):ae?b<O.value:I<new Date(O.value))}if((h||F)&&(de(!!h,E.message,O.message,Y.max,Y.min),!t))return K(m[U].message),m}if((P||q)&&!re&&(H(b)||n&&Array.isArray(b))){const h=te(P),F=te(q),E=!L(h.value)&&b.length>+h.value,O=!L(F.value)&&b.length<+F.value;if((E||O)&&(de(E,h.message,F.message),!t))return K(m[U].message),m}if(fe&&!re&&H(b)){const{value:h,message:F}=te(fe);if(_e(h)&&!b.match(h)&&(m[U]={type:Y.pattern,message:F,ref:u,...N(Y.pattern,F)},!t))return K(F),m}if(G){if(z(G)){const h=await G(b,s),F=Ge(h,j);if(F&&(m[U]={...F,...N(Y.validate,F.message)},!t))return K(F.message),m}else if(D(G)){let h={};for(const F in G){if(!C(h)&&!t)break;const E=Ge(await G[F](b,s),j,F);E&&(h={...E,...N(F,E.message)},K(E.message),t&&(m[U]=h))}if(!C(h)&&(m[U]={ref:j,...h},!t))return m}}return K(!0),m};function Dr(e,s){const t=s.slice(0,-1).length;let l=0;for(;l<t;)e=w(e)?l++:e[s[l++]];return e}function mr(e){for(const s in e)if(e.hasOwnProperty(s)&&!w(e[s]))return!1;return!0}function k(e,s){const t=Array.isArray(s)?s:Oe(s)?[s]:er(s),l=t.length===1?e:Dr(e,t),n=t.length-1,u=t[n];return l&&delete l[u],n!==0&&(D(l)&&C(l)||Array.isArray(l)&&mr(l))&&k(e,t.slice(0,-1)),e}var Ee=()=>{let e=[];return{get observers(){return e},next:n=>{for(const u of e)u.next&&u.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(u=>u!==n)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!Ze(e);function Q(e,s){if(be(e)||be(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const t=Object.keys(e),l=Object.keys(s);if(t.length!==l.length)return!1;for(const n of t){const u=e[n];if(!l.includes(n))return!1;if(n!=="ref"){const g=s[n];if(se(u)&&se(g)||D(u)&&D(g)||Array.isArray(u)&&Array.isArray(g)?!Q(u,g):u!==g)return!1}}return!0}var sr=e=>e.type==="select-multiple",Er=e=>Ce(e)||oe(e),ke=e=>he(e)&&e.isConnected,ir=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(D(e)||t)for(const l in e)Array.isArray(e[l])||D(e[l])&&!ir(e[l])?(s[l]=Array.isArray(e[l])?[]:{},Fe(e[l],s[l])):L(e[l])||(s[l]=!0);return s}function ar(e,s,t){const l=Array.isArray(e);if(D(e)||l)for(const n in e)Array.isArray(e[n])||D(e[n])&&!ir(e[n])?w(s)||be(t[n])?t[n]=Array.isArray(e[n])?Fe(e[n],[]):{...Fe(e[n])}:ar(e[n],L(s)?{}:s[n],t[n]):t[n]=!Q(e[n],s[n]);return t}var ye=(e,s)=>ar(e,s,Fe(s)),ur=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:l})=>w(e)?e:s?e===""?NaN:e&&+e:t&&H(e)?new Date(e):l?l(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Le(s)?s.files:Ce(s)?tr(e.refs).value:sr(s)?[...s.selectedOptions].map(({value:t})=>t):oe(s)?rr(e.refs).value:ur(w(s.value)?e.ref.value:s.value,e)}var kr=(e,s,t,l)=>{const n={};for(const u of e){const g=d(s,u);g&&A(n,u,g._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:l}},le=e=>w(e)?e:_e(e)?e.source:D(e)?_e(e.value)?e.value.source:e.value:e;const Qe="AsyncFunction";var Sr=e=>(!e||!e.validate)&&!!(z(e.validate)&&e.validate.constructor.name===Qe||D(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===Qe)),Tr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,t){const l=d(e,t);if(l||Oe(t))return{error:l,name:t};const n=t.split(".");for(;n.length;){const u=n.join("."),g=d(s,u),v=d(e,u);if(g&&!Array.isArray(g)&&t!==u)return{name:t};if(v&&v.type)return{name:u,error:v};n.pop()}return{name:t}}var Or=(e,s,t,l,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?l.isOnBlur:n.isOnBlur)?!e:(t?l.isOnChange:n.isOnChange)?e:!0,Lr=(e,s)=>!Ve(d(e,s)).length&&k(e,s);const Cr={mode:p.onSubmit,reValidateMode:p.onChange,shouldFocusError:!0};function Ur(e={}){let s={...Cr,...e},t={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},n=D(s.defaultValues)||D(s.values)?M(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:M(n),g={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},P,q=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Ee(),array:Ee(),state:Ee()},fe=$e(s.mode),G=$e(s.reValidateMode),U=s.criteriaMode===p.all,Ae=r=>i=>{clearTimeout(q),q=setTimeout(r,i)},$=async r=>{if(x.isValid||r){const i=s.resolver?C((await X()).errors):await N(l,!0);i!==t.isValid&&_.state.next({isValid:i})}},J=(r,i)=>{(x.isValidating||x.validatingFields)&&((r||Array.from(v.mount)).forEach(a=>{a&&(i?A(t.validatingFields,a,i):k(t.validatingFields,a))}),_.state.next({validatingFields:t.validatingFields,isValidating:!C(t.validatingFields)}))},b=(r,i=[],a,c,f=!0,o=!0)=>{if(c&&a){if(g.action=!0,o&&Array.isArray(d(l,r))){const y=a(d(l,r),c.argA,c.argB);f&&A(l,r,y)}if(o&&Array.isArray(d(t.errors,r))){const y=a(d(t.errors,r),c.argA,c.argB);f&&A(t.errors,r,y),Lr(t.errors,r)}if(x.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const y=a(d(t.touchedFields,r),c.argA,c.argB);f&&A(t.touchedFields,r,y)}x.dirtyFields&&(t.dirtyFields=ye(n,u)),_.state.next({name:r,isDirty:h(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(u,r,i)},j=(r,i)=>{A(t.errors,r,i),_.state.next({errors:t.errors})},K=r=>{t.errors=r,_.state.next({errors:t.errors,isValid:!1})},m=(r,i,a,c)=>{const f=d(l,r);if(f){const o=d(u,r,w(a)?d(n,r):a);w(o)||c&&c.defaultChecked||i?A(u,r,i?o:Se(f._f)):O(r,o),g.mount&&$()}},ee=(r,i,a,c,f)=>{let o=!1,y=!1;const V={name:r},S=!!(d(l,r)&&d(l,r)._f&&d(l,r)._f.disabled);if(!a||c){x.isDirty&&(y=t.isDirty,t.isDirty=V.isDirty=h(),o=y!==V.isDirty);const T=S||Q(d(n,r),i);y=!!(!S&&d(t.dirtyFields,r)),T||S?k(t.dirtyFields,r):A(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||x.dirtyFields&&y!==!T}if(a){const T=d(t.touchedFields,r);T||(A(t.touchedFields,r,a),V.touchedFields=t.touchedFields,o=o||x.touchedFields&&T!==a)}return o&&f&&_.state.next(V),o?V:{}},ce=(r,i,a,c)=>{const f=d(t.errors,r),o=x.isValid&&W(i)&&t.isValid!==i;if(e.delayError&&a?(P=Ae(()=>j(r,a)),P(e.delayError)):(clearTimeout(q),P=null,a?A(t.errors,r,a):k(t.errors,r)),(a?!Q(f,a):f)||!C(c)||o){const y={...c,...o&&W(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...y},_.state.next(y)}},X=async r=>{J(r,!0);const i=await s.resolver(u,s.context,kr(r||v.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return J(r),i},re=async r=>{const{errors:i}=await X(r);if(r)for(const a of r){const c=d(i,a);c?A(t.errors,a,c):k(t.errors,a)}else t.errors=i;return i},N=async(r,i,a={valid:!0})=>{for(const c in r){const f=r[c];if(f){const{_f:o,...y}=f;if(o){const V=v.array.has(o.name),S=f._f&&Sr(f._f);S&&x.validatingFields&&J([c],!0);const T=await Je(f,u,U,s.shouldUseNativeValidation&&!i,V);if(S&&x.validatingFields&&J([c]),T[o.name]&&(a.valid=!1,i))break;!i&&(d(T,o.name)?V?wr(t.errors,T,o.name):A(t.errors,o.name,T[o.name]):k(t.errors,o.name))}!C(y)&&await N(y,i,a)}}return a.valid},de=()=>{for(const r of v.unMount){const i=d(l,r);i&&(i._f.refs?i._f.refs.every(a=>!ke(a)):!ke(i._f.ref))&&xe(r)}v.unMount=new Set},h=(r,i)=>(r&&i&&A(u,r,i),!Q(Ue(),n)),F=(r,i,a)=>Ar(r,v,{...g.mount?u:w(i)?n:H(r)?{[r]:i}:i},a,i),E=r=>Ve(d(g.mount?u:n,r,e.shouldUnregister?d(n,r,[]):[])),O=(r,i,a={})=>{const c=d(l,r);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(u,r,ur(i,o)),f=he(o.ref)&&L(i)?"":i,sr(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:r,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ee(r,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ue(r)},I=(r,i,a)=>{for(const c in i){const f=i[c],o=`${r}.${c}`,y=d(l,o);(v.array.has(r)||!be(f)||y&&!y._f)&&!se(f)?I(o,f,a):O(o,f,a)}},R=(r,i,a={})=>{const c=d(l,r),f=v.array.has(r),o=M(i);A(u,r,o),f?(_.array.next({name:r,values:{...u}}),(x.isDirty||x.dirtyFields)&&a.shouldDirty&&_.state.next({name:r,dirtyFields:ye(n,u),isDirty:h(r,o)})):c&&!c._f&&!L(o)?I(r,o,a):O(r,o,a),je(r,v)&&_.state.next({...t}),_.values.next({name:g.mount?r:void 0,values:{...u}})},ie=async r=>{g.mount=!0;const i=r.target;let a=i.name,c=!0;const f=d(l,a),o=()=>i.type?Se(f._f):gr(r),y=V=>{c=Number.isNaN(V)||Q(V,d(u,a,V))};if(f){let V,S;const T=o(),Z=r.type===He.BLUR||r.type===He.FOCUS_OUT,cr=!Tr(f._f)&&!s.resolver&&!d(t.errors,a)&&!f._f.deps||Or(Z,d(t.touchedFields,a),t.isSubmitted,G,fe),De=je(a,v,Z);A(u,a,T),Z?(f._f.onBlur&&f._f.onBlur(r),P&&P(0)):f._f.onChange&&f._f.onChange(r);const me=ee(a,T,Z,!1),dr=!C(me)||De;if(!Z&&_.values.next({name:a,type:r.type,values:{...u}}),cr)return x.isValid&&(e.mode==="onBlur"?Z&&$():$()),dr&&_.state.next({name:a,...De?{}:me});if(!Z&&De&&_.state.next({...t}),s.resolver){const{errors:qe}=await X([a]);if(y(T),c){const yr=Xe(t.errors,l,a),We=Xe(qe,l,yr.name||a);V=We.error,a=We.name,S=C(qe)}}else J([a],!0),V=(await Je(f,u,U,s.shouldUseNativeValidation))[a],J([a]),y(T),c&&(V?S=!1:x.isValid&&(S=await N(l,!0)));c&&(f._f.deps&&ue(f._f.deps),ce(a,S,V,me))}},ae=(r,i)=>{if(d(t.errors,i)&&r.focus)return r.focus(),1},ue=async(r,i={})=>{let a,c;const f=ge(r);if(s.resolver){const o=await re(w(r)?r:f);a=C(o),c=r?!f.some(y=>d(o,y)):a}else r?(c=(await Promise.all(f.map(async o=>{const y=d(l,o);return await N(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!t.isValid)&&$()):c=a=await N(l);return _.state.next({...!H(r)||x.isValid&&a!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:a}:{},errors:t.errors}),i.shouldFocus&&!c&&ne(l,ae,r?f:v.mount),c},Ue=r=>{const i={...g.mount?u:n};return w(r)?i:H(r)?d(i,r):r.map(a=>d(i,a))},Ne=(r,i)=>({invalid:!!d((i||t).errors,r),isDirty:!!d((i||t).dirtyFields,r),error:d((i||t).errors,r),isValidating:!!d(t.validatingFields,r),isTouched:!!d((i||t).touchedFields,r)}),lr=r=>{r&&ge(r).forEach(i=>k(t.errors,i)),_.state.next({errors:r?t.errors:{}})},Re=(r,i,a)=>{const c=(d(l,r,{_f:{}})._f||{}).ref,f=d(t.errors,r)||{},{ref:o,message:y,type:V,...S}=f;A(t.errors,r,{...S,...i,ref:c}),_.state.next({name:r,errors:t.errors,isValid:!1}),a&&a.shouldFocus&&c&&c.focus&&c.focus()},nr=(r,i)=>z(r)?_.values.subscribe({next:a=>r(F(void 0,i),a)}):F(r,i,!0),xe=(r,i={})=>{for(const a of r?ge(r):v.mount)v.mount.delete(a),v.array.delete(a),i.keepValue||(k(l,a),k(u,a)),!i.keepError&&k(t.errors,a),!i.keepDirty&&k(t.dirtyFields,a),!i.keepTouched&&k(t.touchedFields,a),!i.keepIsValidating&&k(t.validatingFields,a),!s.shouldUnregister&&!i.keepDefaultValue&&k(n,a);_.values.next({values:{...u}}),_.state.next({...t,...i.keepDirty?{isDirty:h()}:{}}),!i.keepIsValid&&$()},Me=({disabled:r,name:i,field:a,fields:c,value:f})=>{if(W(r)&&g.mount||r){const o=r?void 0:w(f)?Se(a?a._f:d(c,i)._f):f;A(u,i,o),ee(i,o,!1,!1,!0)}},we=(r,i={})=>{let a=d(l,r);const c=W(i.disabled)||W(e.disabled);return A(l,r,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:r}},name:r,mount:!0,...i}}),v.mount.add(r),a?Me({field:a,disabled:W(i.disabled)?i.disabled:e.disabled,name:r,value:i.value}):m(r,!0,i.value),{...c?{disabled:i.disabled||e.disabled}:{},...s.progressive?{required:!!i.required,min:le(i.min),max:le(i.max),minLength:le(i.minLength),maxLength:le(i.maxLength),pattern:le(i.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){we(r,i),a=d(l,r);const o=w(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=Er(o),V=a._f.refs||[];if(y?V.find(S=>S===o):o===a._f.ref)return;A(l,r,{_f:{...a._f,...y?{refs:[...V.filter(ke),o,...Array.isArray(d(n,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),m(r,!1,void 0,o)}else a=d(l,r,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(hr(v.array,r)&&g.action)&&v.unMount.add(r)}}},Be=()=>s.shouldFocusError&&ne(l,ae,v.mount),or=r=>{W(r)&&(_.state.next({disabled:r}),ne(l,(i,a)=>{const c=d(l,a);c&&(i.disabled=c._f.disabled||r,Array.isArray(c._f.refs)&&c._f.refs.forEach(f=>{f.disabled=c._f.disabled||r}))},0,!1))},Pe=(r,i)=>async a=>{let c;a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let f=M(u);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();t.errors=o,f=y}else await N(l);if(k(t.errors,"root"),C(t.errors)){_.state.next({errors:{}});try{await r(f,a)}catch(o){c=o}}else i&&await i({...t.errors},a),Be(),setTimeout(Be);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:C(t.errors)&&!c,submitCount:t.submitCount+1,errors:t.errors}),c)throw c},fr=(r,i={})=>{d(l,r)&&(w(i.defaultValue)?R(r,M(d(n,r))):(R(r,i.defaultValue),A(n,r,M(i.defaultValue))),i.keepTouched||k(t.touchedFields,r),i.keepDirty||(k(t.dirtyFields,r),t.isDirty=i.defaultValue?h(r,M(d(n,r))):h()),i.keepError||(k(t.errors,r),x.isValid&&$()),_.state.next({...t}))},Ie=(r,i={})=>{const a=r?M(r):n,c=M(a),f=C(r),o=f?n:c;if(i.keepDefaultValues||(n=a),!i.keepValues){if(i.keepDirtyValues)for(const y of v.mount)d(t.dirtyFields,y)?A(o,y,d(u,y)):R(y,d(o,y));else{if(Te&&w(r))for(const y of v.mount){const V=d(l,y);if(V&&V._f){const S=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(he(S)){const T=S.closest("form");if(T){T.reset();break}}}}l={}}u=e.shouldUnregister?i.keepDefaultValues?M(n):{}:M(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}v={mount:i.keepDirtyValues?v.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!x.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:f?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!Q(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:f?{}:i.keepDirtyValues?i.keepDefaultValues&&u?ye(n,u):t.dirtyFields:i.keepDefaultValues&&r?ye(n,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},pe=(r,i)=>Ie(z(r)?r(u):r,i);return{control:{register:we,unregister:xe,getFieldState:Ne,handleSubmit:Pe,setError:Re,_executeSchema:X,_getWatch:F,_getDirty:h,_updateValid:$,_removeUnmounted:de,_updateFieldArray:b,_updateDisabledField:Me,_getFieldArray:E,_reset:Ie,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(r=>{pe(r,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:or,_subjects:_,_proxyFormState:x,_setErrors:K,get _fields(){return l},get _formValues(){return u},get _state(){return g},set _state(r){g=r},get _defaultValues(){return n},get _names(){return v},set _names(r){v=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ue,register:we,handleSubmit:Pe,watch:nr,setValue:R,getValues:Ue,reset:pe,resetField:fr,clearErrors:lr,unregister:xe,setError:Re,setFocus:(r,i={})=>{const a=d(l,r),c=a&&a._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ne}}function Pr(e={}){const s=B.useRef(),t=B.useRef(),[l,n]=B.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Ur(e),formState:l});const u=s.current.control;return u._options=e,Vr({subject:u._subjects.state,next:g=>{Fr(g,u._proxyFormState,u._updateFormState)&&n({...u._formState})}}),B.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),B.useEffect(()=>{if(u._proxyFormState.isDirty){const g=u._getDirty();g!==l.isDirty&&u._subjects.state.next({isDirty:g})}},[u,l.isDirty]),B.useEffect(()=>{e.values&&!Q(e.values,t.current)?(u._reset(e.values,u._options.resetOptions),t.current=e.values,n(g=>({...g}))):u._resetDefaultValues()},[e.values,u]),B.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),B.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),B.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),s.current.formState=br(l,u),s.current}export{xr as a,d as g,A as s,Pr as u};
