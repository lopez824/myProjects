package Player.UI.UIStates {
	import Player.UI;
	
	public interface UIInterface {
		function update(user:UI):void;
		function enter(user:UI):void;
		function exit(user:UI):void;
	}
}
