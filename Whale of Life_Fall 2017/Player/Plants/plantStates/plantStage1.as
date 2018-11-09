package Player.Plants.plantStates {
	import Player.Plants.plantClass;
	import flash.display.MovieClip;
	import flash.display.Stage;
	
	public class plantStage1 implements plantyBOI {
		
		public function update(planty:plantClass):void {
			if(planty.plantHealth >= 75) {
				planty.setState(plantClass.stage2);
			}
		}
		public function enter(planty:plantClass):void {
			planty.gotoAndStop("stage1");
		}
		public function exit(planty:plantClass):void {
		}
	}	
}
