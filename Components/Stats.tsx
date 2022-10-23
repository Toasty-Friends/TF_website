
export default function Stats() {

    var symbol;
    var projectName= "Primates";
    var projectImage;
    var floorprice = 0;
    var listed = 1;
    var totalVolume = 2;
    var oneDayVol = 3;
    var sevenDayVol = 4;
    var thirtyDayVol = 5;
    var prevOneDayVol = 6;
    var prevSevenDayVol = 7;
    var prevThirtyDayVol = 8;

  return(
    <>
            !!!!!!!!!!!!!THS IS NOT WORKING!!!!!!!!!!!!
        <h2>Check on the stats of any project!</h2>
        <form>
  <label>
    Project Symbol: &nbsp; 
    <input type="text" name="symbol" />
  </label>
  <input type="submit" value="Submit" />
</form>
        <h4>{projectName}</h4>
        <img src={projectImage}/>
        <p>Floor Price: {floorprice}</p>
        <p>Listed: {listed}</p>
        <p>Total Volume: {totalVolume}</p>
        <p>1 day volume: {oneDayVol}</p>
        <p>7 day volume: {sevenDayVol}</p>
        <p>30 day volume: {thirtyDayVol}</p>
        <p>Prev.1 day volume: {prevOneDayVol}</p>
        <p>Prev.7 day volume: {prevSevenDayVol}</p>
        <p>Prev. 20 day volume: {prevThirtyDayVol}</p>

    </>
  );
};
