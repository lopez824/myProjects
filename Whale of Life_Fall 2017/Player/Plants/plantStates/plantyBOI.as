package Player.Plants.plantStates {
	import Player.Plants.plantClass;
	
	public interface plantyBOI {
		function update(planty:plantClass):void;
		function enter(planty:plantClass):void;
		function exit(planty:plantClass):void;
	}
}
