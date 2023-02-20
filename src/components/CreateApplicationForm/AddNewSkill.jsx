import React from 'react'
import { render } from 'react-dom'
import $ from "jquery"
import { Component } from 'react'
import { Button, Grid } from '@mui/material'

class AddNewSkill extends Component{
    componentDidMount() {

        $('#add').on('click', add);
        $('#remove').on('click', remove);

        const add = () => {
            var new_chq_no = parseInt($('#total_chq').val()) + 1;
            var new_input = "<input type='text' id='skill_" + new_chq_no + "'> <input type='number' id='value_" + new_chq_no + "'>";

            $('#new_chq').append(new_input);

            $('#total_chq').val(new_chq_no);
        };

        const remove = () => {
            var last_chq_no = $('#total_chq').val();

            if (last_chq_no > 1) {
                $('#skill_' + last_chq_no).remove();
                $('#value_' + last_chq_no).remove();
                $('#total_chq').val(last_chq_no - 1);
            }
        };
    }
    
    render() {
        return (
            <div>
                

              <Grid xs = {12} item>
                <div id="new_chq"></div>
                <input type="hidden" value="1" id="total_chq"></input>
              </Grid>
            </div>
            
        );
    }
}

export default AddNewSkill
