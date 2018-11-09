package Player.Plants.plantStates {
	import Player.Plants.plantClass2;
	import flash.display.MovieClip;
	import flash.display.Stage;
	
	public class flowerStage1 implements flowerBOI {
		
		public function update(planty:plantClass2):void {
			if(planty.plantHealth >= 75) {
				planty.setState(plantClass2.fStage2);
			}
		}
		public function enter(planty:plantClass2):void {
			planty.gotoAndStop("stage1");
		}
		public function exit(planty:plantClass2):void {
		}
	}	
}
