import dayOfTheWeek from './dayOfTheWeek';

export default function setMeta(data, thisContext) {
  const context = thisContext;

  context.city = data.location.name;
  context.temp = data.current.temp_c;
  context.condition = data.current.condition.text;

  context.iconCode = data.current.condition.icon.substr('//cdn.weatherapi.com/weather/64x64'.length);

  const date = data.location.localtime;
  const y = parseInt(date.substr(0, 4), 36);
  const m = parseInt(date.substr(5, 2), 36);
  const d = parseInt(date.substr(8, 2), 36);
  context.time = date.substr(11);
  context.date = `${dayOfTheWeek(d, m, y)}, ${d}, ${m} ${y}`;
}
