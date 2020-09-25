import {all} from '../global/variables';

export const scrollListener = ( element,
                                stop_trans,
                                selector,
                                className,
                                dataset_conditionals = null,
                                addClass = false,
                                upper_callback,
                                lower_callback
                            ) => {
    // dataset_conditional structure
    /*
    // need to aprrove it
    [
        {
            dataset_name: "jane",
            dataset_value: "doe"
        }
    ]
    */

    // callbacks receive the query element and the className

    let position = element.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const queries = all(selector);
    queries.forEach((query) => {
        let {dataset} = query
        if(dataset_conditionals !== null){
            for(const ds_conditional in dataset_conditionals){ 
                if(dataset[ds_conditional.dataset_name] !== ds_conditional.dataset_value){
                    if(addClass) query.classList.add(className);
                    return;
                }
            }
        }
        if(position >= stop_trans) {
            upper_callback(query, className)
        } else {
            lower_callback(query, className)
        }
    });
}