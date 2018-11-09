package Player.boiStates {
	import Player.BOI;
	
	public interface IBOI {
		function update(player:BOI):void;
		function enter(player:BOI):void;
		function exit(player:BOI):void;
	}
	
}

