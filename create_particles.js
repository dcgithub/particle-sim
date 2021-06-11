var CreateParticles = function(number, particles, properties)
{

    for ( var i = 0; i < number; i++ )
    {
        particles.push([Math.random(), Math.random(), 0, 0, ...properties])   
    }

}
