# gel-fold-map

a fold-map function for gel

*** Does not track keys ***

# usage

    var gelFoldMap = require('gel-fold-map');

Call the gelFoldMap function on your gel instances scope:

    gelFoldMap(gel.scope);

Now you can use foldMap in gel expressions:

Assume data is:

    {
        a: {
            b:1
        },
        c:2
    }

Add all leafs:

    (foldMap
        data
        0
        {
            result value
            (+ result value)
        }
    )

Will result in 3