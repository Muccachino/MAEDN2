/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";class e{constructor(e,t){this.id=t,this.color=e,this.position=0,this.isOnField=!1,this.isInEndzone=!1}moveOnPlayerBoard(e){this.position+=e}placeOnField(){this.isOnField=!0,this.position=1}removeFromField(){this.isOnField=!1,this.position=0}setIsInEndzone(){this.isInEndzone=!0}getEndzonePosition(){return this.position-41}getIsInEndzone(){return this.isInEndzone}getMaxDistance(e){return e<=44}}class t{constructor(e,t=e){this.color=e,this.name=t,this.myFigures=[],this.createFigures(),this.myPlayerEndzone=[0,0,0,0]}createFigures(){for(let t=1;t<5;t++){let n=new e(this.color,t);this.myFigures.push(n)}}addFigureInEndzone(e){this.myPlayerEndzone[e.getEndzonePosition()]=e}getFiguresOnBank(){let e=[];return this.myFigures.forEach((t=>{t.isOnField||t.isInEndzone||e.push(t.id)})),e}checkAllFiguresInEndzone(){return this.myFigures.every((e=>e.isInEndzone))}checkNumberInEndzone(){let e=0;return this.myPlayerEndzone.forEach((t=>{0!=t&&e++})),e}checkFiguresOnFieled(){return!!this.myFigures.find((e=>!0===e.isOnField))&&(console.log("hello true on field"),!0)}}class n{constructor(){this.rolledNum=0}rollCube(){this.rolledNum=Math.floor(6*Math.random())+1}getRolledNum(){return this.rolledNum}checkFor6(){return 6===this.rolledNum}}class i{constructor(){this.gameboard=Array(40).fill(0),this.figureStartPoint=0}placeFigure(e,t){const n=t;n?("red"==e.color?this.figureStartPoint=0:"blue"==e.color?this.figureStartPoint=10:"green"==e.color?this.figureStartPoint=20:"yellow"==e.color&&(this.figureStartPoint=30),this.isOccupied(this.figureStartPoint)&&this.resetFigure(this.figureStartPoint),this.gameboard[this.figureStartPoint]=n,n.placeOnField()):console.log("Alle Figuren am Feld")}moveFigure(e,t){let n=this.getIndexOfFigure(e)+t;n>=40&&(n-=40),this.isOccupied(n)&&this.resetFigure(n),this.removeFigureStartPoint(e),e.getIsInEndzone()||(this.gameboard[n]=e)}removeFigureStartPoint(e){const t=this.getIndexOfFigure(e);this.gameboard[t]=0}isOccupied(t){return this.gameboard[t]instanceof e}resetFigure(e){this.gameboard[e].removeFromField()}getIndexOfFigure(e){return this.gameboard.findIndex((t=>t===e))}}class s{constructor(){this.playFieldCoords=[[10,4],[9,4],[8,4],[7,4],[6,4],[6,3],[6,2],[6,1],[6,0],[5,0],[4,0],[4,1],[4,2],[4,3],[4,4],[3,4],[2,4],[1,4],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6],[4,7],[4,8],[4,9],[4,10],[5,10],[6,10],[6,9],[6,8],[6,7],[6,6],[7,6],[8,6],[9,6],[10,6],[10,5]]}addId(e,t){const n=this.playFieldCoords.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==n&&(e.classList.add("playContainer"),e.id=`playfield-${n}`)}}class r{constructor(){this.redEndzone=[[9,5],[8,5],[7,5],[6,5]],this.blueEndzone=[[5,1],[5,2],[5,3],[5,4]],this.greenEndzone=[[1,5],[2,5],[3,5],[4,5]],this.yellowEndzone=[[5,9],[5,8],[5,7],[5,6]],this.redStartPoint=[10,4],this.blueStartPoint=[4,0],this.yellowStartPoint=[6,10],this.greenStartPoint=[0,6],this.redReserve=[[8,1],[8,2],[9,1],[9,2]],this.blueReserve=[[1,1],[1,2],[2,1],[2,2]],this.greenReserve=[[1,8],[1,9],[2,8],[2,9]],this.yellowReserve=[[8,8],[8,9],[9,8],[9,9]]}setEndzone(e,t){const n=this.redEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),i=this.blueEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),s=this.yellowEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),r=this.greenEndzone.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==n&&(e.classList.add("redZone","endZone"),e.id=`red-${n}`),-1!==i&&(e.classList.add("blueZone","endZone"),e.id=`blue-${i}`),-1!==s&&(e.classList.add("yellowZone","endZone"),e.id=`yellow-${s}`),-1!==r&&(e.classList.add("greenZone","endZone"),e.id=`green-${r}`)}setStartPoints(e,t){this.redStartPoint[0]===t[0]&&this.redStartPoint[1]===t[1]&&e.classList.add("redZone","startPoint"),this.blueStartPoint[0]===t[0]&&this.blueStartPoint[1]===t[1]&&e.classList.add("blueZone","startPoint"),this.yellowStartPoint[0]===t[0]&&this.yellowStartPoint[1]===t[1]&&e.classList.add("yellowZone","startPoint"),this.greenStartPoint[0]===t[0]&&this.greenStartPoint[1]===t[1]&&e.classList.add("greenZone","startPoint")}setReserveBank(e,t){const n=this.redReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),i=this.blueReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),s=this.yellowReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1])),r=this.greenReserve.findIndex((e=>e[0]===t[0]&&e[1]===t[1]));-1!==n&&(e.classList.add("redBank","playContainer","redZone"),e.id=`redBank-${n+1}`),-1!==i&&(e.classList.add("blueBank","playContainer","blueZone"),e.id=`blueBank-${i+1}`),-1!==s&&(e.classList.add("yellowBank","playContainer","yellowZone"),e.id=`yellowBank-${s+1}`),-1!==r&&(e.classList.add("greenBank","playContainer","greenZone"),e.id=`greenBank-${r+1}`)}}class a{constructor(){this.gameCubeZone=[5,5]}createGamecubeUi(e,t){this.gameCubeZone[0]===t[0]&&this.gameCubeZone[1]===t[1]&&(e.classList.add("gameCube"),e.id="gameCube",e.innerHTML="6")}showGameCubeNum(e){document.getElementById("gameCube").innerHTML=`${e}`}}class l{constructor(){this.playField=new s,this.playerZones=new r,this.gameCubeUi=new a}createGrid(){const e=document.getElementById("playField");for(let t=0;t<11;t++)for(let n=0;n<11;n++){const i=document.createElement("div"),s=[t,n];this.playField.addId(i,s),this.playerZones.setEndzone(i,s),this.playerZones.setStartPoints(i,s),this.playerZones.setReserveBank(i,s),this.gameCubeUi.createGamecubeUi(i,s),e.appendChild(i)}}updateGameBoardUi(e){for(let t=0;t<e.gameboard.length;t++){const n=e.gameboard[t],i=document.getElementById(`playfield-${t}`);i.className="playContainer",0!==e.gameboard[t]&&(i.classList.add(`${n.color}Figure`),i.classList.add("figure"),i.classList.add(`${n.color}Figure${n.id}`)),"playfield-0"===i.id&&i.classList.add("redZone"),"playfield-10"===i.id&&i.classList.add("blueZone"),"playfield-20"===i.id&&i.classList.add("greenZone"),"playfield-30"===i.id&&i.classList.add("yellowZone")}}updateGameboardPlayerBank(e){e.forEach((e=>{let t=e.getFiguresOnBank();if(t)for(let n=1;n<=e.myFigures.length;n++){const i=document.getElementById(`${e.color}Bank-${n}`);t.includes(n)?(i.classList.add(`${e.color}Figure`),i.classList.add("figure"),i.classList.add(`${e.color}Figure${n}`)):(i.classList.remove(`${e.color}Figure`),i.classList.remove("figure"),i.classList.remove(`${e.color}Figure${n}`))}}))}updateGameBoardPlayerEndzone(e){for(let t=0;t<e.myFigures.length;t++){const n=document.getElementById(`${e.color}-${t}`);e.myFigures[t].isInEndzone?n.classList.add(`${e.color}Figure`):n.classList.remove(`${e.color}Figure`)}}highlightFiguresToMove(e){document.querySelectorAll(`.${e.color}Figure`).forEach((e=>{e.classList.add("playerTurn")}))}unlightFiguresToMove(e){document.querySelectorAll(".playContainer").forEach((e=>{e.classList.remove("playerTurn")}))}}class o{constructor(){this.gamePhase=0,this.attempt=0}getGamePhase(){return this.gamePhase}setGamePhaseOne(){this.gamePhase=0}setGamePhaseTwo(){this.gamePhase=1}setEndGame(){this.gamePhase=3}addNoFigureOnFieldAttempts(){this.attempt++}getNoFigureOnFieldAttempts(){return this.attempt}resetNoFigureOnFieldAttempts(){this.attempt=0}handleGameCube6(e){return e.checkFor6()&&this.resetNoFigureOnFieldAttempts(),e.checkFor6()}checkCanMoveOnThrow(e,t){return console.log("num =",e.getRolledNum()),t.checkFiguresOnFieled()?(console.log("hello check on field"),!0):e.checkFor6()?(console.log("hello gamecube check 6"),!0):(console.log("hello checkmove false"),!1)}}class d{constructor(e){this.gameBoard=new i,this.players=[],this.currentPlayerIndex=0,this.gameCube=new n,this.gameBoardUi=new l,this.createNewGame(),this.gamePhase=0,this.gameRules=new o,this.startScreen=e,this.schlagzwang=!1,this.friendlyFire=!1,this.philanthrop=!1,this.loneFighter=!1}createNewGame(){this.gameBoardUi.createGrid()}addPlayer(e){this.players.push(e)}checkExtraRules(){const e=document.getElementById("rule1"),t=document.getElementById("rule2"),n=document.getElementById("rule3"),i=document.getElementById("rule4");e.checked&&(this.schlagzwang=!0),t.checked&&(this.friendlyFire=!0),n.checked&&(this.philanthrop=!0),i.checked&&(this.loneFighter=!0)}playGame(){const e=document.getElementById("playField");this.startScreen.changeScreens(),this.gameBoardUi.updateGameboardPlayerBank(this.players),this.checkExtraRules();const t=this.getCurrentPlayer();document.getElementById("ueCurrent").innerHTML=`Spieler ${t.color} ist dran`,e.addEventListener("click",(e=>{this.checkGamePhase(e.target),this.gameBoardUi.updateGameBoardUi(this.gameBoard)}))}checkGamePhase(e){let t;const n=this.getCurrentPlayer();console.log("player ",n),this.gameBoardUi.updateGameBoardUi(this.gameBoard),0===this.gameRules.getGamePhase()&&"gameCube"===e.id?(this.rollDice(),this.gameRules.checkCanMoveOnThrow(this.gameCube,n)?(this.gameBoardUi.highlightFiguresToMove(n),this.gameRules.setGamePhaseTwo(),this.gameRules.resetNoFigureOnFieldAttempts()):this.gameRules.getNoFigureOnFieldAttempts()<2?this.gameRules.addNoFigureOnFieldAttempts():(this.gameRules.resetNoFigureOnFieldAttempts(),this.nextTurn())):1===this.gameRules.getGamePhase()&&(t=this.getChosenFigureId(n,e),"number"==typeof t&&this.moveCurrentPlayerFigure(n.myFigures[t])&&(this.gameBoardUi.updateGameboardPlayerBank(this.players),this.gameBoardUi.updateGameBoardPlayerEndzone(this.getCurrentPlayer()),this.nextTurn(),this.gameRules.setGamePhaseOne(),this.gameBoardUi.unlightFiguresToMove(n))),n.checkAllFiguresInEndzone()&&(console.log(`Player ${n.color} has won`),this.endGame())}endGame(){this.gameRules.setEndGame()}getChosenFigureId(e,t){return t.classList.contains(`${e.color}Figure1`)?0:t.classList.contains(`${e.color}Figure2`)?1:t.classList.contains(`${e.color}Figure3`)?2:t.classList.contains(`${e.color}Figure4`)?3:null}getCurrentPlayer(){return this.players[this.currentPlayerIndex]}nextTurn(){if(!this.gameRules.handleGameCube6(this.gameCube)){this.currentPlayerIndex=(this.currentPlayerIndex+1)%this.players.length;const e=this.getCurrentPlayer();document.getElementById("ueCurrent").innerHTML=`Spieler ${e.color} ist dran`}}rollDice(){this.gameCube.rollCube(),this.gameBoardUi.gameCubeUi.showGameCubeNum(this.gameCube.rolledNum)}moveCurrentPlayerFigure(e){const t=this.getCurrentPlayer(),n=this.gameCube.getRolledNum(),i=n+e.position;if(e.isOnField&&i<=40&&e.getMaxDistance(i))return this.gameBoard.moveFigure(e,n),e.moveOnPlayerBoard(n),!0;if(e.isOnField&&i>40&&e.getMaxDistance(i))return e.moveOnPlayerBoard(n),e.setIsInEndzone(),e.removeFromField(),this.gameBoard.moveFigure(e,n),!0;if(!e.isOnField&&6===n&&this.loneFighter){const t=this.getCurrentPlayer();return 4===t.getFiguresOnBank().length&&t.checkNumberInEndzone()+t.getFiguresOnBank().length===4?(e.placeOnField(),this.gameBoard.placeFigure(t,e),!0):(console.log("Fehler moveCurrentPlayerFigure"),!1)}return e.isOnField||6!==n?(console.log("Fehler moveCurrentPlayerFigure"),!1):(e.placeOnField(),this.gameBoard.placeFigure(t,e),!0)}isGameEnd(e){return e.checkAllFiguresInEndzone()}}const c=new class{constructor(){this.createStartScreen()}createStartScreen(){const e=document.getElementById("start_ui"),t=document.createElement("h1");t.textContent="Mensch Ärgere Dich Nicht",null==e||e.appendChild(t);const n=document.createElement("div");n.id="playerContainer",null==e||e.appendChild(n);const i=document.createElement("input"),s=document.createElement("label");s.textContent="Spieler 1",i.setAttribute("type","text"),i.id="playerOne",n.appendChild(s),n.appendChild(i);const r=document.createElement("input"),a=document.createElement("label");a.textContent="Spieler 2",r.setAttribute("type","text"),r.id="playerTwo",n.appendChild(a),n.appendChild(r);const l=document.createElement("input"),o=document.createElement("label");o.textContent="Spieler 3",l.setAttribute("type","text"),l.id="playerThree",n.appendChild(o),n.appendChild(l);const d=document.createElement("input"),c=document.createElement("label");c.textContent="Spieler 4",d.setAttribute("type","text"),d.id="playerFour",n.appendChild(c),n.appendChild(d);const u=document.createElement("div");u.id="ruleContainerAll",null==e||e.appendChild(u);const h=document.createElement("h2");h.textContent="Zusatzregeln",u.appendChild(h);const m=document.createElement("div");m.classList.add("ruleCon");const g=document.createElement("input"),p=document.createElement("label");p.textContent="Schlagzwang",g.type="checkbox",g.id="rule1",m.appendChild(p),m.appendChild(g);const y=document.createElement("div");y.classList.add("ruleCon");const F=document.createElement("input"),C=document.createElement("label");C.textContent="Friendly Fire",F.type="checkbox",F.id="rule2",y.appendChild(C),y.appendChild(F);const E=document.createElement("div");E.classList.add("ruleCon");const P=document.createElement("input"),b=document.createElement("label");b.textContent="Philanthrop",P.type="checkbox",P.id="rule3",E.appendChild(b),E.appendChild(P);const B=document.createElement("div");B.classList.add("ruleCon");const f=document.createElement("input"),I=document.createElement("label");I.textContent="Lone Fighter",f.type="checkbox",f.id="rule4",B.appendChild(I),B.appendChild(f),u.appendChild(m),u.appendChild(y),u.appendChild(E),u.appendChild(B);const k=document.createElement("button");k.textContent="Start",k.id="startButton",null==e||e.appendChild(k)}changeScreens(){const e=document.getElementById("start"),t=document.getElementById("content");e.style.display="none",t.style.display="flex",t.style.flexDirection="column"}};document.getElementById("startButton").addEventListener("click",(()=>{console.log("hello start");const e=new d(c),n=new t("red");e.addPlayer(n);const i=new t("blue");e.addPlayer(i);const s=new t("green");e.addPlayer(s);const r=new t("yellow");e.addPlayer(r),e.playGame()}))})();