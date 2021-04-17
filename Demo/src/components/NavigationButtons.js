import React from 'react'
import Button from "@material-ui/core/Button"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

export default function NavigationButtons() {
    return (
        <div className="buttons">
            <Button
                variant="contained"
                className="mainButton"
                startIcon={<ShoppingCartIcon/>}
                style={{fontSize: "1vw", margin: "1vw"}}
            >
                SHOP
            </Button>
            <Button
                variant="contained"
                className="mainButton"
                startIcon={<PersonIcon/>}
                style={{fontSize: "1vw", margin: "1vw"}}
            >
                PROFILE
            </Button>
            <Button
                variant="contained"
                className="mainButton"
                startIcon={<AccountBalanceIcon/>}
                style={{fontSize: "1vw", margin: "1vw"}}
            >
                PIGGY BANK
            </Button>
        </div>
    )
}
