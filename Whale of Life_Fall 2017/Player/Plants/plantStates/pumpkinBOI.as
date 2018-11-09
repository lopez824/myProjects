package Player.Plants.plantStates {
	import Player.Plants.pumpkinClass;
	
	public interface pumpkinBOI {
		function update(pumpkin:pumpkinClass):void;
		function enter(pumpkin:pumpkinClass):void;
		function exit(pumpkin:pumpkinClass):void;
	}
}
