package Player {
	import Player.boiStates.movementState;
	import Player.boiStates.IBOI;
	import Player.Plants.plantClass;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.display.Stage;
	import flash.ui.Keyboard;
	import flash.geom.Point;
	import Player.boiStates.plantingState;
	import Player.Plants.plantClass2;
	import Player.Plants.pumpkinClass;
	import Player.boiStates.floweringState;
	import Player.boiStates.pumpkining;
	import Player.boiStates.damageState;

	public class BOI extends MovieClip {
		public static const MOVEMENT:IBOI = new movementState();
		public static const planting:IBOI = new plantingState();
		public static const flowering:IBOI = new floweringState(); 
		public static const placingPumpkin:IBOI = new pumpkining();
		public static const damagedBOI:IBOI = new damageState();
		private var _previousState:IBOI;
		private var _currentState:IBOI;
		public var speed:Number = 0;
		public var counter:int = 0;
		public var Xmove:Number;
		public var Ymove:Number;
		public var plantTimer:Number;
		public static var xPos;
		public static var yPos;
		public var input:inputClass;
		public var plantArray:Array;
		public var flowerArray:Array;
		public var pumpkinArray:Array;
		public var plantStateCounter:Number;
		public var plantCheck:Boolean;
		public var flowerCheck:Boolean;
		public var pumpkinCheck:Boolean;
		private var tileMap:Array = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		];
		public function BOI() {
			plantStateCounter = 0;
			plantTimer = 120;
			plantArray = new Array;
			flowerArray = new Array;
			pumpkinArray = new Array;
			_currentState = MOVEMENT;
		}
		public function update2():void {
			//plantTimer ++;
			if(!_currentState) return;
			_currentState.update(this);
			counter++;
			Xmove = input.dDown - input.aDown;
			Ymove = input.sDown - input.wDown;
			var Xspeed2 = Xmove * speed;
			var Yspeed2 = Ymove * speed;
			this.x += Xspeed2;
			this.y += Yspeed2;
			xPos = this.x;
			yPos = this.y;
			if(input.shoot) {
				main.shake(this, 3, 1);
			}
			checks();
		}
		public function update():void {
			plantTimer ++;
			if(!_currentState) return;
			_currentState.update(this);
			counter++;
			Xmove = input.dDown - input.aDown;
			Ymove = input.sDown - input.wDown;
			var Xspeed = Xmove * speed;
			var Yspeed = Ymove * speed;
			this.x += Xspeed;
			this.y += Yspeed;
			xPos = this.x;
			yPos = this.y;
			if(input.shoot) {
				main.shake(this, 3, 1);
			}
			checks();
		}
		private function checks():void {
			for each(var flower:plantClass2 in flowerArray) {
				for each(var water:waterItem in flower.waterItemArray) {
					for(var i:int = 0; i < flower.waterItemArray.length; i++) {
						if(water != null&&water.parent != null&&this.hitTestObject(water)) {
							if(flower.waterItemArray[i].name == water.name) {
								flower.waterItemArray.splice(i, 1);
								water.parent.removeChild(water);
								gun.bulletCount += 100;
								flower.waterTimer = 0;
								return;
							}
						}
					}
				}
			}
		}
		public function setState(newState:IBOI):void {
			if (_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
			counter = 0;
		}
		public function makePlant():void {
			var basicPlant:plantClass = new Plant1();
			plantArray.push(basicPlant);
			main.background.addChild(basicPlant);
			basicPlant.x = this.x;
			basicPlant.y = this.y;
			plantCheck = true;
		}
		public function makeSunflower():void {
			var flower:plantClass2 = new Plant2();
			flowerArray.push(flower);
			main.background.addChild(flower);
			flower.x = this.x;
			flower.y = this.y;
			flowerCheck = true;
		}
		public function makePumpkin():void {
			var pumpkin:pumpkinClass = new pumpkinGroup();
			pumpkinArray.push(pumpkin);
			main.background.addChild(pumpkin);
			pumpkin.x = this.x;
			pumpkin.y = this.y;
			pumpkinCheck = true;
		}
		public function get previousState():IBOI { return _previousState; }
		public function get currentState():IBOI { return _currentState; }
		
	}
}
