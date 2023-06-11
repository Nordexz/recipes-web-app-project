import 'dotenv/config'
import { send } from "./services/emailService.js";

send({
  email: 'vladyslav.kanaiev@gmail.com',
  subject: 'Tets',
  html: '123'
});
