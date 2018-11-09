package Player.Plants {
	import flash.display.MovieClip;
	import flash.display.Stage;
	import flash.events.Event;
	import Player.Plants.plantStates.plantStage1;
	import Player.Plants.plantStates.plantyBOI;
	import Player.Plants.plantStates.plantStage2;
	import Player.Plants.plantStates.plantStage3;
	import Player.particle;
	
	public class plantClass extends MovieClip {
		public static const stage1:plantyBOI = new plantStage1();
		public static const stage2:plantyBOI = new plantStage2();
		public static const stage3:plantyBOI = new plantStage3();
		public var plantHealth:Number;
		private var _previousState:plantyBOI;
		public var _currentState:plantyBOI;
		public var plantShotArray:Array;
		public var plantShotCounter:Number;


		public function plantClass() {
			plantShotCounter = 0;
			plantShotArray = new Array;
			_currentState = stage1;
			plantHealth = 0;
			this.addEventListener(Event.ENTER_FRAME, loop);
			_currentState.enter(this);
		}
		private function loop(evt:Event):void {
			if(!_currentState) return;
			_currentState.update(this);
			for each(var shot:particle in plantShotArray) {
				shot.update2();
			}
		}
		public function shoot(xPos:int, yPos:int, count:int, xVel:int):void {
			for(var i:int =- count / 2; i <= count / 2; i++) {
				var plantShot:particle = new bullet();
				plantShot.addEventListener(particle.PURGE_BULLET, purgePlantBulletHandler);
				plantShotArray.push(plantShot);
				main.background.addChild(plantShot);
				var gap:Number = 2 * Math.PI / count;
				var angle:Number = (i + count) * gap;
				var actualxVel:Number = xVel * Math.cos(angle);
				var actualyVel:Number = xVel * Math.sin(angle);
				plantShot.x = xPos;
				plantShot.y = yPos;
				plantShot.xVel = actualxVel;
				plantShot.yVel = actualyVel;
				plantShotCounter = 0;
			}
		}
		public function purgePlantBulletHandler(evt:Event):void {
			var targetBullet:particle = particle(evt.target);
			purgeBullet(targetBullet);
		}
		public function purgeBullet(targetBullet:particle):void {
			targetBullet.removeEventListener(particle.PURGE_BULLET, purgePlantBulletHandler);
			for(var i:int = 0; i < plantShotArray.length; i++) {
				if(plantShotArray[i].name == targetBullet.name) {
					plantShotArray.splice(i, 1);
					main.background.removeChild(targetBullet);
					trace("gone");
					return;
				}
			}
		}
		public function setState(newState:plantyBOI):void {
			if (_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
		}
		public function get previousState():plantyBOI { return _previousState; }
		
		public function get currentState():plantyBOI { return _currentState; }
	}
}
