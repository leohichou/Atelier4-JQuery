 $(document).ready(function() {
        $('#registrationForm').on('submit', function(event) {
            event.preventDefault();
            
            // Regex pour email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Regex pour téléphone
            var phoneRegex = /^[0-9]{10}$/;
    
            var isValid = true;
    
            // Vérification des champs obligatoires
            $('#registrationForm input[required]').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    $(this).css('border', '2px solid red');
                } else {
                    $(this).css('border', '');
                }
            });
    
            // Vérification du format de l'email
            if (!emailRegex.test($('#email').val())) {
                isValid = false;
                $('#email').css('border', '2px solid red');
            } else {
                $('#email').css('border', '');
            }
    
            // Vérification du format du téléphone
            if (!phoneRegex.test($('#telephone').val())) {
                isValid = false;
                $('#telephone').css('border', '2px solid red');
            } else {
                $('#telephone').css('border', '');
            }
    
            // Vérification de la correspondance des mots de passe
            if ($('#password').val() !== $('#confirmPassword').val()) {
                isValid = false;
                $('#password, #confirmPassword').css('border', '2px solid red');
            } else {
                $('#password, #confirmPassword').css('border', '');
            }
    
            if (isValid) {
                alert('Formulaire soumis avec succès !');
            } else {
                alert('Veuillez corriger les erreurs avant de soumettre le formulaire.');
            }
        });
    });
    
