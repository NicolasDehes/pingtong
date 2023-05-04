interface QuestionElement {
    default: QuestionIndexer,
    text   : QuestionIndexer,
    type   : QuestionIndexer
}

export interface QuestionIndexer {
    [key: string] : any,
}

export const questions : QuestionElement = {
    default : {
        age : "",
        xp  : ""
    },
    text : {
        age : "Quel est votre âge ?",
        xp  : "A combien estimez-vous votre niveau au ping pong entre 1 et 10 ?"
    },
    type : {
        age : "Number",
        xp  : "Number"
    }
}