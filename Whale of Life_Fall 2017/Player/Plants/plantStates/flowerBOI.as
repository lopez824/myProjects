package Player.Plants.plantStates {
	import Player.Plants.plantClass2;
	
	public interface flowerBOI {
		function update(planty:plantClass2):void;
		function enter(planty:plantClass2):void;
		function exit(planty:plantClass2):void;
	}
}
