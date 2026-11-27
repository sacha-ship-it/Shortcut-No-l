"use strict";var j=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var $e=j((Tn,De)=>{"use strict";var Et=require("node:path");function V(e,n,s,t,r){let i=e[n],a=i===void 0?s:Number(i);if(!Number.isInteger(a)||a<t||a>r)throw Error(`${n} doit être \
un entier entre ${t} et ${r}.`);return a}function vt(e=process.env){let n={token:e.DISCORD_TOKEN,guild:e.DISCORD_GUILD_ID,staffRole:e.STAFF_ROLE_ID||null,channel:e.GAMES_CHANNEL_ID||
null,quest:e.QUEST_CHANNEL_ID||"1430581954167967864",data:Et.resolve(e.DATA_DIR||"./data"),attempts:V(e,"MAX_RANKED_ATTEMPTS",3,1,10),year:V(e,"EVENT_YEAR",2026,2026,2100),openHour:V(
e,"OPEN_HOUR_PARIS",12,0,22),closeHour:V(e,"CLOSE_HOUR_PARIS",23,1,23),auto:e.AUTO_PUBLISH==="true",practice:e.ALLOW_PRACTICE!=="false",maxActive:V(e,"MAX_ACTIVE_SESSIONS",500,10,5e3)};
if(!n.token||!/^\d{17,20}$/.test(n.guild||""))throw Error("DISCORD_TOKEN et DISCORD_GUILD_ID sont requis.");for(let s of["staffRole","channel","quest"])if(n[s]&&!/^\d{17,20}$/.test(
n[s]))throw Error(`ID incorrect : ${s}`);if(n.closeHour<=n.openHour)throw Error("La clôture doit suivre l’ouverture.");if(e.RAILWAY_ENVIRONMENT_ID&&!e.RAILWAY_VOLUME_MOUNT_PATH&&
!e.ALLOW_EPHEMERAL_STORAGE)throw Error("Ajoute un volume Railway sur /data et DATA_DIR=/data pour conserver les classements.");return n}function bt(e=Date.now()){return Object.fromEntries(
new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(e).filter(n=>n.
type!=="literal").map(n=>[n.type,n.value]))}function Tt(e,n,s){return Date.UTC(e,11,n,s-1,0,0)}De.exports={config:vt,paris:bt,parisEpoch:Tt}});var Me=j((Sn,St)=>{St.exports=[{day:1,title:"Les cadeaux jumeaux #1",description:"Un memory caché dans des cadeaux : retourne deux cartes à la fois et retrouve les paires d’objets \
gaming. Les cartes différentes se referment, à toi de mémoriser leur place ! Envoie la capture du résultat dans la quête Memory pour recevoir tes Shortcoins."},{day:2,title:"U\
n sapin en blocs",description:"Construis un sapin dans Minecraft avec les blocs de ton choix. Partage une capture de ta création dans la quête pour gagner des Shortcoins. Le sapin \
qui reçoit le plus de votes remporte un bonus de Shortcoins."},{day:3,title:"Le champ de cadeaux #1",description:"Un démineur de Noël : certains cadeaux cachent un piège. Les chif\
fres indiquent le nombre de pièges autour de chaque case. Ouvre les bonnes cases et place tes drapeaux pour sécuriser la grille. Capture du résultat dans la quête Démineur = Shortc\
oins après validation."},{day:4,title:"Ton personnage passe en hiver",description:"Compose un look de Noël pour ton personnage ou ton véhicule avec ce que tu possèdes déjà : coule\
urs, tenue, accessoires… Envoie ta capture dans la quête pour gagner des Shortcoins. Le look le plus voté gagne un bonus."},{day:5,title:"Le traîneau en panne #1",description:"\
Terry a perdu son traîneau ! Sur un terrain enneigé, utilise les flèches pour le guider entre les obstacles jusqu’à l’arrivée. Chaque déplacement compte : trouve le bon chemin avan\
t d’épuiser tes coups. Envoie la capture du résultat dans la quête pour gagner des Shortcoins."},{day:6,title:"La carte postale des neiges",description:"Pars à la recherche du\
 plus beau paysage d’hiver dans un jeu : montagnes enneigées, village illuminé, forêt gelée… Partage ta capture avec le nom du jeu pour gagner des Shortcoins. La carte postale la p\
lus votée reçoit un bonus."},{day:7,title:"L’inventaire du Père Noël #1",description:"Le Père Noël mélange ses affaires ! Observe son inventaire quelques secondes, puis retro\
uve les objets qui ont disparu. Plusieurs manches te mettent à l’épreuve avec des objets gaming. Envoie la capture de ton résultat dans la quête pour gagner des Shortcoins."},
{day:8,title:"Un but sous le sapin",description:"Dans Rocket League, prépare une voiture aux couleurs de Noël et marque ton plus beau but en entraînement libre. Partage une capture\
 du replay pour gagner des Shortcoins. La publication la plus votée reçoit un bonus. Aucun achat nécessaire."},{day:9,title:"Les cadeaux jumeaux #2",description:"Les cadeaux cac\
hent de nouvelles paires gaming ! Retourne deux cartes par tour et retiens leurs emplacements pour compléter la grille de memory. Envoie la capture de ton résultat dans la quête Me\
mory pour recevoir tes Shortcoins."},{day:10,title:"Le chalet des gamers",description:"Construis un chalet ou un refuge d’hiver dans Minecraft, Fortnite Créatif ou un autre jeu. Dé\
core-le comme tu veux et partage une capture dans la quête pour gagner des Shortcoins. Le refuge le plus voté remporte un bonus."},{day:11,title:"La livraison express #1",description:"\
Aide Terry à livrer ses cadeaux ! Le bot montre une suite de flèches, puis la masque. Reproduis le trajet de mémoire avec les boutons ; la séquence s’allonge à chaque manche. Envoi\
e la capture du résultat dans la quête pour gagner des Shortcoins."},{day:12,title:"Le cadeau fabriqué maison",description:"Fabrique ou personnalise un cadeau dans le jeu de ton\
 choix et dédie-le à un membre du serveur. Partage sa capture et ta dédicace dans la quête pour gagner des Shortcoins. La publication la plus votée reçoit un bonus."},{day:13,
title:"Le champ de cadeaux #2",description:"De nouveaux cadeaux piégés t’attendent dans le démineur. Repère les cases sûres grâce aux chiffres et utilise tes drapeaux pour signaler\
 les pièges. Envoie la capture du résultat dans la quête Démineur pour gagner des Shortcoins."},{day:14,title:"Noël en duo",description:"Lance une partie avec un autre membre \
du serveur et immortalisez un moment de votre duo. Envoie la capture en précisant vos pseudos et le jeu pour gagner des Shortcoins. La publication la plus votée remporte un bonus."},
{day:15,title:"Le coffre gelé #1",description:"Le coffre de Noël est bloqué par un code de symboles. Utilise les indices du bot pour trouver leur ordre : un cadeau avant une étoil\
e, un flocon après une cloche… Confirme ta combinaison, puis envoie la capture du résultat dans la quête pour gagner des Shortcoins."},{day:16,title:"Le sapin des inventaires",
description:"Crée un sapin avec des objets rouges, verts et dorés dans ton inventaire ou dans un espace de décoration d’un jeu. Partage une capture pour gagner des Shortcoins. La c\
omposition qui reçoit le plus de votes remporte un bonus."},{day:17,title:"Le traîneau en panne #2",description:"Le traîneau est encore coincé ! Guide Terry avec les flèches sur \
un nouveau labyrinthe enneigé. Contourne les obstacles et atteins le cadeau avec les déplacements disponibles. Envoie la capture de ton résultat dans la quête pour gagner des Short\
coins."},{day:18,title:"La pause au coin du feu",description:"Trouve ou aménage un coin chaleureux dans ton jeu : feu de camp, cheminée, petit refuge… Partage une capture de ta pau\
se hivernale dans la quête pour gagner des Shortcoins. La publication la plus votée gagne un bonus."},{day:19,title:"L’inventaire du Père Noël #2",description:"Un nouvel inve\
ntaire à retenir, avec davantage d’objets et de nouvelles disparitions ! Observe, mémorise et retrouve les éléments manquants avant la fin de chaque manche. Envoie la capture du ré\
sultat dans la quête pour recevoir tes Shortcoins."},{day:20,title:"Le bonhomme de neige",description:"Construis un bonhomme de neige dans un jeu de construction ou de décoration.\
 Classique, géant ou complètement décalé : à toi de choisir ! Envoie une capture dans la quête pour gagner des Shortcoins. Le plus voté reçoit un bonus."},{day:21,title:"La\
 livraison express #2",description:"Dernière tournée de cadeaux ! Mémorise les directions affichées par le bot, puis reproduis-les dans le bon ordre. Jusqu’où peux-tu aller quand l\
e trajet s’allonge ? Envoie la capture de ton résultat dans la quête pour gagner des Shortcoins."},{day:22,title:"La photo d’équipe de Noël",description:"Réunis d’autres me\
mbres dans un jeu pour une photo d’équipe de Noël : tenues, décor, mise en scène… Partage la capture dans la quête pour gagner des Shortcoins. La publication la plus votée reçoit u\
n bonus."},{day:23,title:"Le coffre gelé #2",description:"Un dernier coffre attend sa combinaison. Croise les indices pour remettre les symboles de Noël dans le bon ordre et décou\
vrir ce qu’il cache. Envoie la capture de ton résultat dans la quête Coffre gelé pour gagner des Shortcoins."},{day:24,title:"La dernière case de Terry",description:"Choisis \
ta meilleure capture réalisée pendant le calendrier et accompagne-la d’un message de fêtes pour la communauté. Publie-la dans la dernière quête pour gagner des Shortcoins. Le coup \
de cœur des membres, choisi par les votes, reçoit un bonus."}]});var se=j((Rn,Oe)=>{"use strict";var Rt=Me(),xe={1:"memory",3:"mines",5:"maze",7:"inventory",9:"memory",11:"delivery",13:"mines",15:"vault",17:"maze",19:"inventory",21:"delivery",23:"\
vault"},wt={memory:"Les cadeaux jumeaux",mines:"Le champ de cadeaux",maze:"Le traîneau en panne",inventory:"L’inventaire du Père Noël",delivery:"La livraison express",vault:"L\
e coffre gelé"},Le=Rt.map(e=>({...e,type:xe[e.day]||"manual",kind:xe[e.day]?"bot":"manual",date:`2026-12-${String(e.day).padStart(2,"0")}`}));Oe.exports={days:Le,labels:wt,day:e=>Le.
find(n=>n.day===Number(e))}});var re=j((wn,qe)=>{"use strict";qe.exports={id:"shortcut",name:"SHORTCUT",lang:"fr",navy:"#061f32",panel:"#10394d",accent:"#00d3dc",gold:"#ffd278",white:"#f0fcff",muted:"#9cbecb",title:"\
ShortcutTitle",body:"ShortcutBody",mascot:"terry-noel.jpeg"}});var Q=j((Nn,Ue)=>{"use strict";var{createHash:Nt}=require("node:crypto"),At=re(),z=At.lang==="en",Ct=z?["Coin","Chart","Clock","Target","Dollar","Journal","Screen","Bell","Shield",
"Key","Snowflake","Headphones"]:["Manette","Casque","Clavier","Souris","Console","Écran","Micro","Joystick","Cloche","Étoile","Flocon","Bonnet"],It=z?["Gift","Star","Snowflake","\
Bell"]:["Cadeau","Étoile","Flocon","Cloche"],K=["up","right","down","left"],ie={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]};function oe(e){let n=Nt("sha256").update(String(e)).digest().
readUInt32LE(0)||1;return()=>(n^=n<<13,n^=n>>>17,n^=n<<5,(n>>>0)/4294967296)}function O(e,n){e=[...e];for(let s=e.length-1;s>0;s--){let t=Math.floor(n()*(s+1));[e[s],e[t]]=[e[t],e[s]]}
return e}function ae(e,n){let s=[];for(let t=-1;t<=1;t++)for(let r=-1;r<=1;r++){let i=e%n+r,a=Math.floor(e/n)+t;(r||t)&&i>=0&&i<n&&a>=0&&a<n&&s.push(a*n+i)}return s}function Pe(e,n,s=n+
1,t=n*n-n-2){let r=new Set(e),i=[[s]],a=new Set([s]);for(let o=0;o<i.length;o++){let l=i[o],p=l.at(-1);if(p===t)return l;for(let[f,E]of Object.values(ie)){let R=p%n+f,S=Math.floor(
p/n)+E,C=S*n+R;R>=0&&R<n&&S>=0&&S<n&&!r.has(C)&&!a.has(C)&&(a.add(C),i.push([...l,C]))}}return null}function Dt(e,n){let s=e===1?11:e===23?15:13,t=e===1?30:e===23?50:40,r=null;for(let i=0;i<
100;i++){let a=new Set([s+1]),o=[s+1];for(;o.length;){let f=o.at(-1),E=f%s,R=Math.floor(f/s),S=O(Object.values(ie),n).map(([U,P])=>[E+U*2,R+P*2,U,P]).filter(([U,P])=>U>0&&U<s-1&&P>
0&&P<s-1&&!a.has(P*s+U));if(!S.length){o.pop();continue}let[C,q,Y,ne]=S[0];a.add((R+ne)*s+E+Y),a.add(q*s+C),o.push(q*s+C)}let l=Array.from({length:s*s},(f,E)=>E).filter(f=>!a.has(f)),
p=Pe(l,s);if((!r||p.length>r.path.length)&&(r={walls:l,path:p}),p.length-1>=t)break}return{size:s,walls:r.walls,position:s+1,goal:s*s-s-2,optimal:r.path.length-1,budget:r.path.length-
1+(e===23?6:e===15?8:e===1?12:10),trail:[s+1]}}function ye(e){return e.length?e.flatMap((n,s)=>ye(e.filter((t,r)=>r!==s)).map(t=>[n,...t])):[[]]}function $t(e){let n=O([0,1,2,3],e),
s=ye([0,1,2,3]),t=[],r=[];for(let i=0;i<4;i++)for(let a=i+1;a<4;a++)r.push({a:n[i],b:n[a],adj:a===i+1});for(let i of O(r,e)){let a=s.filter(o=>i.adj?o.indexOf(i.b)===o.indexOf(i.a)+
1:o.indexOf(i.a)<o.indexOf(i.b));if(a.length<s.length&&(t.push(i),s=a),s.length===1)break}return{answer:n,clues:t}}function Mt(e,n,s=Date.now(),t=!1){let r=oe(n),i={type:e,phase:"p\
laying",started:s,expires:s+720*1e3,version:0,moves:0,score:0,won:!1,hard:t};if(e==="memory")Object.assign(i,{cards:O([0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7],r),found:[],flipped:[],pairs:0,
turns:0});else if(e==="mines")Object.assign(i,{seed:n,bombs:[],revealed:[],flags:[],mode:"open",placed:!1});else if(e==="maze"){let a=Dt(t?23:1,r);Object.assign(i,{...a})}else if(e===
"inventory")Object.assign(i,{seed:n,round:1,total:5,correct:0,stage:"show",ready:s+6e3,history:[],...je(n,1,t)});else if(e==="delivery")Object.assign(i,{sequence:O(K,r).slice(0,3).
concat(Array.from({length:7},()=>K[Math.floor(r()*4)])),round:1,progress:0,stage:"show",ready:s+2300,completed:0,entered:[]});else if(e==="vault")Object.assign(i,{...$t(r),guess:[],
tries:0,maxTries:5,history:[]});else if(e==="chart")Object.assign(i,qt(r,s,t));else if(e==="desk")Object.assign(i,Pt(r,s,t));else if(e==="sequence")Object.assign(i,{sequence:Array.
from({length:10},()=>r()<.5?"red":"green"),round:1,progress:0,stage:"show",ready:s+3200,completed:0,entered:[]});else throw A(z?"Unknown game.":"Jeu inconnu.");return i}function je(e,n,s=!1){
let t=oe(`${e}:${n}`),r=O(Array.from({length:12},(a,o)=>o),t).slice(0,5+(s||n>2?1:0)),i=r[Math.floor(t()*r.length)];return{shown:r,missing:i,remaining:r.filter(a=>a!==i),options:O(
[i,...O(Array.from({length:12},(a,o)=>o).filter(a=>!r.includes(a)),t).slice(0,3)],t)}}function D(e,n,s,t){return e.phase="done",e.won=n,e.score=Math.max(0,Math.min(1e3,Math.round(s))),
e.finished=t,e.version++,e}function ke(e,n=Date.now()){return e.phase!=="playing"?e:n>=e.expires?(e.phase="expired",e.finished=n,e.version++,e):(e.type==="memory"&&e.hideAt&&n>=e.hideAt&&
(e.flipped=[],delete e.hideAt,e.version++),["inventory","delivery","chart","desk","sequence"].includes(e.type)&&e.stage==="show"&&n>=e.ready&&(e.stage="answer",e.version++),e)}function xt(e,n,s=Date.
now()){let t=structuredClone(e);if(ke(t,s),t.phase!=="playing")return t;if(n==="giveup")return D(t,!1,Lt(t),s);if(t.type==="memory"){let r=Number(n);if(t.hideAt||!Number.isInteger(
r)||r<0||r>15||t.found.includes(r)||t.flipped.includes(r))throw A("Choisis une carte encore cachée.");if(t.flipped.push(r),t.flipped.length===2)if(t.turns++,t.cards[t.flipped[0]]===
t.cards[t.flipped[1]]){if(t.found.push(...t.flipped),t.flipped=[],t.pairs++,t.pairs===8)return D(t,!0,Math.max(500,1e3-20*(t.turns-8)),s)}else t.hideAt=s+1600}else if(t.type==="min\
es"){if(n==="mode")return t.mode=t.mode==="open"?"flag":"open",t.version++,t;let r=Number(n);if(!Number.isInteger(r)||r<0||r>15||t.revealed.includes(r))throw A("Choisis une case fe\
rmée.");if(t.mode==="flag")if(t.flags.includes(r))t.flags=t.flags.filter(i=>i!==r);else{if(t.flags.length>=3)throw A("Tu disposes de trois drapeaux.");t.flags.push(r)}else{if(t.flags.
includes(r))throw A("Retire le drapeau avant d’ouvrir cette case.");if(!t.placed){let a=new Set([r,...ae(r,4)]),o=Array.from({length:16},(l,p)=>p).filter(l=>!a.has(l));t.bombs=O(
o,oe(`${t.seed}:first:${r}`)).slice(0,3),t.placed=!0}if(t.moves++,t.bombs.includes(r))return D(t,!1,Math.min(700,t.revealed.length/13*700),s);let i=[r];for(;i.length;){let a=i.shift();
t.revealed.includes(a)||t.flags.includes(a)||t.bombs.includes(a)||(t.revealed.push(a),ae(a,4).some(o=>t.bombs.includes(o))||i.push(...ae(a,4).filter(o=>!t.revealed.includes(o))))}if(t.
revealed.length===13)return D(t,!0,1e3,s)}}else if(t.type==="maze"){if(!K.includes(n))throw A("Direction inconnue.");let[r,i]=ie[n],a=t.position%t.size+r,o=Math.floor(t.position/t.
size)+i,l=o*t.size+a;if(a<0||a>=t.size||o<0||o>=t.size||t.walls.includes(l))throw A("Un obstacle bloque ce passage.");if(t.position=l,t.trail.push(l),t.moves++,l===t.goal)return D(
t,!0,Math.max(0,1e3-25*(t.moves-t.optimal)),s);if(t.moves>=t.budget)return D(t,!1,0,s)}else if(t.type==="inventory"){if(t.stage!=="answer")throw A("Observe les objets, la réponse s\
’ouvre dans quelques secondes.");let r=Number(n);if(!t.options.includes(r))throw A("Choix invalide.");if(t.history.push({answer:r,expected:t.missing,ok:r===t.missing,shown:[...t.
shown]}),r===t.missing&&t.correct++,t.round===t.total)return D(t,t.correct===t.total,t.correct/5*1e3,s);t.round++,Object.assign(t,je(t.seed,t.round,t.hard)),t.stage="show",t.ready=
s+6e3}else if(t.type==="delivery"){if(t.stage!=="answer")throw A("Mémorise les flèches avant de jouer.");if(!K.includes(n))throw A("Direction inconnue.");if(t.entered.push(n),n!==
t.sequence[t.progress])return D(t,!1,t.completed/8*1e3,s);if(t.progress++,t.progress===t.round+2){if(t.completed=t.round,t.round===8)return D(t,!0,1e3,s);t.round++,t.progress=0,t.entered=
[],t.stage="show",t.ready=s+(t.round+2)*650+500}}else if(t.type==="vault")if(n==="clear")t.guess=[];else if(n==="submit"){if(t.guess.length!==4)throw A("Place les quatre symboles a\
vant de confirmer.");if(t.tries++,t.history.push({guess:[...t.guess],correct:t.guess.filter((r,i)=>r===t.answer[i]).length}),t.guess.every((r,i)=>r===t.answer[i]))return D(t,!0,1e3-
100*(t.tries-1),s);if(t.feedback=t.guess.filter((r,i)=>r===t.answer[i]).length,t.guess=[],t.tries>=t.maxTries)return D(t,!1,0,s)}else{let r=Number(n);if(!Number.isInteger(r)||r<0||
r>3||t.guess.includes(r)||t.guess.length===4)throw A("Choisis un symbole encore disponible.");t.guess.push(r)}if(t.type==="chart"){if(t.stage!=="answer")throw A("Wait for the chart\
 to hide its levels.");let r=Number(n);if(!Number.isInteger(r)||r<0||r>=t.options[t.answers.length].length)throw A("Choose an available price.");if(t.answers.push(t.options[t.answers.
length][r]),t.answers.length===3)return D(t,t.answers.every((i,a)=>i===t.levels[a]),t.answers.filter((i,a)=>i===t.levels[a]).length/3*1e3,s)}if(t.type==="desk"){if(t.stage!=="answe\
r")throw A("Memorize the desk first.");let r=Number(n);if(!Number.isInteger(r)||r<0||r>5||t.answers.includes(r))throw A("Choose a different item.");if(t.answers.push(r),t.answers.length===
2)return D(t,t.answers.every(i=>t.changed.includes(i)),t.answers.filter(i=>t.changed.includes(i)).length*500,s)}if(t.type==="sequence"){if(t.stage!=="answer")throw A("Memorize the \
candles first.");if(!["red","green"].includes(n))throw A("Choose red or green.");if(t.entered.push(n),n!==t.sequence[t.progress])return D(t,!1,t.completed/8*1e3,s);if(t.progress++,
t.progress===t.round+2){if(t.completed=t.round,t.round===8)return D(t,!0,1e3,s);t.round++,t.progress=0,t.entered=[],t.stage="show",t.ready=s+1500+(t.round+2)*650}}return t.version++,
t}function Lt(e){return e.type==="memory"?e.pairs/8*400:e.type==="inventory"?e.correct/5*1e3:["delivery","sequence"].includes(e.type)?e.completed/8*1e3:e.type==="chart"?e.answers.filter(
(n,s)=>n===e.levels[s]).length/3*1e3:e.type==="desk"?e.answers.filter(n=>e.changed.includes(n)).length*500:e.type==="mines"?e.revealed.length/13*700:0}function Ot(e){return z?{memory:"\
Find the eight matching pairs. Fewer turns earn more points.",maze:"Reach the closing bell through the maze. Your moves are limited.",vault:"Use the clues to order the four symbols\
. Five attempts maximum.",chart:"Study the simulated chart for ten seconds, then identify the three hidden price levels.",desk:"Study the desk for ten seconds, then select the two \
items that changed.",sequence:"Memorize and repeat the candles. The sequence grows from three to ten candles."}[e]:{memory:"Retourne deux cadeaux et retrouve les 8 paires. Moins de\
 tours = plus de points.",mines:"Ouvre les 13 cadeaux sûrs. Trois cachent un piège. Les chiffres indiquent les pièges voisins ; change de mode pour poser un drapeau. Le premier cli\
c est sûr.",maze:"Guide Terry jusqu’au cadeau avec les flèches. Les obstacles sont infranchissables. Le chemin le plus court rapporte le maximum de points.",inventory:"Observe \
les objets pendant 6 secondes. Retrouve ensuite l’objet disparu. Cinq manches, 200 points par bonne réponse.",delivery:"Observe la suite de flèches puis reproduis-la avec les bo\
utons. La tournée s’allonge de 3 à 10 directions. Une erreur termine la partie.",vault:"Retrouve l’ordre des quatre symboles grâce aux indices. Appuie sur les symboles dans l’o\
rdre, puis confirme. Cinq essais maximum."}[e]}Ue.exports={create:Mt,shuffle:O,act:xt,advance:ke,instructions:Ot,OBJECTS:Ct,SYMBOLS:It,DIRS:K,VECTOR:ie,neighbors:ae,shortest:Pe,permutations:ye,
finish:D,rng:oe};function qt(e,n,s){let t=(Math.floor(e()*70)+80)*(s?10:1),r=s?5:1,i=[t+8*r,t+4*r,t],a=[],o=t+2*r;for(let p=0;p<18;p++){let f=o;o=Math.max(t-r,Math.min(t+9*r,f+(e()-
.46)*3*r)),a.push({open:f,close:o,high:Math.max(f,o)+e()*1.2*r,low:Math.min(f,o)-e()*1.2*r})}let l=i.map(p=>O([p,p-r,p+2*r,p+3*r],e));return{stage:"show",ready:n+1e4,levels:i,step:r,
candles:a,options:l,answers:[]}}function Pt(e,n,s){let t=[{label:"Market",value:s?"GOLD":"NASDAQ"},{label:"Clock",value:"09:30"},{label:"Note",value:"Wait for the retest"},{label:"\
Risk limit",value:"1R"},{label:"Session",value:"New York"},{label:"Timeframe",value:"15 MIN"}],r=["EUR/USD","11:00","Check the calendar","0.5R","London","5 MIN"],i=O([0,1,2,3,4,5],
e).slice(0,2);return{desk:t,nextDesk:t.map((a,o)=>({...a,value:i.includes(o)?r[o]:a.value})),changed:i,answers:[],stage:"show",ready:n+1e4}}function A(e){return Error(z&&{"Choisis \
une carte encore cachée.":"Choose a hidden card.","Direction inconnue.":"Unknown direction.","Un obstacle bloque ce passage.":"An obstacle blocks this move.","Place les quatre sym\
boles avant de confirmer.":"Choose all four symbols before confirming.","Choisis un symbole encore disponible.":"Choose a symbol that is still available.","Choix invalide.":"Invali\
d choice."}[e]||e)}});var He=j((An,Fe)=>{"use strict";var{DatabaseSync:jt}=require("node:sqlite"),{mkdirSync:Ge,readdirSync:kt,unlinkSync:Ut}=require("node:fs"),ue=require("node:path"),{randomUUID:Be,randomInt:Gt}=require("node:crypto"),
Ee=class{constructor(n){Ge(n,{recursive:!0}),this.dir=n,this.db=new jt(ue.join(n,"shortcut-avent-v2.sqlite")),this.db.exec(`PRAGMA journal_mode=WAL; PRAGMA synchronous=FULL; PRAGMA\
 busy_timeout=5000;
 CREATE TABLE IF NOT EXISTS settings(k TEXT PRIMARY KEY,v TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS days(year INTEGER,day INTEGER,channel TEXT,message TEXT,opens INTEGER,closes INTEGER,closed INTEGER DEFAULT 0,publishing INTEGER DEFAULT 0,PRIMARY KEY(y\
ear,day));
 CREATE TABLE IF NOT EXISTS sessions(id TEXT PRIMARY KEY,year INTEGER,day INTEGER,type TEXT,uid TEXT,name TEXT,ranked INTEGER,attempt INTEGER,state TEXT,version INTEGER,created INT\
EGER);
 CREATE INDEX IF NOT EXISTS sessions_member ON sessions(year,day,uid);
 CREATE TABLE IF NOT EXISTS results(id TEXT PRIMARY KEY,year INTEGER,day INTEGER,type TEXT,uid TEXT,name TEXT,score INTEGER,duration INTEGER,won INTEGER,finished INTEGER,valid INTE\
GER DEFAULT 1);
 CREATE INDEX IF NOT EXISTS result_rank ON results(year,day,valid,score);
 CREATE TABLE IF NOT EXISTS audit(id INTEGER PRIMARY KEY,ts INTEGER,actor TEXT,action TEXT,detail TEXT);
 CREATE TABLE IF NOT EXISTS draws(year INTEGER,day INTEGER,uid TEXT,method TEXT,created INTEGER,PRIMARY KEY(year,day));
 CREATE TABLE IF NOT EXISTS lease(id INTEGER PRIMARY KEY CHECK(id=1),owner TEXT,until INTEGER);`)}tx(n){this.db.exec("BEGIN IMMEDIATE");try{let s=n();return this.db.exec("COMMIT"),
s}catch(s){throw this.db.exec("ROLLBACK"),s}}acquire(){this.owner=Be(),this.tx(()=>{let n=this.db.prepare("SELECT * FROM lease WHERE id=1").get();if(n&&n.until>Date.now())throw Error(
"Une autre instance du bot utilise déjà ce volume. Garde une seule réplique.");this.db.prepare("INSERT OR REPLACE INTO lease VALUES(1,?,?)").run(this.owner,Date.now()+45e3)})}heartbeat(){
if(!this.db.prepare("UPDATE lease SET until=? WHERE id=1 AND owner=?").run(Date.now()+45e3,this.owner).changes)throw Error("Verrou de stockage perdu.")}close(){this.owner&&this.db.
prepare("DELETE FROM lease WHERE owner=?").run(this.owner),this.db.close()}get(n,s=null){let t=this.db.prepare("SELECT v FROM settings WHERE k=?").get(n);return t?JSON.parse(t.v):s}set(n,s){
this.db.prepare("INSERT OR REPLACE INTO settings VALUES(?,?)").run(n,JSON.stringify(s))}log(n,s,t){this.db.prepare("INSERT INTO audit(ts,actor,action,detail) VALUES(?,?,?,?)").run(
Date.now(),n,s,JSON.stringify(t))}day(n,s){return this.db.prepare("SELECT * FROM days WHERE year=? AND day=?").get(n,s)}claimDay(n,s,t,r,i){return this.tx(()=>{let a=this.day(n,s);
if(a?.message||a?.publishing)throw Error("Ce défi a déjà un panneau ou une publication à vérifier. Utilise /avent statut.");this.db.prepare("INSERT INTO days(year,day,channel,\
opens,closes,publishing) VALUES(?,?,?,?,?,1) ON CONFLICT(year,day) DO UPDATE SET publishing=1,channel=excluded.channel,opens=excluded.opens,closes=excluded.closes").run(n,s,t,r,i)})}posted(n,s,t){
this.db.prepare("UPDATE days SET message=?,publishing=0 WHERE year=? AND day=?").run(t,n,s)}releaseDay(n,s){this.db.prepare("UPDATE days SET publishing=0 WHERE year=? AND day=?").run(
n,s)}closeDay(n,s){this.db.prepare("UPDATE days SET closed=1 WHERE year=? AND day=?").run(n,s)}load(n){let s=this.db.prepare("SELECT * FROM sessions WHERE id=?").get(n);if(!s)throw Error(
"Partie introuvable. Reviens au panneau du jeu.");return s.state=JSON.parse(s.state),s}newSession({year:n,day:s,type:t,uid:r,name:i,ranked:a,max:o,create:l,now:p=Date.now()}){return this.
tx(()=>{let f=this.db.prepare("SELECT id,state FROM sessions WHERE year=? AND day=? AND uid=? AND ranked=? ORDER BY created DESC").all(n,s,r,Number(a)).find(q=>{let Y=JSON.parse(q.
state);return Y.phase==="playing"&&Y.expires>p});if(f)return this.load(f.id);let E=this.db.prepare("SELECT COUNT(*) n FROM sessions WHERE year=? AND day=? AND uid=? AND ranked=1").
get(n,s,r).n;if(a&&E>=o)throw Error(`Tu as utilisé tes ${o} tentatives classées. Tu peux encore t’entraîner.`);let R=Be().replaceAll("-","").slice(0,16),S=a?E+1:0,C=l(R,S);return this.
db.prepare("INSERT INTO sessions VALUES(?,?,?,?,?,?,?,?,?,?,?)").run(R,n,s,t,r,i,Number(a),S,JSON.stringify(C),C.version,p),this.load(R)})}save(n,s){return this.tx(()=>{if(!this.db.
prepare("UPDATE sessions SET state=?,version=? WHERE id=? AND version=?").run(JSON.stringify(n.state),n.state.version,n.id,s).changes)throw Error("Le plateau a déjà changé. Rouvre \
ta partie avec Reprendre.");let r=n.state;return n.ranked&&r.phase==="done"&&this.db.prepare("INSERT OR IGNORE INTO results(id,year,day,type,uid,name,score,duration,won,finished) V\
ALUES(?,?,?,?,?,?,?,?,?,?)").run(n.id,n.year,n.day,n.type,n.uid,n.name,r.score,Math.max(0,r.finished-r.started),Number(r.won),r.finished),n})}active(){return this.db.prepare("SELEC\
T COUNT(*) n FROM sessions WHERE json_extract(state,'$.phase')='playing' AND json_extract(state,'$.expires')>?").get(Date.now()).n}attempts(n,s,t){return this.db.prepare("SELECT CO\
UNT(*) n FROM sessions WHERE year=? AND day=? AND uid=? AND ranked=1").get(n,s,t).n}ranking(n,{day:s=null,type:t=null}={}){let r="year=? AND valid=1",i=[n];return s&&(r+=" AND day=\
?",i.push(s)),t&&(r+=" AND type=?",i.push(t)),this.db.prepare(`WITH ranked AS(SELECT *,ROW_NUMBER() OVER(PARTITION BY uid,day ORDER BY score DESC,duration ASC,finished ASC,id ASC) \
rn FROM results WHERE ${r}), totals AS(SELECT uid,SUM(score) score,SUM(duration) duration,COUNT(*) days,MIN(finished) first FROM ranked WHERE rn=1 GROUP BY uid) SELECT totals.*, (S\
ELECT name FROM results r WHERE r.year=? AND r.uid=totals.uid ORDER BY finished DESC LIMIT 1) name FROM totals ORDER BY score DESC,duration ASC,first ASC,uid ASC`).all(...i,n)}exportDay(n,s){
return this.ranking(n,{day:s})}void(n,s,t,r,i){this.db.prepare("UPDATE results SET valid=0 WHERE year=? AND day=? AND uid=?").run(n,s,t),this.log(i,"invalidate",{year:n,day:s,uid:t,
reason:r})}draw(n,s,t,r){return this.tx(()=>{let i=this.day(n,s);if(!i||!i.closed&&Date.now()<i.closes)throw Error("Clôture le défi avant de désigner un gagnant.");let a=this.db.
prepare("SELECT * FROM draws WHERE year=? AND day=?").get(n,s);if(a)return{...a,existing:!0};let o=this.ranking(n,{day:s});if(!o.length)throw Error("Aucune participation classée te\
rminée et valide.");let l=t==="top"?o[0]:o[Gt(o.length)];return this.db.prepare("INSERT INTO draws VALUES(?,?,?,?,?)").run(n,s,l.uid,t,Date.now()),this.log(r,"draw",{year:n,day:s,
method:t,uid:l.uid,candidates:o.map(p=>p.uid)}),{uid:l.uid,method:t,existing:!1}})}async backup(){let n=ue.join(this.dir,"backups");Ge(n,{recursive:!0});let s=`shortcut-${new Date().
toISOString().replaceAll(":","-")}.sqlite`,t=ue.join(n,s),{backup:r}=require("node:sqlite");await r(this.db,t);for(let i of kt(n).filter(a=>a.endsWith(".sqlite")).sort().slice(0,-14))
Ut(ue.join(n,i));return t}};Fe.exports={Store:Ee}});var Je=j((Cn,Ye)=>{"use strict";var le=Q(),Bt=re(),B=Bt.lang==="en",de=e=>String(e).replace(/([\\`*_~|>])/g,"\\$1").replace(/@/g,"@​"),_e={up:"↑",right:"→",down:"↓",left:"←",
red:"🟥",green:"🟩"};function Ft(e){if(!(e.phase!=="playing"))return"";if(e.type==="memory")return B?`**${e.pairs}/8 pairs**, **${e.turns} turns**.
All cards are revealed in the image. A completed board starts at 1,000 points, minus 20 per turn beyond eight (minimum 500).`:`**${e.pairs}/8 paires**, en **${e.turns} tours**.
Toutes les cartes sont dévoilées. Grille terminée : 1 000 points, moins 20 par tour au-delà de huit, minimum 500.`;if(e.type==="mines")return`**${e.revealed.length}/13 cadeaux \
sûrs** ouverts.
Les trois pièges sont révélés sur le plateau. Les chiffres comptent les pièges des cases voisines, diagonales incluses.
${e.won?"Grille terminée : 1 000 points.":"La partie s’est arrêtée avant l’ouverture de toutes les cases sûres. Le score partiel dépend des cases ouvertes."}`;if(e.type===
"maze")return B?`Your route: **${e.moves} moves**. Shortest route: **${e.optimal} moves**.
${e.position===e.goal?"You reached the bell. Each extra move costs 25 points.":"The bell was not reached before the move limit."}`:`Ton trajet : **${e.moves} déplacements**. Chemin\
 optimal : **${e.optimal} déplacements**.
${e.position===e.goal?"Cadeau atteint. Chaque pas supplémentaire coûte 25 points.":"Le cadeau n’a pas été atteint avant la limite de déplacements."}`;if(e.type==="inventory")
return e.history.map((s,t)=>`${s.ok?"✅":"❌"} Manche ${t+1} : **${de(le.OBJECTS[s.answer])}**${s.ok?"":` → attendu : **${de(le.OBJECTS[s.expected])}**`}`).join(`
`)+`
**${e.correct}/5 bonnes réponses.**`;if(e.type==="vault")return(B?"Correct order: **":"Bonne combinaison : **")+e.answer.map(s=>le.SYMBOLS[s]).join(" → ")+`**
`+e.history.map((s,t)=>`${B?"Attempt":"Essai"} ${t+1} : ${s.guess.map(r=>le.SYMBOLS[r]).join(" → ")} • **${s.correct}/4**`).join(`
`)+(e.history.length?"":B?"No submitted combination.":"Aucune combinaison confirmée.");if(["delivery","sequence"].includes(e.type)){let s=e.sequence.slice(0,e.round+2).map(r=>_e[r]).
join(" "),t=e.entered.map(r=>_e[r]).join(" ")||"—";return B?`Completed rounds: **${e.completed}/8**.
Expected sequence: ${s}
Your input: ${t}${e.phase==="done"&&!e.won?`
The run stopped on input **${e.entered.length}**.`:""}`:`Tournées réussies : **${e.completed}/8**.
Trajet attendu : ${s}
Ta saisie : ${t}${e.phase==="done"&&!e.won?`
La partie s’est arrêtée à la direction **${e.entered.length}**.`:""}`}return e.type==="chart"?e.levels.map((s,t)=>`${e.answers[t]===s?"✅":"❌"} **L${t+1}** : ${e.answers[t]??
"No answer"} → **${s}**`).join(`
`)+`
The full simulated chart is now visible. This was a memory exercise, not live market data.`:e.type==="desk"?e.desk.map((s,t)=>{let r=e.changed.includes(t),i=e.answers.includes(t);return`${r===
i?"✅":"❌"} **${s.label}** : ${de(s.value)}${r?" → **"+de(e.nextDesk[t].value)+"**":" (unchanged)"}${i?" • selected":""}`}).join(`
`):""}function Ht(e,n){if(!n)return;let s=[""];for(let t of n.split(`
`))(s.at(-1)+`
`+t).length>950&&s.push(""),s[s.length-1]+=(s.at(-1)?`
`:"")+t;s.forEach((t,r)=>e.addFields({name:r?B?"Results continued":"Suite des résultats":B?"Your answers and corrections":"Tes réponses et la correction",value:t}))}Ye.exports={details:Ft,
addFields:Ht}});var ze=j((In,Ke)=>{"use strict";var{createCanvas:_t,loadImage:Yt,GlobalFonts:Jt}=require("@napi-rs/canvas"),We=require("node:fs"),ve=require("node:path"),d=re(),F=Q(),b=d.lang==="e\
n",ce=ve.join(__dirname,"assets");if(!We.existsSync(ce))throw Error(b?"Upload the assets folder next to index.js.":"Ajoute le dossier assets à côté de index.js.");for(let e of We.
readdirSync(ce).filter(n=>/\.(otf|ttf)$/.test(n)))Jt.registerFromPath(ve.join(ce,e),e.includes("Medium")||e.includes("Regular")?d.body:d.title);var J;async function Xe(){d.mascot&&
!J&&(J=await Yt(ve.join(ce,d.mascot)))}function y(e,n,s,t,r=24,i=d.white,a=1100,o=!1){for(e.font=`${r}px "${o?d.title:d.body}",sans-serif`,e.fillStyle=i,n=String(n);e.measureText(n).
width>a&&n.length>2;)n=n.slice(0,-2)+"…";e.fillText(n,s,t)}function I(e,n,s,t,r,i=d.panel,a=14){e.fillStyle=i,e.beginPath(),e.roundRect(n,s,t,r,a),e.fill(),e.strokeStyle=d.accent+
"30",e.lineWidth=1,e.stroke()}function v(e,n,s,t,r,i=d.accent,a=3){e.strokeStyle=i,e.lineWidth=a,e.lineCap="round",e.beginPath(),e.moveTo(n,s),e.lineTo(t,r),e.stroke()}function $(e,n,s,t,r){
e.fillStyle=r,e.beginPath(),e.arc(n,s,t,0,Math.PI*2),e.fill()}function Wt(e,n,s,t,r=35,i=d.navy){e.save(),e.translate(s,t),e.rotate({up:0,right:Math.PI/2,down:Math.PI,left:-Math.PI/
2}[n]),v(e,0,r/2,0,-r/2,i,5),v(e,-r/3,-r/6,0,-r/2,i,5),v(e,r/3,-r/6,0,-r/2,i,5),e.restore()}function _(e,n,s,t,r=72,i=d.accent){e.save(),e.translate(s,t),e.scale(r/80,r/80),e.lineWidth=
4,e.strokeStyle=i,e.fillStyle=i,e.lineCap="round";let a=(l,p,f,E,R=6)=>{e.beginPath(),e.roundRect(l,p,f,E,R),e.stroke()},o=(n%12+12)%12;if(n>=100){if(n===100&&(I(e,-28,-22,56,48,i,
5),v(e,0,-22,0,26,d.navy,7),v(e,-28,0,28,0,d.navy,6)),n===101){e.beginPath();for(let l=0;l<10;l++){let p=-Math.PI/2+l*Math.PI/5,f=l%2?12:30;l?e.lineTo(Math.cos(p)*f,Math.sin(p)*f):
e.moveTo(Math.cos(p)*f,Math.sin(p)*f)}e.closePath(),e.fill()}if(n===102)for(let l=0;l<6;l++)v(e,0,0,Math.cos(l*Math.PI/3)*30,Math.sin(l*Math.PI/3)*30,i,3);n===103&&(e.beginPath(),e.
moveTo(-23,18),e.lineTo(-18,-8),e.quadraticCurveTo(0,-36,18,-8),e.lineTo(23,18),e.closePath(),e.stroke(),$(e,0,26,4,i)),e.restore();return}if(o===0&&(b?($(e,0,0,27,i),$(e,0,0,21,d.
navy),y(e,"$",-10,13,35,i,40,!0)):(a(-32,-18,64,38,13),v(e,-20,0,-5,0,i,4),v(e,-12,-8,-12,8,i,4),$(e,14,-5,3,i),$(e,24,5,3,i))),o===1&&(b?(a(-30,-25,60,50),v(e,-20,15,-8,0,i,4),v(e,
-8,0,2,8,i,4),v(e,2,8,22,-13,i,4)):(e.beginPath(),e.arc(0,0,26,Math.PI,Math.PI*2),e.stroke(),a(-30,-4,12,28),a(18,-4,12,28))),o===2)if(b)e.beginPath(),e.arc(0,0,28,0,Math.PI*2),e.stroke(),
v(e,0,0,0,-16,i,4),v(e,0,0,14,5,i,4);else{a(-34,-20,68,40);for(let l=0;l<3;l++)for(let p=0;p<7;p++)I(e,-27+p*8,-13+l*9,5,5,i,1)}if(o===3)if(b){for(let l of[28,18,7])e.beginPath(),e.
arc(0,0,l,0,Math.PI*2),e.stroke();v(e,0,0,34,-32,i,4)}else a(-18,-28,36,56,17),v(e,0,-25,0,-5,i,3);if(o===4&&(b?(a(-34,-21,68,42),y(e,"$",-11,14,36,i,40,!0)):(a(-18,-32,36,64,8),$(
e,0,-12,5,i),v(e,-8,16,8,16,i,3))),o===5)if(b){a(-25,-30,50,60),v(e,-14,-28,-14,28,i,3);for(let l=0;l<3;l++)v(e,-5,-12+l*13,15,-12+l*13,i,3)}else a(-33,-25,66,44),v(e,0,20,0,32,i,4),
v(e,-17,32,17,32,i,4);if(o===6&&(b?(a(-33,-25,66,44),v(e,0,20,0,32,i,4),v(e,-17,32,17,32,i,4)):(a(-11,-30,22,40,11),e.beginPath(),e.arc(0,0,20,0,Math.PI),e.stroke(),v(e,0,20,0,32,i,
4),v(e,-12,32,12,32,i,4))),o===7&&(b?(e.beginPath(),e.moveTo(-22,17),e.lineTo(-18,-8),e.quadraticCurveTo(0,-38,18,-8),e.lineTo(22,17),e.closePath(),e.stroke(),$(e,0,26,4,i)):(a(-30,
13,60,16),v(e,0,13,0,-18,i,5),$(e,0,-24,10,i))),o===8&&(b?(e.beginPath(),e.moveTo(-25,-24),e.lineTo(25,-24),e.lineTo(22,10),e.quadraticCurveTo(0,40,-22,10),e.closePath(),e.stroke()):
(e.beginPath(),e.moveTo(-23,18),e.lineTo(-18,-8),e.quadraticCurveTo(0,-36,18,-8),e.lineTo(23,18),e.closePath(),e.stroke(),$(e,0,26,4,i))),o===9)if(b)$(e,-10,-8,13,i),$(e,-10,-8,6,d.
navy),v(e,1,2,27,28,i,7),v(e,17,17,24,10,i,5);else{e.beginPath();for(let l=0;l<10;l++){let p=-Math.PI/2+l*Math.PI/5,f=l%2?12:30;l?e.lineTo(Math.cos(p)*f,Math.sin(p)*f):e.moveTo(Math.
cos(p)*f,Math.sin(p)*f)}e.closePath(),e.fill()}if(o===10)for(let l=0;l<6;l++){let p=l*Math.PI/3;v(e,0,0,Math.cos(p)*30,Math.sin(p)*30,i,3)}o===11&&(b?(e.beginPath(),e.arc(0,0,25,Math.
PI,Math.PI*2),e.stroke(),a(-29,-3,12,26),a(17,-3,12,26)):(e.beginPath(),e.moveTo(-27,17),e.lineTo(8,-30),e.quadraticCurveTo(24,-15,26,17),e.closePath(),e.fill(),I(e,-31,14,65,13,d.
white,5),$(e,9,-29,8,d.white))),e.restore()}async function pe(e,n,s=0){await Xe();let t=_t(1200,850),r=t.getContext("2d"),i=r.createLinearGradient(0,0,1200,850);i.addColorStop(0,d.
navy),i.addColorStop(1,d.panel),r.fillStyle=i,r.fillRect(0,0,1200,850),r.strokeStyle=d.accent+"10",r.lineWidth=1;for(let a=0;a<1200;a+=50)r.beginPath(),r.moveTo(a,175),r.lineTo(a,850),
r.stroke();for(let a=175;a<850;a+=50)r.beginPath(),r.moveTo(0,a),r.lineTo(1200,a),r.stroke();for(let[a,o]of[[1110,60],[1120,770]]){r.save(),r.translate(a,o);for(let l=0;l<6;l++){let p=l*
Math.PI/3;v(r,0,0,Math.cos(p)*80,Math.sin(p)*80,d.accent+"19",2)}r.restore()}return I(r,32,26,7,47,d.accent,2),y(r,d.name,56,60,33,d.white,750,!0),y(r,b?"ADVENT CALENDAR 2026":"CAL\
ENDRIER DE L’AVENT 2026",56,89,18,d.muted,900),s&&(I(r,1060,28,100,64,d.accent),y(r,String(s).padStart(2,"0"),1086,74,37,d.navy,70,!0)),y(r,e,35,143,39,d.white,1115,!0),y(r,n,37,
177,22,d.muted,1120),v(r,35,193,1165,193,d.accent+"55",1),y(r,b?"THE FLOOR 8 • ADVENT 2026":"SHORTCUT • AVENT 2026",35,827,17,d.muted,660),y(r,b?"Game points are separate from \
season XP":"Points de jeu distincts des ShortCoins",760,827,17,d.muted,420),{canvas:t,ctx:r}}function Ve(e,n){if(I(e,860,218,305,552,d.navy+"dd"),y(e,b?"YOUR RUN":"TA PARTIE",883,258,
27,d.accent,260,!0),n&&(y(e,n.phase==="playing"?b?"IN PROGRESS":"EN COURS":n.phase==="expired"?b?"TIME EXPIRED":"TEMPS ÉCOULÉ":b?"COMPLETE":"TERMINÉE",884,300,22,d.white,260),y(
e,`${n.score||0} / 1 000`,883,348,38,d.gold,260,!0)),J)e.save(),e.beginPath(),e.roundRect(885,390,255,330,20),e.clip(),e.fillStyle="#f8fcfd",e.fillRect(885,390,255,330),e.drawImage(
J,885,391,255,255*J.height/J.width),e.restore();else{for(let s=0;s<4;s++)_(e,[1,2,3,8][s],935+s%2*115,450+Math.floor(s/2)*115,80,d.accent);y(e,"THE FLOOR 8",895,698,26,d.white,250,
!0)}}function Xt(e,n,s,t=55,r=250,i=750,a=440,o=!1){I(e,t,r,i,a,"#071211");let l=n.levels[0]+n.step*2,p=n.levels[2]-n.step*2,f=R=>r+30+(l-R)/(l-p)*(a-65);for(let R=0;R<3;R++){let S=f(
n.levels[R]);v(e,t+18,S,t+i-95,S,d.accent+"66",1),y(e,s?"L"+(R+1):"L"+(R+1)+" "+n.levels[R].toFixed(n.step<1?2:0),t+i-83,S+7,o?13:19,d.gold,80)}let E=(i-95)/n.candles.length;for(let R=0;R<
n.candles.length;R++){let S=n.candles[R],C=t+30+R*E,q=S.close>=S.open?d.accent:"#ff606a";v(e,C,f(S.high),C,f(S.low),q,2),I(e,C-E*.28,Math.min(f(S.open),f(S.close)),E*.56,Math.max(4,
Math.abs(f(S.open)-f(S.close))),q,1)}y(e,"SIMULATED • EDUCATIONAL EXERCISE",t+15,r+a-13,o?11:16,d.muted,i-30)}async function Vt(e,n){let{canvas:s,ctx:t}=await pe(e.title,n.phase===
"playing"?F.instructions(n.type):n.phase==="expired"?b?"Run expired. No ranked score.":"Partie expirée, sans score classé.":b?"Run complete • detailed results below":"Partie te\
rminée • correction détaillée ci-dessous",e.day);Ve(t,n);let r=n.phase!=="playing";if(["memory","mines"].includes(n.type)){for(let i=0;i<16;i++){let a=40+i%4*198,o=220+Math.floor(
i/4)*137,l=n.type==="memory"?n.found.includes(i)||n.flipped.includes(i)||r:n.revealed.includes(i)||r;if(I(t,a,o,182,122,l?"#e7f5ef":d.panel),n.type==="memory")l?(_(t,n.cards[i],a+91,
o+47,56,d.navy),y(t,F.OBJECTS[n.cards[i]],a+13,o+108,20,d.navy,156,!0)):(I(t,a+66,o+30,52,48,d.accent,6),v(t,a+92,o+31,a+92,o+78,d.navy,6),v(t,a+67,o+53,a+117,o+53,d.navy,6),y(t,String(
i+1).padStart(2,"0"),a+12,o+22,16,d.muted,40));else if(r&&n.bombs.includes(i))$(t,a+91,o+52,21,"#ff5b69"),v(t,a+80,o+39,a+101,o+65,d.navy,4),y(t,"PIÈGE",a+48,o+105,20,d.navy,100,!0);else if(n.
flags.includes(i)&&!l)y(t,"DRAPEAU",a+21,o+73,23,d.gold,150,!0);else if(l){let p=F.neighbors(i,4).filter(f=>n.bombs.includes(f)).length;y(t,String(p),a+72,o+76,56,p?"#17476a":"#a1b\
cb4",90,!0)}else y(t,String(i+1).padStart(2,"0"),a+68,o+75,39,d.white,100,!0)}y(t,n.type==="memory"?`${n.pairs}/8 ${b?"pairs":"paires"} • ${n.turns} ${b?"turns":"tours"}`:`${n.revealed.
length}/13 cadeaux sûrs • ${n.flags.length}/3 drapeaux`,50,789,23,d.gold,750)}if(n.type==="maze"){let i=n.size,a=Math.floor(550/i),o=120,l=222;for(let p=0;p<i*i;p++){let f=o+p%i*
a,E=l+Math.floor(p/i)*a;t.fillStyle=n.walls.includes(p)?d.navy:"#caddd4",t.fillRect(f+1,E+1,a-2,a-2),n.trail.includes(p)&&!n.walls.includes(p)&&$(t,f+a/2,E+a/2,2,d.accent),p===n.goal&&
(I(t,f+a*.18,E+a*.2,a*.65,a*.6,d.accent,2),v(t,f+a*.5,E+a*.2,f+a*.5,E+a*.8,d.navy,3)),p===n.position&&($(t,f+a/2,E+a/2,a*.28,"#ffcf61"),$(t,f+a/2,E+a/2,a*.1,d.navy))}y(t,`${n.budget-
n.moves} ${b?"moves left":"déplacements restants"} • ${n.moves} ${b?"used":"utilisés"}`,90,790,25,d.gold,720)}if(n.type==="inventory"&&(y(t,`MANCHE ${n.round}/5`,50,246,27,d.gold,
750,!0),y(t,n.stage==="show"&&!r?"MÉMORISE LES OBJETS":"QUEL OBJET A DISPARU ?",50,290,29,d.white,750,!0),(n.stage==="show"||r?n.shown:n.remaining).forEach((i,a)=>{let o=50+a%3*255,
l=330+Math.floor(a/3)*190;I(t,o,l,235,168,"#e7f5ef"),_(t,i,o+117,l+65,85,d.navy),y(t,F.OBJECTS[i],o+15,l+148,26,d.navy,205,!0)}),y(t,`${n.correct}/5 réponses justes`,50,790,24,d.gold,
720)),["delivery","sequence"].includes(n.type)){let i=n.stage==="show"||r,a=n.sequence.slice(0,n.round+2);y(t,`${b?"ROUND":"TOURNÉE"} ${n.round}/8`,50,255,31,d.gold,750,!0),y(t,i?
b?"MEMORIZE THE CANDLES":"MÉMORISE LE TRAJET":b?"REPEAT THE SEQUENCE":"REPRODUIS LE TRAJET",50,310,34,d.white,750,!0),a.forEach((o,l)=>{let p=55+l%5*151,f=365+Math.floor(l/5)*150;
if(I(t,p,f,132,130,i?"#dcece3":d.panel),i)if(n.type==="delivery")Wt(t,o,p+66,f+62,42,d.navy);else{let E=o==="green"?"#00a66b":"#e24d59";v(t,p+66,f+25,p+66,f+105,E,3),I(t,p+45,f+47,
42,45,E,3)}else y(t,l<n.progress?"OK":"?",p+42,f+78,39,l<n.progress?d.accent:d.muted,90,!0)}),y(t,`${n.completed}/8 ${b?"rounds completed":"tournées réussies"}`,50,755,25,d.gold,
750)}if(n.type==="vault"){y(t,`${b?"ATTEMPT":"ESSAI"} ${Math.min(n.tries+1,5)}/5`,50,250,30,d.gold,750,!0),n.clues.forEach((a,o)=>y(t,`${F.SYMBOLS[a.a]} ${b?a.adj?"immediately befo\
re":"before":a.adj?"juste avant":"avant"} ${F.SYMBOLS[a.b]}`,50,305+o*48,25,d.white,750));let i=r?n.answer:n.guess;for(let a=0;a<4;a++){let o=60+a*190;I(t,o,535,170,155,"#dcece3"),
i[a]!==void 0?(_(t,100+i[a],o+85,592,60,d.navy),y(t,F.SYMBOLS[i[a]],o+15,668,22,d.navy,140,!0)):y(t,"?",o+65,633,55,d.navy,100,!0)}y(t,n.feedback!==void 0?`${n.feedback}/4 ${b?"sym\
bols correctly placed on the last attempt":"symboles bien placés au dernier essai"}`:b?"Each symbol is used once.":"Chaque symbole est utilisé une fois.",55,755,23,d.gold,750)}if(n.
type==="chart"){let i=n.stage!=="show"&&!r;Xt(t,n,i),y(t,r?`${n.answers.filter((a,o)=>a===n.levels[o]).length}/3 correct levels`:i?`What was the price at level L${n.answers.length+
1}?`:"Memorize L1, L2 and L3 • 10 seconds",55,750,27,d.gold,750,!0)}return n.type==="desk"&&((n.stage==="show"&&!r?n.desk:n.nextDesk).forEach((a,o)=>{let l=45+o%3*263,p=230+Math.
floor(o/3)*250,f=n.answers.includes(o);I(t,l,p,245,222,f?"#145b43":d.panel),y(t,`${o+1}. ${a.label}`,l+15,p+35,24,d.gold,215,!0),_(t,[1,2,5,8,3,6][o],l+122,p+98,65,d.accent),y(t,a.
value,l+15,p+180,23,d.white,215,!0),r&&y(t,n.changed.includes(o)?"CHANGED":"UNCHANGED",l+15,p+210,16,n.changed.includes(o)?d.accent:d.muted,215)}),y(t,n.stage==="show"&&!r?"Memoriz\
e the desk • 10 seconds":"Choose the TWO items that changed.",50,790,25,d.gold,750)),s.toBuffer("image/png")}async function Kt(e){let{canvas:n,ctx:s}=await pe(e.title,b?"A new da\
y. A new challenge.":"Une nouvelle case à ouvrir.",e.day);Ve(s,null);for(let t=0;t<8;t++){let r=50+t%4*198,i=250+Math.floor(t/4)*200;I(s,r,i,175,175,d.panel),_(s,t,r+87,i+75,85,d.
accent),y(s,F.OBJECTS[t],r+13,i+153,22,d.white,150,!0)}return y(s,b?"PLAY • SCORE • CLIMB THE LEADERBOARD":"JOUE • MARQUE DES POINTS • GRIMPE AU CLASSEMENT",50,760,26,d.gold,
760,!0),n.toBuffer("image/png")}async function zt(e,n,s=0){let{canvas:t,ctx:r}=await pe(e,b?"Daily • Per game • Overall":"Par défi • Par jeu • Général");return n.slice(0,
10).forEach((i,a)=>{I(r,40,220+a*54,1120,46,a===0?d.accent:d.panel,8),y(r,`${s+a+1}. ${i.name||i.uid}`,58,252+a*54,25,a===0?d.navy:d.white,900,!0),y(r,String(i.score),1020,252+a*54,
26,a===0?d.navy:d.gold,120,!0)}),t.toBuffer("image/png")}Ke.exports={board:Vt,banner:Kt,ranking:zt,prepare:Xe,icon:_,frame:pe}});var tt=j((Dn,et)=>{"use strict";var{EmbedBuilder:be,ActionRowBuilder:me,ButtonBuilder:Qt,ButtonStyle:M,AttachmentBuilder:Te}=require("discord.js"),Z=Q(),Qe=Je(),{labels:Zt}=se(),Se=ze(),
he={parse:[]},w=(e,n,s=M.Secondary,t=!1)=>new Qt().setCustomId(e).setLabel(n.slice(0,80)).setStyle(s).setDisabled(t),H=e=>Array.from({length:Math.ceil(e.length/5)},(n,s)=>new me().
addComponents(e.slice(s*5,s*5+5))),en={up:"↑",right:"→",down:"↓",left:"←"};function Ze(e){let n=e.state,s=r=>`sc:s:${e.id}:${n.version}:${r}`,t=[];if(n.phase!=="playing")return[];
if(["memory","mines"].includes(n.type)){for(let a=0;a<16;a++){let o=n.type==="memory"?n.found.includes(a)||n.flipped.includes(a)||!!n.hideAt:n.revealed.includes(a),l=String(a+1).padStart(
2,"0");n.type==="memory"&&(n.found.includes(a)||n.flipped.includes(a))&&(l=Z.OBJECTS[n.cards[a]]),n.type==="mines"&&n.flags.includes(a)&&(l="⚑ "+l),t.push(w(s(String(a)),l,n.type===
"memory"&&n.found.includes(a)?M.Success:M.Secondary,o))}let r=Array.from({length:4},(a,o)=>new me().addComponents(t.slice(o*4,o*4+4))),i=[w(s("giveup"),"Terminer ma tentative",M.Danger)];
return n.type==="mines"&&i.unshift(w(s("mode"),n.mode==="open"?"Mode : ouvrir 🎁":"Mode : drapeau ⚑",M.Primary)),r.push(new me().addComponents(i)),r}if(n.type==="maze"||n.type===
"delivery"){if(n.type==="delivery"&&n.stage==="show")return H([w(s("wait"),"Mémorise le trajet…",M.Secondary,!0)]);for(let r of["left","up","down","right"])t.push(w(s(r),en[r],M.
Primary))}if(n.type==="inventory"){if(n.stage==="show")return H([w(s("wait"),"Observe les objets…",M.Secondary,!0)]);for(let r of n.options)t.push(w(s(String(r)),Z.OBJECTS[r],M.Primary))}
if(n.type==="vault"){let r=H(Z.SYMBOLS.map((i,a)=>w(s(String(a)),i,M.Primary,n.guess.includes(a)||n.guess.length===4)));return r.push(new me().addComponents(w(s("submit"),"Confirme\
r",M.Success,n.guess.length!==4),w(s("clear"),"Effacer"),w(s("giveup"),"Terminer",M.Danger))),r}return t.push(w(s("giveup"),"Terminer",M.Danger)),H(t)}async function tn(e,n,s,t=!1){
let r=new Te(await Se.banner(e),{name:"shortcut-noel.png"}),i=s.attempts,a=new be().setColor(46791).setTitle(`CASE ${String(e.day).padStart(2,"0")} • ${e.title}`).setDescription(
`${Z.instructions(e.type)}

**${i} tentatives classées • meilleur résultat retenu • jusqu’à 1 000 points**
${s.practice?`Entraînement libre disponible.
`:""}
Prends une capture de ton résultat et poste-la dans la quête associée dans <#${n.quest}> pour la validation manuelle des ShortCoins.`).setImage("attachment://shortcut-noel.png").
setFooter({text:`Shortcut Avent ${s.year} • Jour ${e.day} • scday:${s.year}:${e.day}`});t?a.addFields({name:"Aperçu staff",value:"Le bouton lance un entraînement. Aucun point \
au classement."}):a.addFields({name:"Tentatives classées",value:`Ouverture <t:${Math.floor(n.opens/1e3)}:f>
Clôture <t:${Math.floor(n.closes/1e3)}:f>${n.closed?`
**Défi clôturé**`:""}`});let o=[w(`sc:p:${e.day}:${t?"practice":"ranked"}`,t?"Tester le jeu":"Jouer / Reprendre",M.Success,!!n.closed&&!t),w(`sc:l:day:${e.day}:0`,"Classement du\
 défi"),w("sc:l:general:0:0","Classement général")];return s.practice&&!t&&o.push(w(`sc:p:${e.day}:practice`,"Entraînement")),{embeds:[a],files:[r],components:H(o),allowedMentions:he}}
async function nn(e,n,s){let t=e.state,r=!!e.ranked,i=new be().setColor(t.phase==="done"?46791:600896).setTitle(n.title).setImage("attachment://partie.png").setFooter({text:`${r?"C\
LASSÉE":"ENTRAÎNEMENT"} • ${s.year}-${String(n.day).padStart(2,"0")} • ${e.id} • ${e.uid}`}),a=`**${r?`Tentative classée ${e.attempt}/${s.attempts}`:"Entraînement : aucun \
point enregistré"}**
`;t.phase==="playing"?(a+=Z.instructions(t.type),t.type==="memory"&&(a+=`
**${t.pairs}/8 paires • ${t.turns} tours**`),t.type==="mines"&&(a+=`
**${t.revealed.length}/13 cadeaux sûrs • ${t.flags.length}/3 drapeaux**`),t.type==="maze"&&(a+=`
**${t.budget-t.moves} déplacements restants**`),a+="\nTu peux reprendre cette partie avec le bouton du panneau ou `/jouer`."):t.phase==="done"?a+=`**${t.score}/1 000 points • ${e.
name}**
${r?"Résultat enregistré. Ton meilleur score de ce défi compte au général.":"Ce résultat d’entraînement ne compte pas au classement."}
${r?`Capture ce message et poste-le dans la quête du jour dans <#${s.quest}>. Les ShortCoins sont validés et crédités par l’équipe.`:"Reviens au panneau pour ta tentative cl\
assée."}`:a+="Partie expirée, sans résultat classé. Reviens au panneau pour recommencer si tu as encore des tentatives.",Qe.addFields(i,Qe.details(t));let o=Ze(e);return t.phase!==
"playing"&&o.push(...H([w(`sc:l:day:${n.day}:0`,"Classement du défi"),w("sc:l:general:0:0","Classement général")])),{content:a,embeds:[i],attachments:[],files:[new Te(await Se.board(
n,t),{name:"partie.png"})],components:o,allowedMentions:he}}async function sn(e,n,{day:s=null,type:t=null,page:r=0}={}){let i=e.ranking(n.year,{day:s,type:t}),a=Math.max(1,Math.ceil(
i.length/10));r=Math.max(0,Math.min(r,a-1));let o=i.slice(r*10,r*10+10),l=s?`Classement du ${s} décembre`:t?Zt[t]:"Classement général",p=new be().setColor(46791).setTitle(l).setDescription(
o.length?o.map((S,C)=>`**${r*10+C+1}.** <@${S.uid}> • **${S.score} points** • ${S.days} défi(s)`).join(`
`):"Aucun résultat classé pour le moment.").setFooter({text:`Page ${r+1}/${a} • Mini-jeux uniquement • Les ShortCoins restent distincts`});p.setImage("attachment://classement\
.png");let f=new Te(await Se.ranking(l,o,r*10),{name:"classement.png"}),E=s?"day":t?"type":"general",R=s||t||0;return{embeds:[p],attachments:[],files:[f],components:H([w(`sc:l:${E}\
:${R}:${Math.max(0,r-1)}`,"Précédent",M.Secondary,r===0),w(`sc:l:${E}:${R}:${Math.min(a-1,r+1)}`,"Suivant",M.Secondary,r===a-1)]),allowedMentions:he}}et.exports={panel:tn,game:nn,
leaderboard:sn,buttons:Ze,quiet:he,rows:H,btn:w}});var st=j(($n,nt)=>{"use strict";var{SlashCommandBuilder:ee,PermissionFlagsBits:rn,ChannelType:fe}=require("discord.js"),{labels:an}=se(),G=(e,n=!0)=>e.addIntegerOption(s=>s.setName(
"jour").setDescription("Jour de décembre").setMinValue(1).setMaxValue(24).setRequired(n)),on=Object.entries(an).map(([e,n])=>({name:n,value:e})),un=new ee().setName("avent").setDescription(
"Administration du Noël Shortcut").setDefaultMemberPermissions(rn.ManageGuild).addSubcommand(e=>e.setName("config").setDescription("Choisir les salons et l’autopublication").addChannelOption(
n=>n.setName("jeux").setDescription("Salon des mini-jeux").addChannelTypes(fe.GuildText,fe.GuildAnnouncement).setRequired(!0)).addChannelOption(n=>n.setName("quetes").setDescription(
"Salon des quêtes manuelles").addChannelTypes(fe.GuildText,fe.GuildForum).setRequired(!0)).addBooleanOption(n=>n.setName("automatique").setDescription("Publier les jours de mini-j\
eu automatiquement").setRequired(!0))).addSubcommand(e=>G(e.setName("publier").setDescription("Publier un panneau de jeu sans créer de quête"))).addSubcommand(e=>G(e.setName("ape\
rcu").setDescription("Tester une journée en privé sans points"))).addSubcommand(e=>e.setName("statut").setDescription("Voir le calendrier et les réglages")).addSubcommand(e=>G(e.
setName("cloturer").setDescription("Fermer les tentatives classées de ce défi"))).addSubcommand(e=>G(e.setName("horaires").setDescription("Définir l’ouverture et la clôture en he\
ure de Paris")).addStringOption(n=>n.setName("ouverture").setDescription("AAAA-MM-JJ HH:mm").setRequired(!0)).addStringOption(n=>n.setName("fermeture").setDescription("AAAA-MM-JJ H\
H:mm").setRequired(!0))).addSubcommand(e=>G(e.setName("exporter").setDescription("Exporter les résultats pour validation manuelle"),!1)).addSubcommand(e=>G(e.setName("gagnant").setDescription(
"Désigner un gagnant provisoire après clôture")).addStringOption(n=>n.setName("methode").setDescription("Méthode").addChoices({name:"Tirage au sort",value:"random"},{name:"Prem\
ier du classement",value:"top"}).setRequired(!0))).addSubcommand(e=>G(e.setName("invalider").setDescription("Exclure les scores d’un membre avec un motif")).addUserOption(n=>n.setName(
"membre").setDescription("Membre concerné").setRequired(!0)).addStringOption(n=>n.setName("motif").setDescription("Raison de la décision").setRequired(!0))).addSubcommand(e=>G(e.
setName("reparer").setDescription("Retrouver un panneau après une publication interrompue"))).addSubcommand(e=>e.setName("sauvegarde").setDescription("Créer une sauvegarde SQLite \
téléchargeable")),ln=G(new ee().setName("jouer").setDescription("Jouer au mini-jeu du calendrier Shortcut"),!1).addBooleanOption(e=>e.setName("entrainement").setDescription("Joue\
r sans affecter le classement")),dn=new ee().setName("classement").setDescription("Classements des mini-jeux Shortcut").addStringOption(e=>e.setName("jeu").setDescription("Filtrer \
par mini-jeu").addChoices(...on)).addIntegerOption(e=>e.setName("jour").setDescription("Filtrer par défi du jour").setMinValue(1).setMaxValue(24)).addIntegerOption(e=>e.setName("p\
age").setDescription("Page du classement").setMinValue(1).setMaxValue(1e4)),cn=new ee().setName("mon-score").setDescription("Voir tes résultats aux mini-jeux du calendrier"),pn=new ee().
setName("regles-avent").setDescription("Comment jouer et valider sa participation");nt.exports=[un,ln,dn,cn,pn].map(e=>e.setDMPermission(!1).toJSON())});var{Client:mn,GatewayIntentBits:hn,Events:Re,MessageFlags:fn,PermissionFlagsBits:te,AttachmentBuilder:rt,ChannelType:at}=require("discord.js"),{randomUUID:gn}=require("node:crypto"),
yn=require("node:http"),{config:ut,paris:we,parisEpoch:it}=$e(),k=se(),W=Q(),{Store:lt}=He(),x=tt(),ot=fn.Ephemeral;function Ne(e){let n=/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/.
exec(e||"");if(!n)throw Error("Date attendue : AAAA-MM-JJ HH:mm, heure de Paris.");let[s,t,r,i,a]=n.slice(1).map(Number);if(t!==12||i>23||a>59||r<1||r>31)throw Error("Utilise une d\
ate valide de décembre.");let o=Date.UTC(s,11,r,i-1,a),l=we(o);if(`${l.year}-${l.month}-${l.day} ${l.hour}:${l.minute}`!==e)throw Error("Date invalide.");return o}function En(e){return String(
e||"Joueur").replace(/[\r\n\x00-\x1f]/g," ").slice(0,60)}function vn(e){let n=String(e??"");return/^[=+\-@\t\r]/.test(n)&&(n="'"+n),'"'+n.replaceAll('"','""')+'"'}function dt(e){return"\
\uFEFF"+e.map(n=>n.map(vn).join(";")).join(`\r
`)}function ct(){let e=new Map;return async(n,s)=>{let r=(e.get(n)||Promise.resolve()).catch(()=>{}).then(s);e.set(n,r);try{return await r}finally{e.get(n)===r&&e.delete(n)}}}async function pt(e=process.
env,n={}){let s=ut(e),t=new lt(s.data);t.acquire(),t.db.exec("CREATE TABLE IF NOT EXISTS exclusions(year INTEGER, day INTEGER, uid TEXT, PRIMARY KEY(year,day,uid))");let r=n.client||
new mn({intents:[hn.Guilds]}),i=ct(),a=new Map,o=!1,l=0;function p(){return{channel:t.get("channel",s.channel),quest:t.get("quest",s.quest),auto:t.get("auto",s.auto)}}function f(u){
return u.memberPermissions?.has(te.ManageGuild)||s.staffRole&&u.member?.roles?.cache?.has(s.staffRole)}function E(u){let m=k.day(u);if(!m||m.kind!=="bot")throw Error("Cette journée\
 est une quête manuelle, pas un mini-jeu du bot.");return m}function R(){let u=we();return u.month==="12"&&Number(u.year)===s.year?Number(u.day):null}function S(u){let m=p(),c=t.day(
s.year,u.day);return{...m,opens:c?.opens??it(s.year,u.day,s.openHour),closes:c?.closes??it(s.year,u.day,s.closeHour),closed:c?.closed||0}}function C(u,m){let c=S(u);if(m&&(!t.day(s.
year,u.day)?.message||c.closed||Date.now()<c.opens||Date.now()>=c.closes))throw Error("Les tentatives classées de ce défi ne sont pas ouvertes. Consulte les horaires du panneau.")}
async function q(u,m){let c=await x.game(m,k.day(m.day),{...s,quest:p().quest});await u.editReply(c),Y(u,m)}function Y(u,m){clearTimeout(a.get(m.id)),a.delete(m.id);let c=m.state;if(c.
phase!=="playing")return;let h=c.hideAt||(["inventory","delivery"].includes(c.type)&&c.stage==="show"?c.ready:null);if(!h)return;let g=setTimeout(()=>i(m.uid,async()=>{if(o)return;
let T=t.load(m.id);if(T.state.phase!=="playing")return;let N=T.state.version;if(W.advance(T.state),T.state.version!==N||T.state.phase!=="playing"){T.state.version===N&&T.state.version++,
t.save(T,N);try{await u.editReply(await x.game(T,k.day(T.day),{...s,quest:p().quest}))}catch{}}}).catch(T=>console.error("Actualisation du plateau :",T.message)),Math.max(100,h-Date.
now()+30));g.unref(),a.set(m.id,g)}async function ne(u,m,c){let h=E(m);if(!c&&!s.practice&&!f(u))throw Error("L’entraînement n’est pas activé.");if(C(h,c),c&&t.db.prepare("SE\
LECT 1 FROM exclusions WHERE year=? AND day=? AND uid=?").get(s.year,h.day,u.user.id))throw Error("Participation exclue pour ce défi.");if(t.active()>=s.maxActive)throw Error("Bea\
ucoup de joueurs sont connectés. Réessaie dans un instant.");let g=t.newSession({year:s.year,day:h.day,type:h.type,uid:u.user.id,name:En(u.member?.displayName||u.user.username),ranked:c,
max:s.attempts,create:N=>{let L=W.create(h.type,`${s.year}:${h.day}:${u.user.id}:${N}:${gn()}`,Date.now(),h.title.includes("#2"));return c&&(L.expires=Math.min(L.expires,S(h).closes)),
L}}),T=g.state.version;W.advance(g.state),(g.state.version!==T||g.state.phase!=="playing")&&(g.state.version===T&&g.state.version++,t.save(g,T)),await q(u,g)}async function U(u,m="\
automatic"){let c=E(u),h=S(c);if(!h.channel)throw Error("Configure le salon avec /avent config.");let g=await r.channels.fetch(h.channel);if(!g||g.guildId!==s.guild||![at.GuildText,
at.GuildAnnouncement].includes(g.type))throw Error("Salon de jeux invalide.");if(!g.permissionsFor(r.user)?.has([te.ViewChannel,te.SendMessages,te.EmbedLinks,te.AttachFiles]))throw Error(
"Le bot doit pouvoir voir le salon, envoyer des messages, intégrer des liens et joindre des fichiers.");let N=await x.panel(c,h,s);t.claimDay(s.year,u,h.channel,h.opens,h.closes);
try{let L=await g.send({...N,nonce:`sc${s.year}${String(u).padStart(2,"0")}`,enforceNonce:!0});return t.posted(s.year,u,L.id),t.log(m,"publish",{day:u,message:L.id}),L.url}catch(L){
throw t.log(m,"publish_uncertain",{day:u,code:L.code||"unknown"}),Error("Publication interrompue. Ne republie pas immédiatement : /avent reparer retrouve un éventuel panneau déjà e\
nvoyé.")}}async function P(u){let m=t.day(s.year,u);if(m?.message)try{let h=await(await r.channels.fetch(m.channel)).messages.fetch(m.message),g=await x.panel(E(u),S(E(u)),s);await h.
edit({...g,attachments:[]})}catch(c){console.error("Panneau à actualiser :",u,c.message)}}async function ht(u){if(!f(u))throw Error("Commande réservée à l’équipe autorisée.");
let m=u.options.getSubcommand(),c=u.options.getInteger("jour");if(c&&E(c),m==="config"){let h=u.options.getChannel("jeux"),g=u.options.getChannel("quetes");if(h.guildId!==s.guild||
g.guildId!==s.guild)throw Error("Choisis les salons de ce serveur.");return t.set("channel",h.id),t.set("quest",g.id),t.set("auto",u.options.getBoolean("automatique")),t.log(u.user.
id,"config",{channel:h.id,quest:g.id,auto:p().auto}),u.editReply(`Configuration enregistrée : jeux <#${h.id}>, quêtes <#${g.id}>. Publication automatique ${p().auto?"activée":"d\
ésactivée"}. Aucun ShortCoin n’est crédité automatiquement.`)}if(m==="publier")return u.editReply("Panneau publié : "+await U(c,u.user.id));if(m==="apercu")return u.editReply(
await x.panel(E(c),S(E(c)),s,!0));if(m==="statut"){let h=p();return u.editReply({content:`**Shortcut Avent ${s.year}**
Jeux : ${h.channel?`<#${h.channel}>`:"à configurer"} • Quêtes : <#${h.quest}>
Automatique : ${h.auto?"oui":"non"} • ${s.attempts} tentatives classées/défi

`+k.days.filter(g=>g.kind==="bot").map(g=>{let T=t.day(s.year,g.day);return`${String(g.day).padStart(2,"0")}/12 • ${g.title} • ${T?.closed?"clôturé":T?.message?"publié":T?.publishing?
"publication à vérifier":"non publié"}`}).join(`
`),allowedMentions:x.quiet})}if(m==="horaires"){let h=Ne(u.options.getString("ouverture")),g=Ne(u.options.getString("fermeture"));if(g<=h)throw Error("La clôture doit suivre l’ouve\
rture.");if(t.day(s.year,c)?.message)throw Error("Les horaires sont figés après publication. Clôture le défi en cas de changement exceptionnel.");return t.db.prepare("INSERT IN\
TO days(year,day,opens,closes) VALUES(?,?,?,?) ON CONFLICT(year,day) DO UPDATE SET opens=excluded.opens,closes=excluded.closes").run(s.year,c,h,g),t.log(u.user.id,"hours",{day:c,opens:h,
closes:g}),await P(c),u.editReply("Horaires enregistrés et panneau actualisé si accessible. Les parties déjà en cours conservent leur délai initial.")}if(m==="cloturer"){if(!t.
day(s.year,c))throw Error("Défi non publié.");return t.closeDay(s.year,c),t.log(u.user.id,"close",{day:c}),await P(c),u.editReply("Défi clôturé. Les nouvelles tentatives et les c\
oups classés sont fermés. Tu peux exporter les résultats.")}if(m==="exporter"){let h=c?[E(c)]:k.days.filter(T=>T.kind==="bot"),g=[["event","jour","jeu","discord_id","pseudo","po\
ints","defis","shortcoins","validation","cle_participation"]];for(let T of h)for(let N of t.exportDay(s.year,T.day))g.push([s.year,T.day,T.type,N.uid,N.name,N.score,N.days,20,"A_VE\
RIFIER_SCREENSHOT",`shortcut-avent-${s.year}-${T.day}-${N.uid}`]);return u.editReply({content:"Résultats classés uniquement. Vérifie les captures dans les quêtes et utilise la clé \
unique pour éviter un double crédit. Les 20 ShortCoins sont une indication, pas un versement.",files:[new rt(Buffer.from(dt(g)),{name:`shortcut-resultats-${s.year}-${c||"tous"}.c\
sv`})]})}if(m==="gagnant"){let h=t.draw(s.year,c,u.options.getString("methode"),u.user.id);return u.editReply({content:`${h.existing?"Désignation déjà enregistrée":"Gagnant pro\
visoire"} : <@${h.uid}> (${h.method==="top"?"classement":"tirage au sort"}).
**Vérifie la capture et les conditions avant annonce.** Ce tirage porte sur les résultats du bot, pas sur les quêtes manuelles. Aucun lot n’est envoyé automatiquement.`,allowedMentions:x.
quiet})}if(m==="invalider"){let h=u.options.getUser("membre").id;return t.tx(()=>{t.db.prepare("INSERT OR IGNORE INTO exclusions VALUES(?,?,?)").run(s.year,c,h),t.void(s.year,c,h,u.
options.getString("motif"),u.user.id)}),u.editReply("Scores de ce membre exclus pour ce défi. Décision conservée dans le journal. Un gagnant déjà désigné doit être vérifié manuelle\
ment.")}if(m==="sauvegarde"){let h=await t.backup();return u.editReply({content:"Sauvegarde complète. À conserver dans un espace staff privé ; ne la publie pas dans les salons memb\
res.",files:[new rt(h)]})}if(m==="reparer"){let h=t.day(s.year,c);if(!h)throw Error("Aucune publication à réparer.");if(h.message)return u.editReply(`Panneau enregistré : https:/\
/discord.com/channels/${s.guild}/${h.channel}/${h.message}`);let N=(await(await r.channels.fetch(h.channel)).messages.fetch({limit:100})).find(L=>L.author.id===r.user.id&&L.embeds.
some(yt=>yt.footer?.text?.includes(`scday:${s.year}:${c}`)));if(N)return t.posted(s.year,c,N.id),u.editReply("Panneau retrouvé : "+N.url);throw Error("Aucun panneau trouvé dans le\
s 100 derniers messages. Publication laissée en attente pour éviter un doublon : vérifier le salon et le journal avant intervention dans la base.")}}async function ft(u){if(!(!u.
inGuild()||u.guildId!==s.guild)&&!(!u.isChatInputCommand()&&!u.isButton())&&!(u.isButton()&&!u.customId.startsWith("sc:")))return u.isButton()&&u.customId.startsWith("sc:s:")?await u.
deferUpdate():await u.deferReply({flags:ot}),i(u.user.id,async()=>{if(u.isChatInputCommand()){if(u.commandName==="avent")return ht(u);if(u.commandName==="jouer"){let m=u.options.getInteger(
"jour")||R();if(!m)throw Error("Choisis un jour de mini-jeu avec /jouer jour:N.");return ne(u,m,!u.options.getBoolean("entrainement"))}if(u.commandName==="classement")return u.editReply(
await x.leaderboard(t,s,{day:u.options.getInteger("jour"),type:u.options.getString("jeu"),page:(u.options.getInteger("page")||1)-1}));if(u.commandName==="regles-avent")return u.editReply(
{content:`**Calendrier de l’Avent Shortcut • Shortcut**
Douze défis classés : ${k.days.filter(m=>m.kind==="bot").map(m=>m.day).join(", ")} décembre.
${s.attempts} tentatives classées par défi. Le meilleur résultat terminé et valide est conservé, sur 1 000 points. Le général additionne les meilleurs scores de chaque défi ; le cl\
assement d’un jeu additionne ses deux journées. En cas d’égalité : durée cumulée des meilleurs résultats, puis date du premier résultat, puis ID Discord.
Une partie dure au maximum 12 minutes. Fermer Discord ne la met pas en pause.
Les entraînements ne rapportent aucun point. Les points de jeu ne sont pas des ShortCoins.
Capture ton résultat classé et dépose-le dans la quête associée dans <#${p().quest}>. L’équipe valide les ShortCoins et les lots manuellement. Les quêtes hors bot ne sont pas \
incluses dans ces classements.`,allowedMentions:x.quiet});if(u.commandName==="mon-score"){let m=t.ranking(s.year),c=m.findIndex(g=>g.uid===u.user.id),h=k.days.filter(g=>g.kind==="b\
ot").map(g=>{let T=t.ranking(s.year,{day:g.day}).find(N=>N.uid===u.user.id);return`${g.day}/12 • ${g.title} : **${T?.score??0} pts** (${t.attempts(s.year,g.day,u.user.id)}/${s.attempts}\
 tentatives utilisées)`});return u.editReply({content:`**Tes résultats**
${c<0?"Pas encore de résultat classé.":`Position générale : **${c+1}/${m.length}** • **${m[c].score} points**`}

${h.join(`
`)}`,allowedMentions:x.quiet})}}else{let m=u.customId.split(":");if(m[1]==="p")return ne(u,Number(m[2]),m[3]==="ranked");if(m[1]==="l"){let[,,c,h,g]=m;return u.editReply(await x.leaderboard(
t,s,{day:c==="day"?Number(h):null,type:c==="type"?h:null,page:Number(g)||0}))}if(m[1]==="s"){let c=t.load(m[2]);if(c.uid!==u.user.id)throw Error("Cette partie appartient à un autre\
 membre.");if(c.year!==s.year)throw Error("Cette partie appartient à un ancien calendrier.");let h=E(c.day);if(c.ranked){if(t.db.prepare("SELECT 1 FROM exclusions WHERE year=? AND\
 day=? AND uid=?").get(s.year,c.day,c.uid))throw Error("Participation exclue pour ce défi.");let T=t.day(s.year,c.day);if(T?.closed||Date.now()>=T?.closes)throw Error("Ce défi est\
 clôturé. Ton dernier résultat terminé reste enregistré.")}let g=c.state.version;if(W.advance(c.state),c.state.version!==Number(m[3])||c.state.phase!=="playing")return(c.state.
version!==g||c.state.phase!=="playing")&&(c.state.version===g&&c.state.version++,t.save(c,g)),q(u,c);c.state=W.act(c.state,m[4]),c.state.version===g&&c.state.version++,t.save(c,g),
await q(u,c);return}}})}r.on(Re.InteractionCreate,u=>ft(u).catch(async m=>{console.error("Interaction :",m.message);let c={content:m.message.slice(0,1600),flags:ot,allowedMentions:x.
quiet};try{u.deferred||u.replied?await u.followUp(c):await u.reply(c)}catch{}}));let Ae=setInterval(()=>{try{t.heartbeat()}catch(u){console.error(u.message),X()}},15e3);Ae.unref();
async function Ce(){if(o||!r.isReady())return;let u=we();for(let m of k.days.filter(c=>c.kind==="bot")){let c=t.day(s.year,m.day);c?.message&&!c.closed&&Date.now()>=c.closes&&(t.closeDay(
s.year,m.day),await P(m.day))}if(p().auto&&Number(u.year)===s.year&&u.month==="12"){let m=k.day(Number(u.day));if(m?.kind==="bot"){let c=S(m),h=t.day(s.year,m.day);!h?.message&&!h?.
publishing&&!h?.closed&&Date.now()>=c.opens&&Date.now()<c.closes&&await i(`publish:${m.day}`,()=>U(m.day))}}Date.now()-l>6*36e5&&(await t.backup(),l=Date.now())}let ge=!1,Ie=setInterval(
()=>{ge||(ge=!0,Ce().catch(u=>console.error("Calendrier :",u.message)).finally(()=>ge=!1))},3e4);Ie.unref(),r.once(Re.ClientReady,()=>{console.log(`Shortcut prêt • serveur ${s.guild}\
 • ${s.attempts} tentatives • autopublication ${p().auto?"active":"inactive"}`),Ce().catch(u=>console.error(u.message))}),r.on(Re.Error,u=>console.error("Discord :",u.message));
let gt=e.PORT?yn.createServer((u,m)=>{m.writeHead(r.isReady()?200:503,{"Content-Type":"application/json"}),m.end(JSON.stringify({ready:r.isReady()}))}).listen(Number(e.PORT),"0.0.0\
.0"):null;function X(){if(!o){o=!0,clearInterval(Ae),clearInterval(Ie);for(let u of a.values())clearTimeout(u);gt?.close(),r.destroy(),t.close()}}process.once("SIGTERM",X),process.
once("SIGINT",X);try{await r.login(s.token)}catch(u){throw X(),u}return{client:r,store:t,shutdown:X}}require.main===module&&(process.argv.includes("--register")?mt():pt()).catch(e=>{
console.error("Démarrage impossible :",e.message),process.exitCode=1});module.exports={run:pt,register:mt,parseParis:Ne,csv:dt,makeLocks:ct,_test:{G:W,UI:x,Store:lt,calendar:k}};async function mt(){
let{REST:e,Routes:n}=require("discord.js"),{token:s,guild:t}=ut(),r=new e({version:"10"}).setToken(s),i=await r.get(n.user("@me"));await r.put(n.applicationGuildCommands(i.id,t),{body:st()}),
console.log("Commandes Shortcut enregistrées.")}
