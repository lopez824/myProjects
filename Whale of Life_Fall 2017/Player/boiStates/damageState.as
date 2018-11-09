package Player.boiStates {
	import flash.display.MovieClip;
	import Player.BOI;
	
	public class damageState implements IBOI {

		public function update(player:BOI):void {
			player.plantStateCounter ++;
			if(player.plantStateCounter == 9) {
				player.setState(BOI.MOVEMENT);
			}
		}
		public function enter(player:BOI):void {
			player.speed = 0;
			player.gotoAndStop("damaged");
		}
		public function exit(player:BOI):void {
			player.plantStateCounter = 0;
			trace("exit");
		}
	}
}
