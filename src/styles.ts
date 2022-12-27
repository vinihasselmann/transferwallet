import styled from "styled-components";

export const AppContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: white;
        background-color: #29292E;

    header {
        max-height: 50px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #04090D;
        padding: 0 20px;
        
        a {
            font-size: 28px;
        }

        .wrapper {
            display: flex;
            align-items: center;
            gap: 30px;

            button:nth-child(1) {
                background: #7B61FF;
                border-radius: 8px;
                border: none;
                color: white;
            }

            button:nth-child(2) {
                background: transparent;
                border-radius: 8px;
                color: white;
            }
        }
    }

    main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 50vw;
    background-color: #04090D;
    margin: 50px auto;
    border-radius: 30px;

    padding: 30px;
    color: white;
    align-items: center;

    .inputWrapper {
    flex: 1;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    }

    button:first-child {
        width: 150px;
        height: 30px;
        background-color: #29292E;
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 700;
        font-size: 12px;
    }

    button {
        width: 200px;
        height: 50px;
        background-color: #7B61FF;
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 700;
        font-size: 18px;
    }

    input {
        width: 350px;
        height: 50px;
        background-color: #29292E;
        border: none;
        padding: 0 20px;
        border-radius: 10px;
        color: white;
    }
}

@media (max-width: 860px) {

    header {
        
        a {
            font-size: 18px;
        }

        .wrapper {
            gap: 10px;

            button {
                width: 100%;
            }
        }
    }

    main {
        width: 80%;
    }
}

@media (max-width: 530px) {

header {
    
    a {
        font-size: 14px;
    }

    .wrapper {
        gap: 10px;

        button {          
            width: 100%;
        }

        button:nth-child(2) {
            visibility: hidden;
        }
    }
}

main {
    width: 80%;
}

.inputWrapper {
    input {
        width: 200px;
    }

}
}

`