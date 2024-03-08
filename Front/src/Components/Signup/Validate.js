export const validateMail = (email) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false;
  }
  return true;
};

export const validatePass = (pass) => {
  if (pass.length < 5 || pass.length > 10) return false;
  return true;
};

export const validateIgual = (pass, pass2) => {
  if (!pass.length || !pass2.length) return false;
  return pass === pass2;
};
