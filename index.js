module.exports = function(scope){

    function innerFold(scope, fn, result, value){
        var callee = {};

        if(value && typeof value === 'object'){
            for(var key in value){
                result = innerFold(scope, fn, result, value[key]);
            }
        }else{
            result = scope.callWith(
                fn,
                [
                    result,
                    value
                ],
                callee
            );
        }

        return result;
    }

    scope.foldMap = function(scope, args){
        var source = args.next(),
            result = args.next(),
            fn = args.next();

        if(!source){
            return result;
        }

        return innerFold(scope, fn, result, source);
    };
};