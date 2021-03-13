export const Questions = [
    // What would make a good term level distractor?
    // Definition contains the term?
    // Grade level similar?

    {
        prompt: 'long arm of chromosome',
        answers: [ {id: 1,  value: "q arm"}, {id: 2,  value: "p arm"}, {id: 3,  value: "telomere"} ],
        correctId: 1,
        activeId: null,
        kind: 'mcq_fitb'
    },
    {
        prompt: 'humans have 46 _____',
        answers: [ {id: 1,  value: "autosomes"}, {id: 2,  value: "chromosomes"}, {id: 3,  value: "base pairs"} ],
        correctId: 2,
        activeId: null,
        kind: 'mcq'  
    },
    {
        prompt: 'chromosomes are classified according to the relative position of their ________',
        answers: [ {id: 1,  value: "karyotype"}, {id: 2,  value: "centromeres"}, {id: 3,  value: "chromosome rearrangement"} ],
        correctId: 2,
        activeId: null
    }      
]