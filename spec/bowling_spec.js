describe('Bowling', function() {
  var theDude;
  beforeEach(function() {
    theDude = new Bowling();
  });

  describe('it knows which frame it is, ', function() {
    it('returns 1 for first game.', function() {
      expect(theDude._currentFrame).toEqual(1);
    });
  });
  describe('it knows which throw it is, ', function() {
    it('returns \'first\' at the start of game.', function() {
      expect(theDude._currentThrow).toEqual('first');
    });
  });
});