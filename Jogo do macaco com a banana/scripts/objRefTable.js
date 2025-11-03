const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Behaviors.Flash,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{p1: 0},
	{Sólido: 0},
	{chao: 0},
	{palmeira: 0},
	{dol: 0},
	{PularAtravés: 0},
	{tronco: 0},
	{Sprite: 0},
	{Piscar: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Teclado: 0}
];

self.InstanceType = {
	p1: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	palmeira: class extends self.ISpriteInstance {},
	dol: class extends self.ISpriteInstance {},
	tronco: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {}
}