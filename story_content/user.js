function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZZSOcz43UB":
        Script1();
        break;
      case "6Dz5lg6zrFm":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyswuvOQv6a87h9EEfAOXx5eHXAhhBnT1Vg_Gllx5zkddsPoWye7oFx0mzKOvdLuv1u/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbyswuvOQv6a87h9EEfAOXx5eHXAhhBnT1Vg_Gllx5zkddsPoWye7oFx0mzKOvdLuv1u/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

