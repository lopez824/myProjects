package {
	import Player.BOI;
	import flash.display.StageScaleMode;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.events.MouseEvent;
	import flash.ui.Keyboard;
	import flash.display.Stage;
	import flash.geom.Point;
	import Player.gun;
	import Player.inputClass;
	import Player.particle;
	import Player.Plants.plantClass;
	import Player.Plants.plantClass2;
	import Player.Plants.pumpkinClass;
	import Player.waterItem;
	import Enemies.EnemyA;
	import Enemies.EnemyB;
	import Enemies.EnemyA;
	import Enemies.EnemyB;
	import flash.events.TimerEvent;
	import flash.utils.getTimer;
	import flash.display.Sprite;
	import flash.text.*;
	import com.adobe.tvsdk.mediacore.TextFormat;
	import flash.media.Video;

	public class main extends MovieClip {
		public var player:BOI = new Monroe();
		private var Blaster:gun = new blaster();
		public static var background:Sprite = new background1();
		private var whale:MovieClip = new Whale();
		public var input:inputClass = new inputClass(stage);
		private var spawnDelay:int;
		private var gameStartTime:uint;
		private var gameTime:int;
		private var spawnDelayIncrease:int;
		private var enemies:Vector.<EnemyA>;
		private var titleScreen:MovieClip;
		private var gameOver:MovieClip;
		private var speech:MovieClip = new bubble();
		private var hitCheck1:Boolean = true;
		private var hitCheck2:Boolean = true;
		public static var playerHealth:int = 9;
		private var timeText:TextField = new TextField();
		private var textFormat:TextFormat = new TextFormat();
		private var finalTime:String;
		private var startTime:Number;
		public var orbiter:Orbiter = new Orbiter(); // The MovieClip That Orbits
		public var origin:Origin = new Origin(); // The MovieClip That Is Orbited
		public var orbitAngle:Number = 0; // The Initial Angle Orbiting Starts From
		public var orbitSpeed:Number = 3; // Number Of Pixels Orbited Per Frame
		public var orbitRadius:Number = 20; // Orbiting Distance From Origin
		public var scoreText: TextField; // text field for scores
		public var score: Number = 0;; // score value
		public var finalScore:int; // total score at the end of the game
		public var scoreArray:Array;
		private var scoreTime:int;
		private var hBar:MovieClip = new healthBar;
		
		public function main() {
			titleScreen = new StartScreen();
			titleScreen.x = 0;
			titleScreen.y = 0;
			textFormat.size = 15;
			textFormat.color = 0xFFFFFF;
			addChild(titleScreen);
			titleScreen.ctrls.alpha = 0;
			player.input = input;
			titleScreen.addChild(speech);
			titleScreen.addChild(player);
			player.x = 295;
			player.y = 150;
			Blaster.input = input;
			titleScreen.addChild(Blaster);
			titleScreen.addChild(titleScreen.Well);
			titleScreen.Well.x = 36.10;
			titleScreen.Well.y = 211.95;
			addEventListener(Event.ENTER_FRAME, updateMenu);
		}
		private function updateMenu(evt:Event):void {
			player.update2();
			speech.x = player.x - 10;
			speech.y = player.y - 20;
			Blaster.update();
			HitTests();
			for each(var shot:particle in Blaster.bullets) {
				shot.update();
				collisions(shot);
			}
		}
		private function HitTests():void {
			var playerHalfWidth: Number = Blaster.width / 2;
			var playerHalfHeight: Number = player.height / 2;
			var wallHalfHeight: Number = titleScreen.Ground.y - 75;
			var wellHalfWidth: Number = titleScreen.Well.x;
			var wellHalfHeight: Number = titleScreen.Well.y;
			if (player.x + playerHalfWidth > stage.stageWidth) {
				player.x = stage.stageWidth - playerHalfWidth;
				speech.alpha = 0;
			} else if (player.x - playerHalfWidth < 0) {
				player.x = playerHalfWidth;
				speech.alpha = 0;
			}
			if (player.y + playerHalfHeight > stage.stageHeight) {
				player.y = stage.stageHeight - playerHalfHeight;
				speech.alpha = 0;
			} else if (player.y - playerHalfHeight < wallHalfHeight) {
				player.y = wallHalfHeight + playerHalfHeight;
				speech.alpha = 0;
			}
			if (player.y + playerHalfHeight > stage.stageHeight) {
				player.y = stage.stageHeight - playerHalfHeight;
				speech.alpha = 0;
			}
			if (Blaster.hitTestObject(titleScreen.Well.Water)) {
				gun.bulletCount = 100;
				speech.alpha = 0;
			}
			if(hitCheck2 == true) {
				if (Blaster.hitTestObject(titleScreen.startBtn)) {
					startGameHandler();
					hitCheck2 = false;
				}
			}
			if (hitCheck1 == true) {
				if (Blaster.hitTestObject(titleScreen.ctrlBtn)) {
					speech.alpha = 0;
					titleScreen.removeChild(titleScreen.Title);
					titleScreen.removeChild(titleScreen.Visor);
					titleScreen.ctrlBtn.alpha = 0
					hitCheck1 = false;
					titleScreen.ctrls.alpha = 1;
					titleScreen.ctrls.gotoAndPlay(1);
				}
			}
		}
		private function startGameHandler():void {
			if (player.plantCheck == true || player.flowerCheck == true) {
				player.plantCheck = false;
				player.flowerCheck = false;
				stage.removeChildAt(1);
			}
			titleScreen.removeChildren();
			removeEventListener(Event.ENTER_FRAME, updateMenu);
			startGame();
		}
		private function startGame():void {
			Score();
			spawnDelayIncrease = -50;
			addChild(background);
			setChildIndex(background, 0);
			player.input = input;
			background.addChild(player);
			player.x = 160;
			player.y = 120;
			Blaster.input = input;
			background.addChild(Blaster);
			stage.addEventListener(Event.ENTER_FRAME, gameLoop);
			startTime = getTimer();
			gameStartTime = getTimer();
			gameTime = 0;
			spawnDelay = 3000;
			enemies = new Vector.<EnemyA>();
			for(var i:int = 0; i < 1; i++) {
				var flower:plantClass2 = new Plant2();
				player.flowerArray.push(flower);
				background.addChild(flower);
				flower.x = 180;
				flower.y = 120;
			}
			background.addChild(hBar);
		}
		private function Score():void {
			scoreArray = new Array();
			var scoreFont = new Font1();
			var scoreFormat: TextFormat = new TextFormat();
			scoreFormat.size = 12;
			scoreFormat.align = TextFormatAlign.CENTER;
			scoreFormat.font = scoreFont.fontName;
			scoreText = new TextField();
			scoreText.defaultTextFormat = scoreFormat;
			scoreText.embedFonts = true;
			scoreText.antiAliasType = AntiAliasType.ADVANCED;
			scoreText.border = true;
			scoreText.borderColor = 0x000000;
			scoreText.width = 100;
			scoreText.height = 15;
			scoreText.text = "Score: " + score;
			background.addChild(scoreText);
			scoreText.x = 217;
			scoreText.y = 1;
		}
		private function createEnemy():void {
			var enemyA:EnemyA = new frogMC();
			background.addChild(enemyA);
			background.setChildIndex(enemyA, 1);
			enemyA.x = 160;
			enemyA.y = -10;
			enemyA.target = player; // change to whaley mc whaleface 
			enemies.push(enemyA);
			gameTime = 0;
		}
		private function gameLoop(evt:Event):void {
			hBar.x = player.x;
			hBar.y = player.y - 25;
			scoreText.text = "Score: " + score;
			player.update();
			Blaster.update();
			for each(var shot:particle in Blaster.bullets) {
				shot.update();
				collisions(shot);
			}
			for(var i:int = 0; i < enemies.length; i++) {
				enemies[i].update();
			}
			gameTime = getTimer() - gameStartTime;
			if (gameTime >= spawnDelay) {
					createEnemy();
					if(spawnDelay > 100) {
						spawnDelay += spawnDelayIncrease;
					}
					gameStartTime = getTimer();
				}
			if (playerHealth <= 1) {
				scoreTime = getTimer() / 100;
				trace(scoreTime);
				scoreArray.push(score);
				finalTime = showTime(getTimer() - startTime);
				endGameHandler();
			}
			otherCollisions();
			healthBarUpdate();
			purgeEnemies();
		}
		private function healthBarUpdate():void {
			if (playerHealth == 9){
				hBar.gotoAndStop("one");
			}
			if (playerHealth == 8){
				hBar.gotoAndStop("two");
			}
			if (playerHealth == 7){
				hBar.gotoAndStop("three");
			}
			if (playerHealth == 6){
				hBar.gotoAndStop("four");
			}
			if (playerHealth == 5){
				hBar.gotoAndStop("five");
			}
			if (playerHealth == 4){
				hBar.gotoAndStop("six");
			}
			if (playerHealth == 3){
				hBar.gotoAndStop("seven");
			}
			if (playerHealth == 2){
				hBar.gotoAndStop("eight");
			}
			if (playerHealth == 1){
				hBar.gotoAndStop("nine");
			}
		}
		private function showTime(milliseconds:Number):String {
			var seconds:int = Math.floor((milliseconds/1000) % 60);
			var strSeconds:String = (seconds < 10) ? ("0" + String(seconds)):String(seconds);
			var minutes:int = Math.round(Math.floor((milliseconds/1000)/60));
			var strMinutes:String = (minutes < 10) ? ("0" + String(minutes)):String(minutes);
			var strMilliseconds:String = milliseconds.toString();
			strMilliseconds = strMilliseconds.slice(strMilliseconds.length -3, strMilliseconds.length)
			var timeCode:String = strMinutes + ":" + strSeconds + ':' + strMilliseconds;
			return timeCode;
		}
		private function endGameHandler():void {
			trace(showTime(getTimer() - startTime));
			stage.removeEventListener(Event.ENTER_FRAME, gameLoop);
			background.removeChildren();
			removeChild(background);
			endGame();
		}
		private function endGame():void {
			gameOver = new gameOverScreen();
			gameOver.x =0;
			addChild(gameOver);
			gameOver.sadWhale.x = 180;
			gameOver.sadWhale.y = 145;
			Orbit();
			gameOver.endScoreBox.endScore.multiline = true;
			gameOver.endScoreBox.endScore.text = "Time: " + showTime(getTimer() - startTime) + "\n" + "\n" + 
			"Final Score: " + score + Math.floor(scoreTime) + "\n" + "\n" + 
			"Hi-Score: n/a ";
		}
		private function Orbit():void {
			gameOver.addChild(origin);
			gameOver.addChild(orbiter);
			origin.x = gameOver.sadWhale.x + 55;
			origin.y = gameOver.sadWhale.y - 25;
			orbiter.addEventListener(Event.ENTER_FRAME, updateOrbit);
		}
		private function updateOrbit(evt:Event):void {
			var radians:Number = orbitAngle * (Math.PI / 180); // Converting Degrees To Radians
			orbiter.x = origin.x + orbitRadius *(1.7* Math.cos(radians)); // Position The Orbiter Along x-axis
			orbiter.y = origin.y + orbitRadius * (.65*Math.sin(radians)); // Position The Orbiter Along y-axis
			orbitAngle += orbitSpeed; // Object will orbit clockwise
			//orbitAngle -= orbitSpeed; // Object will orbit counter-clockwise
			orbiter.rotation = (Math.atan2(orbiter.y-origin.y, orbiter.x-origin.x) * 180 / Math.PI); // continually facing one direction
		}
		private function collisions(shot:particle) {
			for each(var plant:plantClass in player.plantArray) {
				if(plant != null&&plant.hitTestObject(shot)&&plant._currentState != plantClass.stage3) {
					Blaster.purgeBullet(shot);
					plant.plantHealth += 1;
					shake(plant, 3, 1);
				}
			}
			for each(var flower:plantClass2 in player.flowerArray) {
				if(flower != null&&flower.hitTestObject(shot)&&flower._currentState != plantClass2.fStage2) {
					Blaster.purgeBullet(shot);
					flower.plantHealth += 1;
					shake(flower, 3, 1);
				}
			}
			for each(var pumpkin:pumpkinClass in player.pumpkinArray) {
				if(pumpkin != null&&pumpkin.hitTestObject(shot)&&pumpkin._currentState != pumpkinClass.pumpkinStage2) {
					Blaster.purgeBullet(shot);
					pumpkin.plantHealth += 1;
					shake(pumpkin, 3, 1);
				}
			}
		}
		private function purgeEnemies():void {
			for each(var enemy:EnemyA in enemies) {
				if(enemy != null && EnemyA.ATTACK && enemy.deathCounter == 24) {
					removeEnemy(enemy);
				}
			}
		}
		private function removeEnemy(enemy:EnemyA):void {
			for(var i:int = 0; i < enemies.length; i++) {
				if(enemies[i].name == enemy.name) {
					enemies.splice(i, 1);
					background.removeChild(enemy);
					/*trace("enemyGone!");*/
					return;
				}
			}
		}
		private function otherCollisions():void {
			for each(var plant:plantClass in player.plantArray) {
				for each(var enemy2:EnemyA in enemies) {
					for each(var plantShot:particle in plant.plantShotArray) {
						for(var i:int = 0; i < plant.plantShotArray.length; i++) {
							if(enemy2.currentFrame != 4 && enemy2 != null && plant != null&&plantShot != null&&plantShot.parent != null&&enemy2.hitTestPoint(plantShot.x, plantShot.y)) {
								if(plant.plantShotArray[i].name == plantShot.name) {
									plant.plantShotArray.splice(i, 1);
									plantShot.parent.removeChild(plantShot);
									enemy2.setState(EnemyA.dead);
									score += 100;
									return;
								}
							}
						}
					}
				}
			}
			for each(var enemy:EnemyA in enemies) {
				if(enemy.currentFrame != (3) && enemy != null && enemy.hitTestObject(player)) {
					player.setState(BOI.damagedBOI);
				}
				for each(var bullet:particle in Blaster.bullets) {
					if(enemy.currentFrame == 2 && enemy != null && enemy.hitTestObject(bullet)) {
						enemy.setState(EnemyA.dead);
						score += 100;
					}
				}
			}
		}
		public static function shake(mc:MovieClip, frames:int = 10, maxShakeAmount:int = 30):void {
			if(!mc.shakeTime||mc._shakeTime <= 0) {
				mc.startPosition = new Point(mc.x, mc.y);
				mc._shakeTime = frames;
				mc._maxShakeAmount = maxShakeAmount;
				mc.addEventListener(Event.ENTER_FRAME, handleShakeEnterFrame);
			}
			else {
				mc.startPosition = new Point(mc.x, mc.y);
				mc._shakeTime += frames;
				mc._maxShakeAmount = maxShakeAmount;
			}
		}
		public static function handleShakeEnterFrame(evt:Event):void {
			var mc:MovieClip = MovieClip(evt.currentTarget);
			var shakeAmount:Number = Math.min(mc._maxShakeAmount, mc._shakeTime);
			mc.x = mc.startPosition.x + (-shakeAmount / 2 + Math.random() * shakeAmount);
			mc.y = mc.startPosition.y + (-shakeAmount / 2 + Math.random() * shakeAmount);
			mc._shakeTime--;
			if(mc._shakeTime <= 0) {
				mc._shakeTime = 0;
				mc.removeEventListener(Event.ENTER_FRAME, handleShakeEnterFrame);
			}
		}
	}
}
