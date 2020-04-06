import React from 'react'
import * as Validations from '../constants/validationRules'

export default function CheckValidation(rules, value) {
    let violateRule={};
    for(let i = 0; i < rules.length; i ++)
    {
        switch(rules[i].ruleName)
        {
            case Validations.REQUIRED_RULE:
                {
                    if(!value)
                    {
                        violateRule = rules[i]; 
                    }
                    break;
                } 
        }
    }
    return violateRule;
}
