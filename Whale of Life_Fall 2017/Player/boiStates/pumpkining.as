package Player.boiStates {
	import flash.display.MovieClip;
	import Player.BOI;
	
	public class pumpkining implements IBOI {

		public function update(player:BOI):void {
			player.plantStateCounter ++;
			if(player.plantStateCounter == 10) {
				player.makePumpkin();
			}
			if(player.plantStateCounter == 15) {
				player.setState(BOI.MOVEMENT);
			}
		}
		public function enter(player:BOI):void {
			player.speed = 0;
			player.gotoAndStop("planting");
		}
		public function exit(player:BOI):void {
			player.plantStateCounter = 0;
			player.plantTimer = 0;
		}
	}
}
