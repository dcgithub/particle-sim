  var ReFrame = function(particles, Draw, Compare, Metrics, boost, speedboost, bubble)//call this every frame in the `refresh` function
  {

      for ( var i = 0; i < particles.length; i++ )
      {

          Draw(particles[i])
          Metrics(particles[i])

          particles[i][0] += boost * particles[i][2]
          particles[i][1] += boost * particles[i][3]

          particles[i][2] += 2 * speedboost * (Math.random() - 0.5)
          particles[i][3] += 2 * speedboost * (Math.random() - 0.5)

          for ( var j = 0; j < particles.length; j++ )
          {

              if ( i != j )
              {

                  if ( Math.sqrt(Math.pow(particles[i][0]-particles[j][0], 2)+Math.pow(particles[i][1]-particles[j][1], 2)) <= bubble )
                  {
                      particles[i][2] = -particles[i][2]
                      particles[i][3] = -particles[i][3]
                  }

              }

              Compare(particles[i], particles[j])

          }

          if ( particles[i][0] < 0 ){
              particles[i][0] = 0
              particles[i][2] = -particles[i][2]
          }
          if ( particles[i][0] > 1 ){
              particles[i][0] = 1
              particles[i][2] = -particles[i][2]
          }
          if ( particles[i][1] < 0 ){
              particles[i][1] = 0
              particles[i][3] = -particles[i][3]
          }
          if ( particles[i][1] > 1 ){
              particles[i][1] = 1
              particles[i][3] = -particles[i][3]
          }

      }

  }
