
import { Request, Response } from 'express';
import db from '../db/database';

export const getSin = (req: Request, res: Response) => {
  const id = req.params.id;
  db.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err: Error | null, row: { angle: number }) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const result = Math.sin(row.angle * Math.PI / 180);
      res.json({ angle: row.angle, sin: result });
    }
  });
};

export const getCos = (req: Request, res: Response) => {
  const id = req.params.id;
  db.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err: Error | null, row: { angle: number }) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const result = Math.cos(row.angle * Math.PI / 180);
      res.json({ angle: row.angle, cos: result });
    }
  });
};

export const getTan = (req: Request, res: Response) => {
  const id = req.params.id;
  db.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err: Error | null, row: { angle: number }) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      const result = Math.tan(row.angle * Math.PI / 180);
      res.json({ angle: row.angle, tan: result });
    }
  });
};
