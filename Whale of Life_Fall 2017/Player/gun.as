package Player {
	import flash.display.MovieClip;
	import flash.events.Event;
	import Player.BOI;
	import Player.Plants.plantClass;
	import Player.BOI;
	import flash.geom.Point;
	
	public class gun extends MovieClip {
		private var rateofFire:Number;
		public var bullets:Array;
		private var waterSpawn:Number;
		public var input:inputClass;
		public static var bulletCount:Number;

		public function gun() {
			bullets = new Array;
			rateofFire = 5;	
			waterSpawn = 0;
			bulletCount = 200;
		}
		public function update():void {
			rateofFire ++;
			waterSpawn ++;
			if(input.rightpress == true&&input.downpress == false&&input.uppress == false&&input.leftpress == false) {
				this.rotation = 0;
				this.scaleX = 1;
				this.scaleY = 1;
			}
			if(input.leftpress == true&&input.rightpress == false&&input.uppress == false&&input.downpress == false) {
				this.rotation = 180;
				this.scaleY = -1;
			}
			if(input.uppress == true&&input.rightpress == false&&input.downpress == false&&input.leftpress == false) {
				this.rotation = 270;
			}
			if(input.downpress == true&&input.rightpress == false&&input.uppress == false&&input.leftpress == false) {
				this.rotation = 90;
			}
			if(input.downpress == true&&input.rightpress == true&&input.uppress == false&&input.leftpress == false) {
				this.rotation = 45;
				this.scaleY = 1;
			}
			if(input.downpress == true&&input.leftpress == true&&input.uppress == false&&input.rightpress == false) {
				this.rotation = 135;
				this.scaleY = -1;
			}
			if(input.uppress == true&&input.leftpress == true&&input.downpress == false&&input.rightpress == false) {
				this.rotation = 225;
				this.scaleY = -1;
			}
			if(input.uppress == true&&input.rightpress == true&&input.downpress == false&&input.leftpress == false) {
				this.rotation = 315;
				this.scaleY = 1;
			}
			this.x = BOI.xPos;
			this.y = BOI.yPos;
			if(rateofFire >= 2&&input.shoot == true&&bulletCount > 0) {
				rateofFire = 0;
				shootBullet();
			}
			if(waterSpawn >= 10&&input.shoot == true&&bulletCount > 0) {
				waterSpawn = 0;
				spawnWater();
			}
			waterTank();
		}
		private function waterTank():void {
			if(input.shoot == true&&bulletCount > 0) {
				this.gotoAndStop("firing");
			}
			else(this.gotoAndStop("idle"));
			if(bulletCount == 0) {
				this.gotoAndStop("dead");
			}
		}
		private function spawnWater():void {
			var waterTrail:water = new watertrail();
			main.background.addChild(waterTrail);
			waterTrail.x = x + Math.cos(this.rotation * Math.PI / 180) * 13;
			waterTrail.y = y + Math.sin(this.rotation * Math.PI / 180) * 13;
			waterTrail.rotation = this.rotation;
		}
		private function shootBullet():void {
			var shot:particle = new bullet();
			bullets.push(shot);
			main.background.addChild(shot);
			shot.addEventListener(particle.PURGE_BULLET, purgeBulletHandler);
			shot.x = x + Math.cos(this.rotation * Math.PI / 180) * 13;
			shot.y = y + Math.sin(this.rotation * Math.PI / 180) * 13;
			shot.xVel = Math.cos(this.rotation * Math.PI / 180) * 2;
			shot.yVel = Math.sin(this.rotation * Math.PI / 180) * 2;
			bulletCount -= 1;
		}
		private function purgeBulletHandler(evt:Event):void {
			var targetBullet:particle = particle(evt.target);
			purgeBullet(targetBullet);
		}
		public function purgeBullet(targetBullet:particle):void {
			targetBullet.removeEventListener(particle.PURGE_BULLET, purgeBulletHandler);
			for(var i:int = 0; i < bullets.length; i++) {
				if(bullets[i].name == targetBullet.name) {
					bullets.splice(i, 1);
					main.background.removeChild(targetBullet);
					return;
				}
			}
		}
	}
}
