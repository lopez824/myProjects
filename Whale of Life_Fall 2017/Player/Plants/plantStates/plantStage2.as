package Player.Plants.plantStates {
	import Player.Plants.plantClass;
	import flash.display.MovieClip;
	import flash.display.Stage;
	
	public class plantStage2 implements plantyBOI {
		
		public function update(planty:plantClass):void {
			planty.plantShotCounter ++;
			if(planty.plantHealth >= 300) {
				planty.setState(plantClass.stage3);
			}
			if(planty.plantShotCounter >= 60) {
				planty.shoot(planty.x, planty.y, 6, 2);
			}
		}
		public function enter(planty:plantClass):void {
			planty.gotoAndStop("stage2");
		}
		public function exit(planty:plantClass):void {
		}
	}	
}
