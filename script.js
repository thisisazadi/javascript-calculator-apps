var current_operand, previous_operand
      var current_operation
      const button_number = document.querySelectorAll('[data-number]')
      const button_operation = document.querySelectorAll('[data-operation]')
      const button_delete = document.querySelector('[data-delete]')
      const button_equal = document.querySelector('[data-equal]')
      const clear = document.querySelector('[data-clear]')
      var previous_operand_text = document.querySelector('.previous')
      var current_operand_text = document.querySelector('.current')

      // Adding Number when clicking on a button
      function add_number(button_number_par) {
        button_number.forEach((button_number_par) => {
          button_number_par.addEventListener('click', () => {
            if (
              button_number_par.textContent === '.' &&
              current_operand_text.textContent.includes('.')
            )
              return
            current_operand_text.textContent += button_number_par.innerHTML
            current_operand = current_operand_text.textContent
          })
        })
      }
      add_number()

      // Buttons operations
      button_operation.forEach((operation_button_par) => {
        operation_button_par.addEventListener('click', () => {
          if (
            previous_operand_text.textContent.includes('/') ||
            previous_operand_text.textContent.includes('*') ||
            previous_operand_text.textContent.includes('+') ||
            previous_operand_text.textContent.includes('-')
          ) {
            let result
            const prev = parseFloat(previous_operand)
            const current = parseFloat(current_operand)
            switch (current_operation) {
              case '+':
                result = current + prev
                break
              case '-':
                result = prev - current
                break
              case '*':
                result = current * prev
                break
              case '/':
                result = prev / current
                break
              default:
                break
            }

            previous_operand_text.textContent =
              result + operation_button_par.innerHTML
            current_operand_text.textContent = ''
            current_operand = ''
            previous_operand = result
            current_operation = operation_button_par.textContent
          } else {
            previous_operand = current_operand
            current_operand = ''
            previous_operand_text.textContent =
              previous_operand + operation_button_par.textContent
            current_operand_text.textContent = ''
            current_operation = operation_button_par.textContent
          }
        })
      })

      // Button eguale
      button_equal.addEventListener('click', () => {
        if (
          previous_operand_text.textContent.includes('/') ||
          previous_operand_text.textContent.includes('*') ||
          previous_operand_text.textContent.includes('+') ||
          previous_operand_text.textContent.includes('-')
        ) {
          let result
          const prev = parseFloat(previous_operand)
          const current = parseFloat(current_operand)
          switch (current_operation) {
            case '+':
              result = current + prev
              break
            case '-':
              result = prev - current
              break
            case '*':
              result = current * prev
              break
            case '/':
              result = prev / current
              break
            default:
              break
          }

          current_operand_text.textContent = result
          current_operand = result
          previous_operand_text.textContent = ''
        } else {
          return
        }
      })

      // Button Supprimer charactere.
      button_delete.addEventListener('click', () => {
        current_operand = current_operand.toString().slice(0, -1)
        current_operand_text.textContent = current_operand
        console.log('The current is ' + current_operand)
      })

      // Button clear
      clear.addEventListener('click', () => {
        current_operand =
          previous_operand =
          current_operation =
          current_operand_text.textContent =
          previous_operand_text.textContent =
            ''
      })