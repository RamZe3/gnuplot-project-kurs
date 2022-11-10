import {ref} from "vue";

export function useSettingInputs() {
    const settingInputs = ref(
        [
            {id: 1, type: 'base', title: 'Function', placeholder: 'sin(x)'},
            {id: 2, type: 'double', title: 'Range', placeholder1: '0', placeholder2: '3'},
            {
                id: 3, type: 'options', title: 'Function', options: [
                    {title: 'option1', value: '1'},
                    {title: 'option2', value: '2'}
                ]
            },
            {id: 2, type: 'area', title: 'textArea', placeholder: 'Write commands here'},
        ])

    return {
        settingInputs
    }
}